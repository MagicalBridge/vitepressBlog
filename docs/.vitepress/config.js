export default {
  title: '褚鹏飞的博客',
  description: '终于等到你',
  themeConfig: {
    // siteTitle: 'My Custom Title',
    // siteTitle: false
    nav: [
      {
        text: '算法和数据结构',
        items: [
          {
            text: 'leetCode算题解',
            link: '/algorithm/leetCode/',
          },
          {
            text: '牛客算题解',
            link: '/algorithm/niuke/',
          },
          {
            text: '剑指offer',
            link: '/algorithm/offer/',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: '算法和数据结构',
        items: [
          { text: 'leetCode算法题解', link: '/algorithm/leetCode/' },
          {
            text: '牛客算法题解',
            link: '/algorithm/niuke/',
          },
          {
            text: '剑指offer',
            link: '/algorithm/offer/',
          },
        ],
      },
      {
        text: '计算机网络',
        items: [
          { text: 'HTTP', link: '' },
          { text: 'HTTPS', link: '' },
        ],
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue2', link: '' },
          {
            text: 'Vue3',
            link: '',
          },
          {
            text: 'React',
            link: '',
          },
        ],
      },
      {
        text: '前端工程化',
        items: [
          { text: 'Webpack', link: '' },
          {
            text: 'Rollup',
            link: '',
          },
          {
            text: 'Vite',
            link: '',
          },
        ],
      },
      {
        text: 'NodeJs',
        items: [
          { text: 'Node基础', link: '/node' },
          { text: 'Express', link: '/item-d' },
          { text: 'Koa2', link: '/item-d' },
        ],
      },
      {
        text: '数据库',
        items: [
          { text: 'MySql', link: '/database/mysql/' },
          { text: 'MongoDB', link: '/database/mongodb/' },
          { text: 'Redis', link: '/database/redis/' },
        ],
      },
    ],
  },
};
