import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/pcj.github.io/',
  title: "划水专业",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '后端',
        collapsed:true,
        items: [
          { text: 'Maven', link: '../Java/Maven.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '前端',
        collapsed:true,//导航栏折叠
        items: [
          { text: 'Vue', link: '../Vue/vue3.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '例子',
        collapsed:true,//导航栏折叠
        items: [
          { text: 'markdown-examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
