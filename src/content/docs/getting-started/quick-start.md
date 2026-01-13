---
title: Quick Start
description: Install StarVLA, verify your setup, run evaluations, and train a baseline.
---

## Environment Setup

Clone the main repository and create a Python environment:

```bash
# Clone the repo
git clone https://github.com/starVLA/starVLA

# Create conda environment
conda create -n starVLA python=3.10 -y
conda activate starVLA

# Install requirements
pip install -r requirements.txt

# Install FlashAttention2
pip install flash-attn --no-build-isolation

# Install starVLA
pip install -e .
```

### Common Issues: flash-attn

`flash-attn` must match your CUDA toolkit (nvcc) and PyTorch versions.

```bash
nvcc -V
pip list | grep -E 'torch|transformers|flash-attn'
```

If installation fails, choose a version compatible with your CUDA and PyTorch setup. The team verified `flash-attn==2.7.4.post1` with nvcc `12.0` and `12.4`.

## Quick Check StarVLA

Run a minimal framework test with fake inputs:

```bash
python starVLA/model/framework/QwenGR00T.py
```

Download the base model and place it at:

```
./playground/Pretrained_models/Qwen3-VL-4B-Instruct
```

If the setup is correct, the script prints the model and `model.predict_action(fake_data)` returns unnormalized actions.

## Evaluate Existing Models

Benchmark-specific evaluation guides live under `examples/` in the main repo. A recommended start is the LIBERO simulator:

1. Download **Qwen2.5-VL-GR00T-LIBERO-4in1** from Hugging Face.
2. Follow the environment setup in `examples/LIBERO`.
3. Set environment variables in `examples/LIBERO/eval_files/eval_libero.sh` and `examples/LIBERO/eval_files/run_policy_server.sh`.
4. Run:

```bash
bash examples/LIBERO/eval_files/run_policy_server.sh &
bash examples/LIBERO/eval_files/eval_libero.sh
```

**Common issue:** If you see `NotImplementedError: Framework QwenGR00T is not implemented`, run `python starVLA/model/framework/QwenGR00T.py` to validate the environment.

## Train Your Own Model

Training scripts live under `examples/`. We recommend starting with LIBERO:

1. Edit `examples/LIBERO/train_files/run_libero_train.sh` with your checkpoint, dataset root, and output directory.
2. Launch training:

```bash
bash examples/LIBERO/train_files/run_libero_train.sh
```

**Note:** Ensure all absolute paths inside the script match your local environment.
