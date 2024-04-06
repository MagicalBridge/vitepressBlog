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
      //     { text: '日常写作', link: '/leetcode/leetcode/index.md' },
      //     { text: '牛客算法题解', link: '/leetcode/niuke/index.md' },
      //   ]
      // }
      { 
        text: '日常写作', 
        link: '/writing/index',
      },
      { 
        text: 'web3', 
        link: '/web3/index',
      },
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      "/": [
        { 
          text: 'LeetCode算法题解', 
          link: '/algorithm/index#leetcode题解汇总',
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
            },
            {
              text: '7.整数反转', 
              link: '/algorithm/leetcode/7.整数反转',
            },
            {
              text: '11.盛水最多的容器', 
              link: '/algorithm/leetcode/11.盛水最多的容器',
            },
            {
              text: '19.删除链表的倒数第N个节点', 
              link: '/algorithm/leetcode/19.删除链表的倒数第N个节点',
            },
            {
              text: '20.有效括号', 
              link: '/algorithm/leetcode/20.有效括号',
            },
            {
              text: '21.合并两个有序链表', 
              link: '/algorithm/leetcode/21.合并两个有序链表',
            },
            {
              text: '26.删除有序数组中的重复项', 
              link: '/algorithm/leetcode/26.删除有序数组中的重复项',
            },
            {
              text: '46.全排列', 
              link: '/algorithm/leetcode/46.全排列',
            },
            {
              text: '53.最大子数组和', 
              link: '/algorithm/leetcode/53.最大子数组和',
            },
            {
              text: '56.合并区间', 
              link: '/algorithm/leetcode/56.合并区间',
            },
            {
              text: '70.爬楼梯', 
              link: '/algorithm/leetcode/70.爬楼梯',
            },
            {
              text: '101.对称二叉树', 
              link: '/algorithm/leetcode/101.对称二叉树',
            }
          ]
        },
        { 
          text: '牛客网算法题解', 
          link: '/algorithm/index#牛客网算法题解汇总',
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
      ],
      "/react/":[
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
      ],
      "/vue3/":[
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
      ],
      "/vue2/":[
        {
          text: 'Vue2源码解析',
          collapsed: false,
          link:"",
          items: [
            { 
              text: '', 
              link: '',
              collapsed: false
            },
          ]
        }
      ],
      "/node/":[
        {
          text: 'Node.js学习',
          collapsed: false,
          link:"",
        }
      ],
      "/front-end-engineering/": [
        {
          text: 'Babel', 
          link: '/front-end-engineering/babel/index',
          collapsed: false,
          items:[
            {
              text: 'test', 
              link: '',
            }
          ]
        },
        {
          text:"Webpack",
          link:"",
          collapsed: false,
          items:[
            {
              text: "webpack配置的底层逻辑",
              link: "/front-end-engineering/webpack/webpack-config",
            }
          ]
        }
      ],
      "/writing/": [
        {
          text: '测试连接', 
          link: '/writing/test',
          collapsed: false,
        },
      ],

      "/web3/": [
        {
          text: 'Solidity入门', 
          link: '',
          collapsed: false,
          items: [
            {
              text: '第一章：课程概述', 
              link: '/web3/solidity/课程概述.md',
              collapsed: false,
            },
            {
              text: '第二章：合约', 
              link: '/web3/solidity/合约.md',
              collapsed: false,
            },
            {
              text: '第三章：状态变量和整数', 
              link: '/web3/solidity/状态变量和整数.md',
              collapsed: false,
            },
            {
              text: '第四章：数学运算', 
              link: '/web3/solidity/数学运算.md',
              collapsed: false,
            },
          ]
        },
        {
          text: 'Solidity进阶', 
          link: '',
          collapsed: false,
          items: [
            
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
  },
  markdown: {
    lineNumbers: true
  }
})
