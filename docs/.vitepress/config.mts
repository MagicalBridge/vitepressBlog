import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "褚鹏飞的博客",
  description: "用注意力填满 1000 小时就能练成任何你需要的技能……",
  base: '/vitepressBlog/',
  head: [
    ["link", { rel: "icon", href: "/images/clock.svg" }],
  ],
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
              link: '',
              collapsed: false,
              items:[
                {
                  text: '1.两数之和', 
                  link: '/algorithm/leetcode/1.两数之和.md',
                },
                {
                  text: '2.两数相加', 
                  link: '/algorithm/leetcode/2.两数相加.md',
                },
                {
                  text: '3.无重复字符的最长子串', 
                  link: '/algorithm/leetcode/3.无重复字符的最长子串.md',
                },
                {
                  text: '4.寻找两个正序数组的中位数', 
                  link: '/algorithm/leetcode/4.寻找两个正序数组的中位数.md',
                },
                {
                  text: '5.最长回文子串', 
                  link: '/algorithm/leetcode/5.最长回文子串.md',
                }
              ]
            },
            { 
              text: '牛客网算法题解', 
              link: '',
              collapsed: false,
              // items:[
              //   {
              //     text: '1.两数之和', 
              //     link: '/algorithm/leetcode/1.两数之和.md',
              //   },
              //   {
              //     text: '3.无重复字符的最长子串', 
              //     link: '/algorithm/leetcode/3.无重复字符的最长子串.md',
              //   },
              //   {
              //     text: '5.最长回文子串', 
              //     link: '/algorithm/leetcode/5.最长回文子串.md',
              //   }
              // ]
            }
          ]
        }
      ],
      "/react/":[
        {
          text: 'React框架学习',
          collapsed: false,
          items: [
            { 
              text: 'React进阶', 
              link: '',
              collapsed: false,
              items:[
                {
                  text: '认识jsx', 
                  link: '/react/react-advance/认识jsx',
                }
              ]
            },
            { 
              text: 'React Hooks', 
              link: '',
              collapsed: false,
              items:[
                {
                  text: 'React组件的通信强化方式', 
                  link: '/react/react-hooks/React组件的通信强化方式.md',
                }
              ]
            },
          ]
        }
      ],
      "/vue3/":[
        {
          text: 'Vue3框架学习',
          collapsed: false,
          items: [
            { 
              text: 'Vue3框架介绍', 
              link: '',
              collapsed: false,
              items:[
                {
                  text: 'Vue3整体架构', 
                  link: '/vue3/01.introduce',
                },
                {
                  text: 'Vue3开发环境搭建', 
                  link: '/vue3/02.start',
                }
              ]
            },
            { 
              text: 'Vue3响应式原理', 
              link: '',
              collapsed: false,
              items:[
                {
                  text: 'test1', 
                  link: '/vue3/01.introduce',
                },
                {
                  text: 'test2', 
                  link: '/vue3/02.start',
                }
              ]
            },
          ]
        }
      ],
      "/vue2/":[
        {
          text: 'Vue2框架学习',
          collapsed: false,
          // items: [
          //   { 
          //     text: 'React进阶', 
          //     link: '/react/index',
          //     collapsed: false,
          //     items:[
          //       {
          //         text: '认识jsx', 
          //         link: '/react/react-advance/认识jsx.md',
          //       }
          //     ]
          //   },
          // ]
        }
      ],
      "/node/":[
        {
          text: 'Node.js学习',
          collapsed: false,
        }
      ],
      "/front-end-engineering/": [
        {
          text: '前端工程化',
          collapsed: false,
          items: [
            { 
              text: 'Babel', 
              link: '/front-end-engineering/babel/index',
              collapsed: false,
              // items:[
              //   {
              //     text: '认识jsx', 
              //     link: '/react/react-advance/认识jsx.md',
              //   }
              // ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { 
        icon: 'github', 
        link: '' 
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
