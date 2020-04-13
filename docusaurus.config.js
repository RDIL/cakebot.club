module.exports = {
  title: "Cakebot",
  tagline: "An amazing new Discord bot!",
  url: "https://cakebot.club",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "cakebotpro",
  projectName: "cakebotpro.github.io",
  themeConfig: {
    navbar: {
      title: "Cakebot",
      logo: {
        alt: "Cakebot Logo",
        src: "img/logo.png"
      },
      links: [
        {
          to: "docs/home",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left"
        },
        {
          to: "blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://github.com/cakebotpro/cakebot",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Home",
              to: "docs/home/"
            },
            {
              label: "Command List",
              to: "docs/commands/"
            },
            {
              label: "Invite the Bot",
              to: "docs/invite/"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/cakebotpro/cakebot"
            }
          ]
        }
      ],
      copyright: "Copyright © 2019-present Cakebot"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/cakebotpro/cakebotpro.github.io/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          feedOptions: {
            type: "all",
            copyright: "Copyright (c) 2019-present Cakebot.",
            language: "en-US"
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        sitemap: {
          cacheTime: 600 * 1000,
          changefreq: "weekly",
          priority: 0.5
        }
      }
    ]
  ],
  plugins: ["@docusaurus/plugin-ideal-image"]
}
