export type Locale = 'en' | 'zh';
const DOCS_BASE = 'https://starvla.github.io/docs';
const GITHUB_REPO = 'starVLA/starVLA';
const GITHUB_REPO_API = `https://api.github.com/repos/${GITHUB_REPO}`;

export const landingContent = {
  meta: {
    title: 'starVLA | Agile Lego-like Embodied AI Development',
    description:
      'Accelerate embodied AI delivery with agile, lego-like engineering workflows, reproducible benchmarks, and deployment-ready interfaces.',
  },
  nav: [
    { id: 'overview', en: 'Overview', zh: '概览' },
    { id: 'quick-start', en: 'Quick Start', zh: '快速开始' },
    { id: 'benchmarks', en: 'Benchmarks', zh: '基准结果' },
    { id: 'model-zoo', en: 'Model Zoo', zh: '模型库' },
    { id: 'community', en: 'Community', zh: '社区' },
  ],
  hero: {
    badge: { en: 'Open-source Agile, Lego-like Robotics Stack', zh: '面向机器人敏捷与 Lego 式开发的开源栈' },
    title: {
      en: 'An Agile, Lego-like Codebase for Embodied AI Engineering',
      zh: '面向具身智能敏捷与 Lego 式工程的开发代码库',
    },
    subtitle: {
      en: 'Unify lego-like framework modules, training recipes, benchmark evaluation, and deployment interfaces so teams can iterate and ship faster.',
      zh: '统一 Lego 式框架模块、训练流程、基准评测与部署接口，让团队更快迭代并交付。',
    },
    reportCta: { en: 'Technical Report', zh: '技术报告', href: 'https://arxiv.org/abs/2604.05014' },
    primaryCta: { en: 'Read Documentation', zh: '查看文档', href: DOCS_BASE },
    secondaryCta: { en: 'Explore GitHub', zh: '查看 GitHub', href: 'https://github.com/starVLA/starVLA' },
    tertiaryCta: { en: 'Hugging Face', zh: 'Hugging Face', href: 'https://huggingface.co/StarVLA' },
  },
  metrics: [
    {
      key: 'stars',
      label: { en: 'GitHub Stars', zh: 'GitHub Stars' },
      badgeUrl: 'https://img.shields.io/badge/dynamic/json.json',
      badgeSourceUrl: GITHUB_REPO_API,
      badgeQuery: '$.stargazers_count',
      badgeLabel: 'stars',
      fallbackBadgeUrl: `https://img.shields.io/github/stars/${GITHUB_REPO}.json`,
      valueFormat: 'compact-number',
      fallback: '1.5k',
      href: 'https://github.com/starVLA/starVLA/stargazers',
    },
    {
      key: 'forks',
      label: { en: 'Forks', zh: 'Forks' },
      badgeUrl: 'https://img.shields.io/badge/dynamic/json.json',
      badgeSourceUrl: GITHUB_REPO_API,
      badgeQuery: '$.forks_count',
      badgeLabel: 'forks',
      fallbackBadgeUrl: `https://img.shields.io/github/forks/${GITHUB_REPO}.json`,
      valueFormat: 'compact-number',
      fallback: '174',
      href: 'https://github.com/starVLA/starVLA/network',
    },
    {
      key: 'issues',
      label: { en: 'Open Issues', zh: 'Open Issues' },
      badgeUrl: 'https://img.shields.io/badge/dynamic/json.json',
      badgeSourceUrl: GITHUB_REPO_API,
      badgeQuery: '$.open_issues_count',
      badgeLabel: 'issues',
      fallbackBadgeUrl: `https://img.shields.io/github/issues/${GITHUB_REPO}.json`,
      valueFormat: 'compact-number',
      fallback: '16 open',
      href: 'https://github.com/starVLA/starVLA/issues',
    },
  ],
  features: [
    {
      enTitle: 'Lego-like Modular Frameworks',
      zhTitle: 'Lego 式模块化框架',
      enBody:
        'StarVLA-FAST, StarVLA-OFT, StarVLA-PI, and StarVLA-GR00T share the same trainer, dataloader, and deployment stack for plug-and-play experimentation.',
      zhBody:
        'StarVLA-FAST、StarVLA-OFT、StarVLA-PI、StarVLA-GR00T 共用训练、数据和部署管线，实现即插即用实验迭代。',
      icon: 'puzzle',
    },
    {
      enTitle: 'Reproducible Benchmarks',
      zhTitle: '可复现实验基准',
      enBody:
        'Run SimplerEnv, LIBERO, RoboCasa, RoboTwin, and BEHAVIOR with benchmark-specific scripts and clear environment boundaries.',
      zhBody:
        '通过基准专用脚本和清晰环境边界，复现 SimplerEnv、LIBERO、RoboCasa、RoboTwin、BEHAVIOR。',
      icon: 'chart',
    },
    {
      enTitle: 'Agile Delivery Loop',
      zhTitle: '敏捷交付闭环',
      enBody:
        'Use a unified WebSocket policy interface to bridge simulation and real-robot control without rewriting model serving logic.',
      zhBody: '使用统一 WebSocket 策略接口连接仿真与真机，无需重写模型服务逻辑。',
      icon: 'server',
    },
  ],
  quickStart: {
    title: { en: 'Quick Start', zh: '快速开始' },
    intro: {
      en: 'Choose a goal and copy the command templates. Evaluation workflows are split into two terminals to avoid dependency conflicts.',
      zh: '选择目标后复制命令模板。评测流程默认分为两个终端，以避免依赖冲突。',
    },
    goals: [
      { key: 'install', en: 'Install', zh: '安装' },
      { key: 'smoke', en: 'Smoke Test', zh: '冒烟测试' },
      { key: 'evaluate', en: 'Evaluate', zh: '评测' },
    ],
    benchmarks: [
      { key: 'libero', en: 'LIBERO', zh: 'LIBERO' },
      { key: 'simplerenv', en: 'SimplerEnv', zh: 'SimplerEnv' },
      { key: 'robocasa', en: 'RoboCasa', zh: 'RoboCasa' },
      { key: 'robotwin', en: 'RoboTwin', zh: 'RoboTwin' },
      { key: 'behavior', en: 'BEHAVIOR-1K', zh: 'BEHAVIOR-1K' },
    ],
    presets: {
      install: {
        title: { en: 'Environment Setup', zh: '环境安装' },
        terminalA: [
          'git clone https://github.com/starVLA/starVLA',
          'cd starVLA',
          'conda create -n starVLA python=3.10 -y',
          'conda activate starVLA',
          'pip install -r requirements.txt',
          'pip install flash-attn --no-build-isolation',
          'pip install -e .',
        ].join('\n'),
      },
      smoke: {
        title: { en: 'Framework Smoke Test', zh: '框架冒烟测试' },
        terminalA: [
          'conda activate starVLA',
          'python starVLA/model/framework/QwenGR00T.py',
        ].join('\n'),
      },
      evaluate: {
        title: { en: 'Benchmark Evaluation', zh: '基准评测' },
        mapping: {
          libero: {
            terminalA: 'bash examples/LIBERO/eval_files/run_policy_server.sh',
            terminalB: 'bash examples/LIBERO/eval_files/eval_libero.sh',
          },
          simplerenv: {
            terminalA: 'bash examples/SimplerEnv/eval_files/run_policy_server.sh',
            terminalB:
              'export MODEL_PATH=/path/to/checkpoints/steps_50000_pytorch_model.pt\\n' +
              'bash examples/SimplerEnv/start_simpler_env.sh ${MODEL_PATH}',
          },
          robocasa: {
            terminalA:
              'python deployment/model_server/server_policy.py --ckpt_path ${your_ckpt} --port 5678 --use_bf16',
            terminalB:
              'python examples/Robocasa_tabletop/eval_files/simulation_env.py --args.port 5678 --args.n_episodes 50 --args.pretrained_path ${your_ckpt}',
          },
          robotwin: {
            terminalA: 'bash examples/Robotwin/eval_files/run_policy_server.sh',
            terminalB: 'cd examples/Robotwin/eval_files && bash eval.sh task_name demo_clean my_test_v1 0 0',
          },
          behavior: {
            terminalA: 'bash examples/Behavior/start_server.sh',
            terminalB: 'bash examples/Behavior/start_client.sh',
          },
        },
      },
    },
  },
  benchmarkVideos: [
    {
      key: 'simplerenv',
      enTitle: 'SimplerEnv',
      zhTitle: 'SimplerEnv',
      metricEn: 'WidowX Success (StarVLA-GR00T-Bridge)',
      metricZh: 'WidowX 成功率（StarVLA-GR00T-Bridge）',
      value: '71.4%',
      videos: [
        '/assets/simplerenv-1.mp4',
        '/assets/simplerenv-2.mp4',
        '/assets/simplerenv-3.mp4',
      ],
      source: `${DOCS_BASE}/benchmarks/simplerenv/`,
    },
    {
      key: 'robocasa',
      enTitle: 'RoboCasa',
      zhTitle: 'RoboCasa',
      metricEn: 'Average Success (StarVLA-OFT)',
      metricZh: '平均成功率（StarVLA-OFT）',
      value: '48.8%',
      videos: [
        '/assets/robocasa-1.mp4',
        '/assets/robocasa-2.mp4',
        '/assets/robocasa-3.mp4',
      ],
      source: `${DOCS_BASE}/benchmarks/robocasa/`,
    },
    {
      key: 'robotwin',
      enTitle: 'RoboTwin 2.0',
      zhTitle: 'RoboTwin 2.0',
      metricEn: 'Average Hard Score (StarVLA-OFT)',
      metricZh: 'Hard 平均分（StarVLA-OFT）',
      value: '88.32',
      videos: [
        '/assets/robotwin-1.mp4',
        '/assets/robotwin-2.mp4',
        '/assets/robotwin-3.mp4',
      ],
      source: `${DOCS_BASE}/benchmarks/robotwin/`,
    },
  ],
  benchmarkInfo: {
    libero: {
      enTitle: 'LIBERO',
      zhTitle: 'LIBERO',
      metricEn: 'Average Score (StarVLA-OFT)',
      metricZh: '平均分（StarVLA-OFT）',
      value: '96.6',
      source: `${DOCS_BASE}/benchmarks/libero/`,
    },
    behavior: {
      enTitle: 'BEHAVIOR-1K',
      zhTitle: 'BEHAVIOR-1K',
      metricEn: 'Documentation Status',
      metricZh: '文档状态',
      valueEn: 'Under Construction',
      valueZh: '文档建设中',
      source: `${DOCS_BASE}/benchmarks/behavior/`,
    },
  },
  benchmarkComparison: {
    title: {
      en: 'starVLA Performance vs π₀.₅',
      zh: 'starVLA 性能 vs π₀.₅',
    },
    note: {
      en: 'Percent values reported in the benchmark summary chart.',
      zh: '以下为基准对比图中给出的百分比结果。',
    },
    generalistNote: {
      en: 'The Generalist model is jointly trained across all benchmarks and is included as a reference for the upper-bound potential of our framework. For direct comparisons under similar computational budgets, we focus primarily on Specialist results.',
      zh: 'Generalist 模型基于全部基准进行联合训练，仅作为展示本框架性能上限潜力的参考。在同等计算预算下的公平对比中，我们主要关注 Specialist 的结果。',
    },
    specialistLabel: { en: 'starVLA Specialist', zh: 'starVLA 专家模型' },
    generalistLabel: { en: 'starVLA Generalist', zh: 'starVLA 通用模型' },
    previousLabel: { en: 'π₀.₅', zh: 'π₀.₅' },
    rows: [
      { benchmark: 'LIBERO', specialist: '98.8%', generalist: '97.8%', previous: '96.9%' },
      { benchmark: 'LIBERO-Plus', specialist: '77.8%', generalist: '79.7%', previous: '–' },
      { benchmark: 'SimplerEnv WidowX', specialist: '64.6%', generalist: '70.2%', previous: '46.9%' },
      { benchmark: 'SimplerEnv Google VA', specialist: '70.2%', generalist: '73.8%', previous: '68.4%' },
      { benchmark: 'SimplerEnv Google VM', specialist: '76.0%', generalist: '79.3%', previous: '72.7%' },
      { benchmark: 'RoboTwin Clean*', specialist: '88.2%', generalist: '88.7%', previous: '82.7%' },
      { benchmark: 'RoboTwin Random*', specialist: '88.3%', generalist: '87.8%', previous: '76.8%' },
      { benchmark: 'RoboCasa-GR1', specialist: '53.8%', generalist: '57.3%', previous: '37.0%' },
      { benchmark: 'RoboChallenge', specialist: '30.0%', generalist: '–', previous: '17.7%' },
    ],
  },
  modelZoo: [
    {
      name: 'Qwen2.5-VL-3B-Action',
      enDesc: 'Extended vocabulary with fast tokens for discrete action modeling.',
      zhDesc: '扩展 fast token 词表，用于离散动作建模。',
      link: 'https://huggingface.co/StarVLA/Qwen2.5-VL-3B-Instruct-Action',
    },
    {
      name: 'Qwen3-VL-4B-Action',
      enDesc: 'Qwen3-VL action-ready backbone for agile downstream experimentation.',
      zhDesc: '面向下游敏捷实验迭代的 Qwen3-VL 动作化骨干。',
      link: 'https://huggingface.co/StarVLA/Qwen3-VL-4B-Instruct-Action',
    },
    {
      name: 'Qwen3VL-GR00T-Bridge-RT-1',
      enDesc: 'Bridge + Fractal checkpoint for SimplerEnv-style evaluation.',
      zhDesc: '用于 SimplerEnv 评测的 Bridge + Fractal 检查点。',
      link: 'https://huggingface.co/StarVLA/Qwen3VL-GR00T-Bridge-RT-1',
    },
  ],
  community: {
    docs: DOCS_BASE,
    github: 'https://github.com/starVLA/starVLA',
    huggingFace: 'https://huggingface.co/StarVLA',
    wechatIssue: 'https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845',
    overleaf: 'https://www.overleaf.com/read/qqtwrnprctkf#d5bdce',
    techReport: 'https://arxiv.org/abs/2604.05014',
  },
  ecosystem: [
    {
      name: 'NeuroVLA',
      link: 'https://github.com/guoweiyu/NeuroVLA',
      enDesc: 'Brain-like embodied intelligence for fluid robotic control.',
      zhDesc: '面向灵巧机器人控制的脑启发式具身智能。',
    },
    {
      name: 'PhysBrain',
      link: 'https://zgc-embodyai.github.io/PhysBrain/',
      enDesc: 'Egocentric data bridge from multimodal perception to physical intelligence.',
      zhDesc: '用第一视角数据连接多模态感知与物理智能。',
    },
    {
      name: 'TwinBrainVLA',
      link: 'https://github.com/ZGC-EmbodyAI/TwinBrainVLA',
      enDesc: 'Asymmetric Mixture-of-Transformers for embodied tasks.',
      zhDesc: '用于具身任务的非对称混合 Transformer 方案。',
    },
  ],
} as const;
