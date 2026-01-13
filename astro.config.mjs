// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'starVLA',
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
					items: [
						{ label: 'Project Overview', slug: 'overview', translations: { 'zh-CN': '项目概览' } },
					],
				},
				{
					label: 'Getting Started',
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
					items: [
						{
							label: 'Lego-like Design',
							slug: 'design/lego-like',
							translations: { 'zh-CN': '乐高式设计' },
						},
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Model Zoo', slug: 'model-zoo', translations: { 'zh-CN': '模型库' } },
						{ label: 'FAQ', slug: 'faq', translations: { 'zh-CN': '常见问题' } },
					],
				},
				{
					label: 'Community',
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
		}),
	],
});
