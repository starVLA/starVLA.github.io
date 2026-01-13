// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'StarVLA',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/starVLA/starVLA' }],
			sidebar: [
				{
					label: 'Overview',
					translations: { 'zh-CN': '项目概览' },
					items: [
						{ label: 'Project Overview', slug: 'overview', translations: { 'zh-CN': '项目概览' } },
					],
				},
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '开始上手' },
					items: [
						{
							label: 'Quick Start',
							slug: 'getting-started/quick-start',
							translations: { 'zh-CN': '快速开始' },
						},
					],
				},
				{
					label: 'Core Concepts',
					translations: { 'zh-CN': '核心概念' },
					items: [
						{
							label: 'Lego-like Design',
							slug: 'design/lego-like',
							translations: { 'zh-CN': '乐高式设计' },
						},
					],
				},
				{
					label: 'Benchmarks',
					translations: { 'zh-CN': '基准测试' },
					items: [
						{
							label: 'LIBERO',
							slug: 'benchmarks/libero',
							translations: { 'zh-CN': 'LIBERO' },
						},
					],
				},
				{
					label: 'Resources',
					translations: { 'zh-CN': '资源' },
					items: [
						{ label: 'Model Zoo', slug: 'model-zoo', translations: { 'zh-CN': '模型库' } },
						{ label: 'FAQ', slug: 'faq', translations: { 'zh-CN': '常见问题' } },
					],
				},
				{
					label: 'Community',
					translations: { 'zh-CN': '社区' },
					items: [
						{ label: 'Contributing', slug: 'contributing', translations: { 'zh-CN': '贡献指南' } },
						{
							label: 'Acknowledgements',
							slug: 'acknowledgements',
							translations: { 'zh-CN': '致谢' },
						},
					],
				},
			],

			head: [
				{
					tag: 'script',
					attrs: {
						is: 'inline',
					},
					content: `
						window.MathJax = {
							tex: {
								inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
								displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
								processEscapes: true,
								processEnvironments: true
							},
							options: {
								skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
							}
						};
					`
				},
				{
					tag: 'script',
					attrs: {
						id: 'MathJax-script',
						async: true,
						src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
					}
				}
			]
		}),
	],
});
