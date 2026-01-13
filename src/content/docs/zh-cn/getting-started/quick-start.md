---
title: 快速开始
description: 安装 StarVLA、完成环境验证、运行评测并训练基线。
---

## 环境安装

克隆主仓库并创建 Python 环境：

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

### 常见问题：flash-attn

`flash-attn` 需要与 CUDA 工具链（nvcc）和 PyTorch 版本匹配：

```bash
nvcc -V
pip list | grep -E 'torch|transformers|flash-attn'
```

若安装失败，请选择与 CUDA 和 PyTorch 兼容的版本。已验证 `flash-attn==2.7.4.post1` 可在 nvcc `12.0` 与 `12.4` 上工作。

## 快速验证 StarVLA

使用假数据进行框架自检：

```bash
python starVLA/model/framework/QwenGR00T.py
```

下载基础模型并放在：

```
./playground/Pretrained_models/Qwen3-VL-4B-Instruct
```

成功时会打印模型结构，且 `model.predict_action(fake_data)` 可返回未归一化动作。

## 评测已有模型

评测指南位于主仓库 `examples/` 目录。推荐从 LIBERO 开始：

1. 下载 Hugging Face 上的 **Qwen2.5-VL-GR00T-LIBERO-4in1**。
2. 按 `examples/LIBERO` 中说明配置环境。
3. 设置 `examples/LIBERO/eval_files/eval_libero.sh` 与 `examples/LIBERO/eval_files/run_policy_server.sh` 的环境变量。
4. 运行：

```bash
bash examples/LIBERO/eval_files/run_policy_server.sh &
bash examples/LIBERO/eval_files/eval_libero.sh
```

**常见问题：** 若出现 `NotImplementedError: Framework QwenGR00T is not implemented`，请先运行 `python starVLA/model/framework/QwenGR00T.py` 验证环境。

## 训练你的模型

训练脚本同样位于 `examples/`。推荐先使用 LIBERO：

1. 编辑 `examples/LIBERO/train_files/run_libero_train.sh`，设置 checkpoint、数据根目录与输出路径。
2. 启动训练：

```bash
bash examples/LIBERO/train_files/run_libero_train.sh
```

**注意：** 请确保脚本内的绝对路径与本地环境一致。
