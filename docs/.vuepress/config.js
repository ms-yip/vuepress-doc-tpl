

const { nemuConstructor } = require('vuepress-menu')
const temp = nemuConstructor('withNav')
const sidebar = temp.sideBar
const nav = temp.nav
module.exports = {
  // 网站 Title
  title: '<%=name%>',
  // 网站描述
  description: '<%=description%>',
  base: '/<%=name%>/',
  // 网站 favicon 图标设置等
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  // 使用的主题
  // theme: 'melodydl',
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    title: 'fe-doc',
    search: true,
    searchMaxSuggestions: 5,
    // sidebar: 'auto',
    sidebar: sidebar,
    sidebarDepth: 5,
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true,
    // extraWatchFiles: ['/guide/*'], // 件变动将会触发 vuepress 重新构建
    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      name: 'fe-doc', // 名称
      avatar: '/', // 头像 public文件夹下
      headerBackgroundImg: '/avatar-bg.jpeg', // 头部背景图
      description: 'In me the tiger sniffs the rose<br/>心有猛虎，细嗅蔷薇', // 个人简介 (支持 HTML)
      email: '<%=email%>', // 电子邮箱
      location: '<%=location%>', // 所在地
    },
    // 顶部导航栏内容
    nav:nav,
    // 首页头部标题背景图设置，图片直接放在 public 文件夹下
    header: {
      home: {
        title: 'home',
        subtitle: '好好生活，慢慢相遇',
        headerImage: '/home-bg.jpeg',
      },
      // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
      tags: {
        title: 'Tags',
        subtitle: '遇见你花光了我所有的运气',
        headerImage: '/tags-bg.jpg',
      },
      // 文章详情头部背景图
      postHeaderImg: '/post-bg.jpeg',
    },
    smoothScroll: true, // 页面滚动

    // 社交平台帐号信息
    sns: {
      juejin: {
        account: 'juejin',
        link: 'https://juejin.im/',
      },
      zhihu: {
        account: 'zhihu',
        link: 'https://www.zhihu.com/',
      },
    },
    // 底部 footer 的相关设置
    footer: {
      // gitbutton  配置
      gitbtn: {
        // 仓库地址
        repository: '',
        frameborder: 0,
        scrolling: 0,
        width: '80px',
        height: '20px',
      },

      // 添加自定义 footer
      custom: `Copyright &copy;  vuepress 2022 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | name`,
    },
    markdown: {
      lineNumbers: true,
    },

    // 分页配置
    pagination: {
      // 每页文章数量
      perPage: 5,
    },

    // vssue 评论配置, 如果不需要，可以设置 comments: false
    comments: {
      owner: 'youdeliang',
      repo: 'vuepress-theme-melodydl',
      clientId: 'dfba8ecad544784fec1f',
      clientSecret: '1358ac11bc8face24f598601991083e27372988d',
      autoCreateIssue: false,
    },
  },
  plugins: [
    'vuepress-plugin-demo-container',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],
  markdown: {
    includeLevel: [1, 2, 3, 4, 5, 6, 7],
  },
  dest: './dest', // /dest/ 在mac 中会编译到跟路径 
  chainWebpack(config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  },
}
