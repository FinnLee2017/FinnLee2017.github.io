const { path } = require('@vuepress/utils')
// const Vue = require('@vitejs/plugin-vue')
module.exports = {
  title: '李小凡编程自学网',
  description: '学前端的最佳实践.',
  bundler:'@vuepress/bundler-vite',
  theme: path.resolve(__dirname, './theme'),
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  head: [

    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/logo.ico`,
      },
    ],
    // ['style', {},``]
  ],
  markdown:{
    linkify:true
  },
  plugins:[
  ],
  themeConfig:{
    logo:"/logo.png",
    contributors:false,
    contributorsText: '贡献者',
    lastUpdatedText:'上次更新',
    notFound:['这就戳碰到我知识的盲点了'],
    editLinkText:"编辑页面",
    docsRepo:"https://github.com/FinnLee2017/FinnLee2017.github.io",
    docsBranch:"main",
    docsDir:"docs",
    navbar:[
      {
        text:'Github',
        link:"https://github.com/FinnLee2017/FinnLee2017.github.io"
      },
    ],
    sidebar:[
      '/fe/README.md',
      {
        text:'HTML5',
        children:[
            '/fe/css.md',
            '/fe/Javascript.md',
            '/fe/project.md',
            '/fe/interview.md',
            '/fe/server.md',
        ]
      },{
        text:'CSS3',
        children:[
          '/fe/vue.md',
          '/fe/react.md',
          // '/fe/framework.md',
          '/fe/typescript.md',
          '/fe/node.md',
          '/fe/fis.md',
          '/fe/arch.md',
          '/fe/perf.md',
          '/fe/browser.md',
        ]
      },{
        text:'JavaScript',
        children:[
          '/it/soft.md',
          '/it/internet.md',
          '/it/algorithm.md',
        ]
      }
    ]
  }
}
