import{_ as u,r as p,o as r,c as d,d as o,w as a,e as k,a as n,b as s}from"./app-F8sPig3c.js";const v={},m=k(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── .nuxt                  nuxt dev 创建的应用程序
├── .output                nuxt build 创建的生产文件
├── assets                 构建工具处理的资源
├── components             组件
├── composables            组合式函数
├── layouts                布局
├── middleware             中间件
├── pages                  页面
├── plugins                插件
├── public                 静态资源
├── server                 服务器
├── utils                  工具函数
├── .env                   环境变量
├── app.vue                主文件
├── app.config.ts          应用配置
├── nuxt.config.ts         脚手架配置
├── package.json           依赖管理
└── tsconfig.json          TS 配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><h3 id="nuxtlayout" tabindex="-1"><a class="header-anchor" href="#nuxtlayout" aria-hidden="true">#</a> NuxtLayout</h3><p>显示 <code>layouts</code> 中的布局。</p>`,5),b=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token comment"},"<!-- 默认显示 `layouts/default.vue` 布局 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NuxtLayout")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`

`),n("span",{class:"token comment"},"<!-- 自定义显示 `layouts/custom.vue` 布局 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NuxtLayout")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"页面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#页面","aria-hidden":"true"},"#"),s(" 页面")],-1),h=n("h3",{id:"nuxtpage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nuxtpage","aria-hidden":"true"},"#"),s(" NuxtPage")],-1),_=n("p",null,[s("显示 "),n("code",null,"pages"),s(" 中的页面。")],-1),y=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Header")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NuxtPage")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Footer")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h3",{id:"definepagemeta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#definepagemeta","aria-hidden":"true"},"#"),s(" definePageMeta")],-1),x=n("p",null,"定义页面的 meta 数据。",-1),w=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token function"},"definePageMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"isHideHeader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Header")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("!$route.meta.isHideHeader"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NuxtPage")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Footer")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#请求","aria-hidden":"true"},"#"),s(" 请求")],-1),U=n("h3",{id:"usefetch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usefetch","aria-hidden":"true"},"#"),s(" useFetch")],-1),V=n("p",null,"请求数据。",-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" UseFetchOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"nuxt/app"'),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 设置请求头"),s(`
  `),n("span",{class:"token comment"},"// options.headers = ..."),s(`
  
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" pending"),n("span",{class:"token punctuation"},","),s(" error"),n("span",{class:"token punctuation"},","),s(" refresh "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`
  
  `),n("span",{class:"token keyword"},"return"),s(" data"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"&&"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("code "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"200"),s(`
    `),n("span",{class:"token operator"},"?"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s(`data
    `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"||"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" UseFetchOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"nuxt/app"'),s(`
`),n("span",{class:"token keyword"},"import"),s(" request "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"utils/request"'),s(`

`),n("span",{class:"token keyword"},"const"),s(" baseURL "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VITE_BASE_URL"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" apiGet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
    baseURL
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" apiPost "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  body`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"POST"'),n("span",{class:"token punctuation"},","),s(`
    body`),n("span",{class:"token punctuation"},","),s(`
    baseURL
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"const"),s(" categories "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("Category"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
  categories`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" apiGet"),n("span",{class:"token operator"},"<"),s("Category"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h2",{id:"服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务","aria-hidden":"true"},"#"),s(" 服务")],-1),R=n("h3",{id:"defineeventhandler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#defineeventhandler","aria-hidden":"true"},"#"),s(" defineEventHandler")],-1),j=n("p",null,"注册 API 模拟数据。",-1),H=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineEventHandler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
    data`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner1.jpg"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner2.jpg"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner3.jpg"'),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ok"'),n("span",{class:"token punctuation"},","),s(`
    success`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" error "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/banners"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/api"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(O,B){const c=p("Vue"),l=p("Tabs"),i=p("Ts");return r(),d("div",null,[m,o(l,{id:"13",data:[{id:"<Vue /> app.vue"}],"tab-id":"NuxtLayout"},{title0:a(({value:e,isActive:t})=>[o(c),s(" app.vue")]),tab0:a(({value:e,isActive:t})=>[b]),_:1},8,["data"]),g,h,_,o(l,{id:"27",data:[{id:"<Vue /> layouts/default.vue"}],"tab-id":"NuxtPage"},{title0:a(({value:e,isActive:t})=>[o(c),s(" layouts/default.vue")]),tab0:a(({value:e,isActive:t})=>[y]),_:1},8,["data"]),f,x,o(l,{id:"38",data:[{id:"<Vue /> pages/login.vue"},{id:"<Vue /> layouts/default.vue"}],"tab-id":"definePageMeta"},{title0:a(({value:e,isActive:t})=>[o(c),s(" pages/login.vue")]),title1:a(({value:e,isActive:t})=>[o(c),s(" layouts/default.vue")]),tab0:a(({value:e,isActive:t})=>[w]),tab1:a(({value:e,isActive:t})=>[A]),_:1},8,["data"]),T,U,V,o(l,{id:"55",data:[{id:"<Ts /> utils/request.ts"},{id:"<Ts /> api/index.ts"},{id:"<Vue /> *.vue"}],"tab-id":"useFetch"},{title0:a(({value:e,isActive:t})=>[o(i),s(" utils/request.ts")]),title1:a(({value:e,isActive:t})=>[o(i),s(" api/index.ts")]),title2:a(({value:e,isActive:t})=>[o(c),s(" *.vue")]),tab0:a(({value:e,isActive:t})=>[q]),tab1:a(({value:e,isActive:t})=>[N]),tab2:a(({value:e,isActive:t})=>[P]),_:1},8,["data"]),F,R,j,o(l,{id:"75",data:[{id:"<Ts /> server/api/banners.ts"},{id:"<Vue /> *.vue"}],"tab-id":"defineEventHandler"},{title0:a(({value:e,isActive:t})=>[o(i),s(" server/api/banners.ts")]),title1:a(({value:e,isActive:t})=>[o(c),s(" *.vue")]),tab0:a(({value:e,isActive:t})=>[H]),tab1:a(({value:e,isActive:t})=>[L]),_:1},8,["data"])])}const S=u(v,[["render",E],["__file","nuxt.html.vue"]]);export{S as default};