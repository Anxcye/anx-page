import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Anx Reader Docs",
    description: "A documentation site for Anx Reader",
    base: '/docs/',
    head: [
        ['script', {}, `
            window.addEventListener('load', () => {
                const check = () => {
                    const logo = document.querySelector('.VPNavBarTitle .title') || document.querySelector('.VPConfig .title')
                    if (logo) {
                        logo.setAttribute('href', '/')
                    } else {
                        setTimeout(check, 100)
                    }
                }
                check()
            })
        `],
        ['style', {}, `
            .VPNavBarTitle .logo {
                border-radius: 8px !important;
            }
        `]
    ],

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' }
                ],
                sidebar: [
                    {
                        text: '指南',
                        items: [
                            { text: '开始使用', link: '/zh/guide/' }
                        ]
                    }
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/' }
                ],
                sidebar: [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Getting Started', link: '/en/guide/' }
                        ]
                    }
                ]
            }
        }
    },

    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'Anx Reader',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/anxcye/anx-reader' }
        ]
    }
})
