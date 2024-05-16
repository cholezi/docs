// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope"
import navbar from "./navbar.js"
import sidebar from "./sidebar.js"

export default hopeTheme({
  hostname: "http://docs.yuwenjian.com", // http://121.41.85.87:5001
  
  author: {
    name: "俞文健",
    url: "https://github.com/choIez/docs"
  },
  
  navbar,
  
  sidebar,
  
  // 全屏
  fullscreen: false,
  
  // 深色模式
  darkmode: "disable",
  
  iconAssets: "iconfont",
  
  logo: "/icon/icon.svg",
  
  favicon: "favicon.ico",
  
  // 仓库配置，用于在导航栏中显示仓库链接
  repo: "choIez/docs",
  
  docsDir: "src",
  
  // footer 和 copyright 样式不一样，这里直接使用 copyright 显示备案信息
  copyright: `<a href="https://beian.miit.gov.cn" target="_blank">赣ICP备2024033222号-1</a>`,
  
  // footer: `<a href="https://beian.miit.gov.cn" target="_blank">赣ICP备2024033222号-1</a>`,
  
  displayFooter: true,
  
  metaLocales: {
    date: "更新时间",
    editLink: "在 GitHub 上编辑此页"
  },
  
  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69"
    },
    
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      // 启用 GFM 警告 [!important] [!tip]
      alert: true,
      
      align: true,
      attrs: true,
      
      // install chart.js before enabling it
      // chart: true,
      
      codetabs: true,
      
      // insert component easily
      // component: true,
      
      demo: true,
      
      // install echarts before enabling it
      // echarts: true,
      
      figure: true,
      
      // install flowchart.ts before enabling it
      // flowchart: true,
      
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      
      imgLazyload: true,
      imgSize: true,
      include: true,
      
      // install katex before enabling it
      // katex: true,
      
      // install mathjax-full before enabling it
      // mathjax: true,
      
      mark: true,
      
      // install mermaid before enabling it
      // mermaid: true,
      
      playground: {
        presets: ["ts", "vue"]
      },
      
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }: any) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      
      // install @vue/repl before enabling it
      // vuePlayground: true,
      
      // 使用 KaTeX 启用 TeX 支持
      katex: true
    }
    
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black"
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff"
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //       }
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // }
  }
})
