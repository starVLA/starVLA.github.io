---
title: 项目概览
description: StarVLA 的定位、当前能力与关键资源入口。
---

## 愿景

StarVLA 是一个“乐高式”的模块化代码库，用于把视觉-语言模型（VLM）发展为视觉-语言-动作模型（VLA）。模型、数据、训练、配置与评测组件遵循高内聚低耦合原则，支持快速原型与独立调试。

## 关键特性

### VLA 框架

- **Qwen-FAST**：Qwen2.5-VL-3B + 快速 tokenizer，生成离散动作 token（pi0-fast 风格）。
- **Qwen-OFT**：Qwen2.5-VL-3B + MLP 动作头，并行回归连续动作（OpenVLA-OFT/EO 风格）。
- **Qwen-PI**：Flow-Matching 动作专家，扩散式连续动作预测（pi0 风格）。
- **Qwen-GR00T**：双系统架构，Qwen2.5-VL-3B 负责高层推理，FM 负责快速动作预测。

### 仿真基准

已支持或计划支持的基准：

- 已支持：SimplerEnv、LIBERO、RoboCasa、RoboTwin、BEHAVIOR。
- 规划中：SO101、CALVIN、RLBench。

#### Benchmark 测试结果

![StarVLA 在 SimplerEnv 上的测试结果。](../../../assets/starvla_simpleEnv.png)

![StarVLA 在 LIBERO 上的测试结果。](../../../assets/starvla_LIBERO.png)

![StarVLA 在 RoboCasa 上的测试结果。](../../../assets/stavla_RoboCasa.png)

### 训练策略

- 单任务模仿学习。
- 多模态多任务协同训练。
- 强化学习适配（规划中）。

### 结果与报告

结果持续更新在 Overleaf 报告： https://www.overleaf.com/read/qqtwrnprctkf#d5bdce

## 下一步

- 先阅读 [快速开始](/zh-cn/getting-started/quick-start/) 完成环境搭建与验证。
- 在 [乐高式设计](/zh-cn/design/lego-like/) 了解核心设计理念。
- 在 [模型库](/zh-cn/model-zoo/) 查看已发布模型与检查点。


## 社区与链接

- Hugging Face：https://huggingface.co/StarVLA
- 微信群：https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845

---

**基于 StarVLA 的项目：**

- **NeuroVLA**：[面向快速反射式机器人控制的类脑具身智能](https://github.com/guoweiyu/NeuroVLA)。
- **PhysBrain**：[以人类第一视角数据连接 VLM 与物理智能](https://zgc-embodyai.github.io/PhysBrain)。

---

**最新动态**

- **2025/12/25**：建立 Behavior-1K、RoboTwin 2.0 与 CALVIN 的流水线，期待与社区共享基线。
- **2025/12/25**：发布 RoboCasa 评测支持，无预训练即可达到 SOTA，详见主仓库 `examples/Robocasa_tabletop`。
- **2025/12/15**：完成回归测试，持续更新见 [Daily Development Log](https://github.com/starVLA/starVLA/issues/64#issue-3727060165)。
- **2025/12/09**：支持训练 VLM、VLA 与 VLA+VLM 协同训练，见 `examples/CoTrainVLM`。
- **2025/11/12**：新增 Florence-2 支持，可在单张 A100 上训练，详见 `乐高式设计`。
- **2025/10/30**：发布 LIBERO 训练与评测指南。
- **2025/10/25**：修复脚本链接与打包流程，感谢社区反馈。
