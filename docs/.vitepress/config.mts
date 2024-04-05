import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "褚鹏飞的博客",
  description: "用注意力填满 1000 小时就能练成任何你需要的技能……",
  base: '/vitepressBlog/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { 
      //   text: '算法题解',
      //   items: [
      //     { text: 'LeetCode算法题解', link: '/leetcode/leetcode/index.md' },
      //     { text: '牛客算法题解', link: '/leetcode/niuke/index.md' },
      //   ]
      // }
    ],
    search: {
      provider: 'local'
    },

    sidebar: {
      "/": [
        {
          text: '算法学习',
          collapsed: false,
          items: [
            { 
              text: 'LeetCode算法题解', 
              link: '/algorithm/index',
              collapsed: false,
              items:[
                {
                  text: '1.两数之和', 
                  link: '/algorithm/leetcode/1.两数之和.md',
                },
                {
                  text: '3.无重复字符的最长子串', 
                  link: '/algorithm/leetcode/3.无重复字符的最长子串.md',
                },
                {
                  text: '5.最长回文子串', 
                  link: '/algorithm/leetcode/5.最长回文子串.md',
                }
              ]
            },
            { text: '牛客网算法题解', link: '/' }
          ]
        }
      ],
    },

    socialLinks: [
      { 
        icon: 'github', 
        link: '' 
      }
    ]
  }
})
