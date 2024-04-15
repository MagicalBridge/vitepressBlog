import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "定投改变命运",
  description: "用注意力填满 1000 小时就能练成任何你需要的技能……",
  base: "/vitepressBlog/",
  head: [["link", { rel: "icon", href: "/images/clock.svg" }]],
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
        text: "日常写作",
        link: "/writing/index",
      },
      {
        text: "web3",
        link: "/web3/index",
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/": [
        {
          text: "数据结构",
          link: "",
          collapsed: false,
          items:[
            {
              text: "数组",
              link:"/algorithm/data-structure/数组.md"
            },
            {
              text: "栈",
              link:"/algorithm/data-structure/栈.md"
            },
            {
              text: "队列",
              link:"/algorithm/data-structure/队列.md"
            },
            {
              text: "链表",
              link:"/algorithm/data-structure/链表.md"
            }
          ]
        },
        {
          text: "LeetCode算法题解",
          link: "/algorithm/index#leetcode题解汇总",
          collapsed: false,
          items: [
            {
              text: "1.两数之和",
              link: "/algorithm/leetcode/1.两数之和.md",
            },
            {
              text: "2.两数相加",
              link: "/algorithm/leetcode/2.两数相加.md",
            },
            {
              text: "3.无重复字符的最长子串",
              link: "/algorithm/leetcode/3.无重复字符的最长子串.md",
            },
            {
              text: "4.寻找两个正序数组的中位数",
              link: "/algorithm/leetcode/4.寻找两个正序数组的中位数.md",
            },
            {
              text: "5.最长回文子串",
              link: "/algorithm/leetcode/5.最长回文子串.md",
            },
            {
              text: "7.整数反转",
              link: "/algorithm/leetcode/7.整数反转",
            },
            {
              text: "11.盛水最多的容器",
              link: "/algorithm/leetcode/11.盛水最多的容器",
            },
            {
              text: "14.最长公共前缀",
              link: "/algorithm/leetcode/14.最长公共前缀",
            },
            {
              text: "19.删除链表的倒数第N个节点",
              link: "/algorithm/leetcode/19.删除链表的倒数第N个节点",
            },
            {
              text: "20.有效括号",
              link: "/algorithm/leetcode/20.有效括号",
            },
            {
              text: "21.合并两个有序链表",
              link: "/algorithm/leetcode/21.合并两个有序链表",
            },
            {
              text: "26.删除有序数组中的重复项",
              link: "/algorithm/leetcode/26.删除有序数组中的重复项",
            },
            {
              text: "46.全排列",
              link: "/algorithm/leetcode/46.全排列",
            },
            {
              text: "53.最大子数组和",
              link: "/algorithm/leetcode/53.最大子数组和",
            },
            {
              text: "54.螺旋矩阵",
              link: "/algorithm/leetcode/54.螺旋矩阵",
            },
            {
              text: "56.合并区间",
              link: "/algorithm/leetcode/56.合并区间",
            },
            {
              text: "70.爬楼梯",
              link: "/algorithm/leetcode/70.爬楼梯",
            },
            {
              text: "101.对称二叉树",
              link: "/algorithm/leetcode/101.对称二叉树",
            },
            {
              text: "102.二叉树的层序遍历",
              link: "/algorithm/leetcode/102.二叉树的层序遍历",
            },
            {
              text: "104.二叉树的最大深度",
              link: "/algorithm/leetcode/104.二叉树的最大深度",
            },
            {
              text: "144.二叉树的前序遍历",
              link: "/algorithm/leetcode/144.二叉树的前序遍历",
            },
            {
              text: "199.二叉树的右视图",
              link: "/algorithm/leetcode/199.二叉树的右视图",
            },
          ],
        },
        {
          text: "牛客网算法题解",
          link: "/algorithm/index#牛客网算法题解汇总",
          collapsed: false,
          items:[
            {
              text: 'NC4.判断链表中是否有环',
              link: '/algorithm/niuke/NC4.判断链表中是否有环',
            },
            {
              text: 'NC13.二叉树的最大深度',
              link: '/algorithm/niuke/NC13.二叉树的最大深度',
            },
            {
              text: 'NC37.合并区间',
              link: '/algorithm/niuke/NC37.合并区间',
            },
            {
              text: 'NC41.最长无重复子数组',
              link: '/algorithm/niuke/NC41.最长无重复子数组',
            },
            {
              text: 'NC57.反转数字',
              link: '/algorithm/niuke/NC57.反转数字',
            },
            {
              text: 'NC65.斐波那契数列',
              link: '/algorithm/niuke/NC65.斐波那契数列',
            },
            {
              text: 'NC140.排序',
              link: '/algorithm/niuke/NC140.排序',
            },
            {
              text: 'NC141.判断是否为回文字符串',
              link: '/algorithm/niuke/NC141.判断是否为回文字符串',
            },
            {
              text: 'NC289.删除链表的节点',
              link: '/algorithm/niuke/NC289.删除链表的节点',
            }
          ]
        },
        {
          text: "剑指offer",
          link: "/algorithm/index",
          collapsed: false,
          items:[
          ]
        },
      ],
      "/react/": [
        {
          text: "React进阶",
          link: "",
          collapsed: false,
          items: [
            {
              text: "认识jsx",
              link: "/react/react-advance/认识jsx",
            },
          ],
        },
        {
          text: "React Hooks",
          link: "",
          collapsed: false,
          items: [
            {
              text: "React组件的通信强化方式",
              link: "/react/react-hooks/React组件的通信强化方式.md",
            },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue3框架介绍",
          link: "",
          collapsed: false,
          items: [
            {
              text: "Vue3整体架构",
              link: "/vue/vue3/01.introduce",
            },
            {
              text: "Vue3开发环境搭建",
              link: "/vue/vue3/02.start",
            },
          ],
        },
        {
          text: "Vue3响应式原理",
          link: "",
          collapsed: false,
          items: [
            {
              text: "Vue3响应式",
              link: "/vue/vue3/03.reactivity-1",
            },
            {
              text: "Reactive & Effect",
              link: "/vue/vue3/04.reactivity-2",
            },
            {
              text: "Computed & Watch",
              link: "/vue/vue3/05.reactivity-3",
            },
            {
              text: "Ref实现原理",
              link: "/vue/vue3/06.ref",
            },
          ],
        },
        {
          text: "Vue3渲染原理",
          link: "",
          collapsed: false,
          items: [
            {
              text: "Vue3自定义渲染器",
              link: "/vue/vue3/07.renderer",
            },
            {
              text: "Runtime DOM",
              link: "/vue/vue3/08.runtime-dom",
            },
            {
              text: "Runtime Core",
              link: "/vue/vue3/09.runtime-core",
            },
            
          ],
        },
        {
          text: "Vue3 Diff 算法",
          link: "",
          collapsed: false,
          items: [
            {
              text: "Diff流程",
              link: "/vue/vue3/10.diff",
            }
          ],
        },
        {
          text: "组件渲染原理",
          link: "",
          collapsed: false,
          items: [
            {
              text: "text、Fragment",
              link: "/vue/vue3/11.fragment",
            },
            {
              text: "组件渲染",
              link: "/vue/vue3/12.component",
            },
            {
              text: "setup函数",
              link: "/vue/vue3/13.compositionApi",
            }
          ],
        },
        {
          text: "模板编译原理",
          link: "",
          collapsed: false,
          items: [
            {
              text: "Diff流程",
              link: "/vue/vue3/03.reactivity-1",
            }
          ],
        },
      ],
      "/vue2/": [
        {
          text: "Vue2源码解析",
          collapsed: false,
          link: "",
          items: [
            {
              text: "",
              link: "",
              collapsed: false,
            },
          ],
        },
      ],
      "/node/": [
        {
          text: "Node.js",
          collapsed: false,
          link: "",
          items: [
            {
              text: "Node基础",
              link: "/node/node-base/index",
            },
            {
              text: "Buffer",
              link: "/node/node-base/buffer",
            },
          ],
        },
      ],
      "/front-end-engineering/": [
        {
          text: "Babel",
          link: "/front-end-engineering/babel/index",
          collapsed: false,
          items: [
            {
              text: "Babel简介",
              link: "/front-end-engineering/babel/01-into",
            },
          ],
        },
        {
          text: "Webpack",
          link: "",
          collapsed: false,
          items: [
            {
              text: "webpack配置的底层逻辑",
              link: "/front-end-engineering/webpack/webpack-config",
            },
          ],
        },
      ],
      "/writing/": [
        {
          text: "测试连接",
          link: "/writing/test",
          collapsed: false,
        },
      ],
      "/back-end/": [
        {
          text: "容器化",
          link: "",
          collapsed: false,
          items: [
            {
              text: 'Docker',
              link:"/back-end/docker/index",
            },
            {
              text: 'Dockerfile',
              link:"/back-end/docker/dockerfile",
            },
            {
              text: 'Docker Compose',
              link:"/back-end/docker/docker-compose",
            }
          ]
        },
        {
          text: "Linux",
          link: "",
          collapsed: false,
          items: [
            {
              text: 'linux',
              link:"/back-end/linux/index",
            }
          ]
        },
        {
          text: "数据库",
          link: "",
          collapsed: false,
          items: [
            {
              text: 'Redis',
              link:"/back-end/database/redis/index",
            },
            {
              text: 'MySQL',
              link:"/back-end/database/mysql/index",
            },
            {
              text: 'MongoDB',
              link:"/back-end/database/mongodb/index",
            },
          ]
        },
      ],
      "/web3/": [
        {
          text: "Solidity入门",
          link: "",
          collapsed: false,
          items: [
            {
              text: "第一章：课程概述",
              link: "/web3/solidity/课程概述.md",
              collapsed: false,
            },
            {
              text: "第二章：合约",
              link: "/web3/solidity/合约.md",
              collapsed: false,
            },
            {
              text: "第三章：状态变量和整数",
              link: "/web3/solidity/状态变量和整数.md",
              collapsed: false,
            },
            {
              text: "第四章：数学运算",
              link: "/web3/solidity/数学运算.md",
              collapsed: false,
            },
          ],
        },
        {
          text: "Solidity进阶",
          link: "",
          collapsed: false,
          items: [],
        },
      ],
      "/low-code/": [
        {
          text: "从0打造通用型低代码产品",
          link: "",
          collapsed: false,
          items: [
            {
              text: "序章：前端的价值",
              link: "/low-code/01-前端的价值",
              collapsed: false,
            },
            {
              text: "前言：什么是低代码",
              link: "/low-code/02-什么是低代码",
              collapsed: false,
            },
            {
              text: "第三章：状态变量和整数",
              link: "/web3/solidity/状态变量和整数.md",
              collapsed: false,
            },
            {
              text: "第四章：数学运算",
              link: "/web3/solidity/数学运算.md",
              collapsed: false,
            },
          ],
        }
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
})
