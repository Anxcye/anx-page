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
                    },
                    {
                        text: 'AI',
                        items: [
                            { text: '配置指南', link: '/zh/ai/' },
                            { text: 'OpenAI', link: '/zh/ai/openai' },
                            { text: 'Gemini', link: '/zh/ai/gemini' },
                            { text: 'Claude', link: '/zh/ai/claude' },
                            { text: 'DeepSeek', link: '/zh/ai/deepseek' },
                            { text: 'OpenRouter', link: '/zh/ai/openrouter' },
                            { text: 'LongCat', link: '/zh/ai/longcat' }
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
                    },
                    {
                        text: 'AI',
                        items: [
                            { text: 'Configuration', link: '/en/ai/' },
                            { text: 'OpenAI', link: '/en/ai/openai' },
                            { text: 'Gemini', link: '/en/ai/gemini' },
                            { text: 'Claude', link: '/en/ai/claude' },
                            { text: 'DeepSeek', link: '/en/ai/deepseek' },
                            { text: 'OpenRouter', link: '/en/ai/openrouter' },
                            { text: 'LongCat', link: '/en/ai/longcat' }
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
