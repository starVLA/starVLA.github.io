---
title: BEHAVIOR-1K Evaluation
description: Run StarVLA framework with the BEHAVIOR-1K Benchmark.
---

:::caution[Under Construction]
This document is under active development.
:::

This document provides instructions to run our framework with the [BEHAVIOR-1K Benchmark](https://github.com/StanfordVL/BEHAVIOR-1K). We follow the structure of [2025 BEHAVIOR Challenge](https://behavior.stanford.edu/challenge/index.html) so that you can train and evaluate on the 50 full-length household tasks.

The evaluation process consists of two main parts:

1. Setting up the `behavior` environment and dependencies.
2. Running the evaluation by launching services in both `starVLA` and `behavior` environments.

:::note[GPU Requirements]
To run evaluation on BEHAVIOR benchmark, you should **not** use GPUs without RT Cores (A100, H100). Otherwise you may encounter problems of Segmentation fault or low resolution. See [this issue](https://github.com/StanfordVL/BEHAVIOR-1K/issues/1872#issuecomment-3455002820) and [this discussion](https://github.com/StanfordVL/BEHAVIOR-1K/issues/1875#issuecomment-3444246495) for more details.
:::

---

## BEHAVIOR Evaluation

### 1. Environment Setup

To set up the conda environment for `behavior`:

```bash
git clone https://github.com/StanfordVL/BEHAVIOR-1K.git
conda create -n behavior python=3.10 -y
conda activate behavior
cd BEHAVIOR-1K
pip install "setuptools<=79"
./setup.sh --omnigibson --bddl --joylo --dataset
conda install -c conda-forge libglu
pip install rich omegaconf hydra-core msgpack websockets av pandas google-auth
```

Also in starVLA environment:

```bash
pip install websockets
```

---

### 2. Evaluation Workflow

Steps:
1. Download the checkpoint
2. Choose the script below according to your need

#### (A) Parallel Evaluation Script

```bash
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 bash examples/Behavior/start_parallel_eval.sh
```

Before running `start_parallel_eval.sh`, set the following paths:
- `star_vla_python`: Python interpreter for the StarVLA environment
- `sim_python`: Python interpreter for the Behavior environment
- `TASKS_JSONL_PATH`: Task description file downloaded from the [training dataset](https://huggingface.co/datasets/behavior-1k/2025-challenge-demos) (included at `examples/Behavior/tasks.jsonl`)
- `BEHAVIOR_ASSET_PATH`: Local path to the behavior asset path (default is in `BEHAVIOR-1K/datasets` after installing with `./setup.sh`)

#### (B) Debugging with Separate Terminals

For the ease of debugging, you may also start the client (evaluation environment) and server (policy) in two separate terminals:

```bash
bash examples/Behavior/start_server.sh
bash examples/Behavior/start_client.sh
```

The above debugging files will conduct evaluation on train set.

#### (C) Per-Task Evaluation (Memory-Safe)

To prevent memory overflow, we implemented another file `start_parallel_eval_per_task.sh`:

```bash
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 bash examples/Behavior/start_parallel_eval_per_task.sh
```

- The script will run evaluation for each task in `INSTANCE_NAMES` iteratively
- For each task, allocate all instances from `TEST_EVAL_INSTANCE_IDS` across GPUs
- Wait for the previous task to finish, then proceed to the next task

---

## Notes

### Wrapper Types

1. **RGBLowResWrapper**: Only uses RGB as visual observation and camera resolutions of 224×224. Only using low-res RGB can help speed up the simulator and reduce evaluation time. This wrapper is OK to use in the standard track.

2. **DefaultWrapper**: Wrapper with the default observation config used during data collection (RGB + depth + segmentation, 720p for head camera and 480p for wrist camera). This wrapper is OK to use in the standard track, but evaluation will be considerably slower compared to RGBLowResWrapper.

3. **RichObservationWrapper**: Loads additional observation modalities, such as normal and flow, as well as privileged task information. This wrapper can only be used in the privileged information track.

### Action Dimensions

BEHAVIOR has action dim = 23:

```python
"R1Pro": {
    "base": np.s_[0:3],           # Indices 0-2
    "torso": np.s_[3:7],          # Indices 3-6
    "left_arm": np.s_[7:14],      # Indices 7-13
    "left_gripper": np.s_[14:15], # Index 14
    "right_arm": np.s_[15:22],    # Indices 15-21
    "right_gripper": np.s_[22:23] # Index 22
}
```

### Video Saving

The video will be saved in the format of `{task_name}_{idx}_{epi}.mp4`, where `idx` is the instance number, `epi` is the episode number.

### Common Issues

**Segmentation fault (core dumped):** A likely reason is Vulkan is not successfully installed. Check [this link](https://maniskill.readthedocs.io/en/latest/user_guide/getting_started/installation.html#vulkan).

**ImportError: libGL.so.1: cannot open shared object file:**
```bash
apt-get install ffmpeg libsm6 libxext6 -y
```
