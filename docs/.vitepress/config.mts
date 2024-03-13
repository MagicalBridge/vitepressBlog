import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "褚鹏飞的博客",
  description: "A VitePress Site",
  base: '/vitepressBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: '算法题解',
        items: [
          { text: 'LeetCode算法题解', link: '/leetcode/leetcode/index.md' },
          { text: '牛客算法题解', link: '/leetcode/niuke/index.md' },
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
