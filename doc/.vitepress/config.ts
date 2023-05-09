import { defineConfig } from 'vitepress';
import algolia from './config/algolia';
import local from './config/search/local';
import socialLinks from './config/links';
import { sidebars } from './config/sidebar';

export default defineConfig({
    outDir: './dist',
    title: 'KviewUI',
    description: '基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升',
    lang: 'zh-CN',
    lastUpdated: true,
    appearance: true,
    markdown: {
        lineNumbers: false,
        theme: 'material-theme-palenight'
    },
    themeConfig: {
        logo: '/kviewuix3.png',
        outline: {
            label: '本页目录'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: '本文档内容版权为 KviewUI 官方团队所有，保留所有权利。'
        },
        nav: [
            { text: '指南', link: '/guide/intro' },
            { text: '组件', link: '/component/button' },
            { text: '工具', link: '' },
            { text: '模版', link: '' },
            { 
                text: '1.0.0-alpha.01',
                items: [
                    { text: '更新日志', link: 'https://gitcode.net/kviewui/kviewui/-/blob/main/CHANGELOG.md' },
                    { text: '贡献者', link: 'https://gitcode.net/kviewui/kviewui/-/blob/main/CONTRIBUTING.md' }
                ]
             },
            { 
                text: '相关链接',
                items: [
                    { text: 'uni-app', link: 'https://uniapp.dcloud.net.cn' },
                    { text: 'Vue3', link: 'https://v3.vuejs.kviewui.com' },
                    { text: 'TypeScript', link: 'https://tslang.cn' }
                ]
            }
        ],
        editLink: {
            pattern: 'https://gitcode.net/kviewui/kviewui/edit/master/docs/:path',
            text: '为此页提供修改建议'
        },
        socialLinks,
        sidebar: sidebars,
        search: {
            provider: 'local',
            options: {
                ...local
            }
        }
    }
});