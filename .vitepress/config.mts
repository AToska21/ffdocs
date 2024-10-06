import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FakesomeFest",
  description: "Documentation for FakesomeFest",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started.html' }
    ],

    sidebar: [
      {
        text: 'FakesomeFest',
        items: [
          { text: 'Getting Started', link: '/getting-started.html' },
          { text: 'Installing', link: '/installing.html' },
          { text: 'Technical Overview', link: '/tech-overview.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@fakesomefire' },
      { icon: 'github', link: 'https://github.com/AToska21/ffdocs' },
      { icon: 'x', link: 'https://x.com/@FakesomeFire' },
      { icon: 'discord', link: 'https://discord.gg/mB5vJU6Zk7' }
    ]
  }
})
