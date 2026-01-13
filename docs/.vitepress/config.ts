import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Anx Reader Docs",
    description: "A documentation site for Anx Reader",
    base: '/docs/',
    cleanUrls: true,

    locales: {
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/zh/' },
                ],
                sidebar: [
                    {
                        text: '介绍',
                        items: [
                            { text: '简介', link: '/zh' }
                        ]
                    },
                    {
                        text: 'TTS',
                        items: [
                            { text: 'Azure', link: '/zh/tts/azure' }
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
                ],
                sidebar: [
                    {
                        text: 'Introduction',
                        items: [
                            { text: 'Getting Started', link: '/en/' }
                        ]
                    },
                    {
                        text: 'TTS',
                        items: [
                            { text: 'Azure', link: '/en/tts/azure' }
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
