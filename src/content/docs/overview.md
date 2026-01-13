---
title: Project Overview
description: What StarVLA is, what it supports today, and where to find core capabilities.
---

## Vision

StarVLA is a lego-like, modular codebase for developing Vision-Language Models (VLMs) into Vision-Language-Action (VLA) models. Each component (model, data, trainer, config, evaluation) is designed for high cohesion and low coupling so you can prototype quickly and debug in isolation.

## Latest Updates

- **2025/12/25**: Pipelines established for Behavior-1K, RoboTwin 2.0, and CALVIN; looking to share baselines with the community.
- **2025/12/25**: RoboCasa evaluation support released, achieving SOTA without pretraining. See `examples/Robocasa_tabletop` in the main repo.
- **2025/12/15**: Release regression check completed; ongoing updates in the [Daily Development Log](https://github.com/starVLA/starVLA/issues/64#issue-3727060165).
- **2025/12/09**: Open-source training for VLM, VLA, and VLA+VLM co-training. See `examples/CoTrainVLM`.

## Historical Milestones

- **2025/11/12**: Florence-2 support added for resource-constrained VLM training (single A100). See `Lego-like Design` for workflow notes.
- **2025/10/30**: LIBERO training and evaluation guides released.
- **2025/10/25**: Script links and packaging polished based on community feedback.

## Projects Based on StarVLA

- **NeuroVLA**: [A Brain-like Embodied Intelligence for Fluid and Fast Reflexive Robotics Control](https://github.com/guoweiyu/NeuroVLA).
- **PhysBrain**: [Human Egocentric Data as a Bridge from VLM to Physical Intelligence](https://zgc-embodyai.github.io/PhysBrain).

## Key Features

### VLA Frameworks

- **Qwen-FAST**: Qwen2.5-VL-3B with fast tokenizer generating discrete action tokens (pi0-fast style).
- **Qwen-OFT**: Qwen2.5-VL-3B with MLP action head for parallel continuous actions (OpenVLA-OFT/EO style).
- **Qwen-PI**: Flow-Matching action expert with diffusion-based continuous actions (pi0 style).
- **Qwen-GR00T**: Dual-system VLA with Qwen2.5-VL-3B for reasoning and FM for fast action prediction.

### Simulation Benchmarks

Supported or planned benchmarks:

- Supported: SimplerEnv, LIBERO, RoboCasa, RoboTwin, BEHAVIOR.
- Planned: SO101, CALVIN, RLBench.

### Training Strategies

- Single imitation learning.
- Multimodal multi-task co-training.
- Reinforcement learning adaptation (planned).

### Results & Reports

Results are continuously tracked in a live Overleaf report: https://www.overleaf.com/read/qqtwrnprctkf#d5bdce

## Where to Go Next

- Set up your environment and verify installation in `Quick Start`.
- Explore design principles in `Lego-like Design`.
- Browse checkpoints in `Model Zoo`.

## Community & Links

- Hugging Face: https://huggingface.co/StarVLA
- WeChat group: https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845
