module.exports = {
    title: "Cakebot",
    tagline: "An amazing new Discord bot!",
    url: "https://cakebot.club",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "cakebotpro",
    projectName: "cakebotpro.github.io",
    themeConfig: {
        announcementBar: {
            id: "cakebotv2blog",
            content:
                'CAKEBOT v2 IS NOW OUT! <a target="_blank" rel="noopener noreferrer" href="/blog/2021/01/06/cakebot-2">Read the blog post.</a>',
        },
        navbar: {
            title: "Cakebot",
            logo: {
                alt: "Cakebot Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    to: "docs/home",
                    activeBasePath: "docs",
                    label: "Documentation",
                    position: "left",
                },
                {
                    to: "blog",
                    label: "Blog",
                    position: "left",
                },
                {
                    href: "https://github.com/cakebotpro/cakebot",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Documentation",
                    items: [
                        {
                            label: "Home",
                            to: "docs/home/",
                        },
                        {
                            label: "Command List",
                            to: "docs/commands/",
                        },
                        {
                            label: "Invite the Bot",
                            to: "docs/invite/",
                        },
                    ],
                },
                {
                    title: "Social",
                    items: [
                        {
                            label: "Blog",
                            to: "blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/cakebotpro/cakebot",
                        },
                        {
                            label: "Our Sponsor",
                            to: "sponsor",
                        },
                    ],
                },
            ],
            copyright: "Copyright © 2019-present Cakebot",
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                sidebarPath: require.resolve("./sidebars.js"),
                editUrl:
                    "https://github.com/cakebotpro/cakebotpro.github.io/edit/docusaurus/",
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            "@docusaurus/plugin-content-blog",
            {
                feedOptions: {
                    type: "all",
                    copyright: "Copyright (c) 2019-present Cakebot.",
                    language: "en-US",
                },
            },
        ],
        [
            "@docusaurus/plugin-sitemap",
            {
                changefreq: "weekly",
            },
        ],
        "@docusaurus/plugin-content-pages",
    ],
    themes: [
        [
            "@docusaurus/theme-classic",
            {
                customCss: require.resolve("./src/css/custom.css"),
            }
        ]
    ]
}
