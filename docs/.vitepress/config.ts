import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Anx Reader Docs",
    description: "A documentation site for Anx Reader",
    base: '/docs/',
    head: [
        ['script', {}, `
            (function() {
                const callback = function() {
                    const navBarTitle = document.querySelector('.VPNavBarTitle');
                    const logo = navBarTitle?.tagName === 'A' ? navBarTitle : navBarTitle?.querySelector('a');
                    if (logo && logo.getAttribute('href') !== '/') {
                        logo.setAttribute('href', '/');
                        logo.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = '/';
                        }, { capture: true });
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(document.documentElement, { childList: true, subtree: true });
                window.addEventListener('load', callback);
            })();
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
