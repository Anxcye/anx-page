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
                    },
                    {
                        text: '翻译',
                        items: [
                            { text: 'Azure', link: '/zh/translate/azure' },
                            { text: 'Google', link: '/zh/translate/google' },
                            { text: 'DeepL', link: '/zh/translate/deepl' }
                        ]
                    },
                    {
                        text: '同步',
                        items: [
                            { text: 'WebDAV', link: '/zh/sync/webdav' }
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
                    },
                    {
                        text: 'Translate',
                        items: [
                            { text: 'Azure', link: '/en/translate/azure' },
                            { text: 'Google', link: '/en/translate/google' },
                            { text: 'DeepL', link: '/en/translate/deepl' }
                        ]
                    },
                    {
                        text: 'Sync',
                        items: [
                            { text: 'WebDAV', link: '/en/sync/webdav' }
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
