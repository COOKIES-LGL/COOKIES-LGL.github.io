(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[5332],{9061:(e,a,r)=>{"use strict";r.r(a),r.d(a,{data:()=>n});const n={key:"v-7d5c25d6",path:"/pages/fe-sre/npm/common-use-npm/",title:"",lang:"zh-CN",frontmatter:{home:!1},excerpt:"",headers:[{level:2,title:"高频使用的 NPM 包",slug:"高频使用的-npm-包",children:[{level:3,title:"depcheck",slug:"depcheck",children:[]},{level:3,title:"yargs 命令参数配置",slug:"yargs-命令参数配置",children:[]},{level:3,title:"copy-dir 拷贝文件夹",slug:"copy-dir-拷贝文件夹",children:[]},{level:3,title:"minimist",slug:"minimist",children:[]},{level:3,title:"fast-glob",slug:"fast-glob",children:[]},{level:3,title:"nodemon",slug:"nodemon",children:[]},{level:3,title:"ts-morph",slug:"ts-morph",children:[]},{level:3,title:"chokidar",slug:"chokidar",children:[]},{level:3,title:"yargs 命令行参数处理工具",slug:"yargs-命令行参数处理工具",children:[]},{level:3,title:"MockJs",slug:"mockjs",children:[]},{level:3,title:"simple-git 一个轻量级但功能强大的 Node.js Git 库",slug:"simple-git-一个轻量级但功能强大的-node-js-git-库",children:[]},{level:3,title:"@oclif/command 脚手架命令执行",slug:"oclif-command-脚手架命令执行",children:[]},{level:3,title:"cosmiconfig",slug:"cosmiconfig",children:[]},{level:3,title:"cron",slug:"cron",children:[]},{level:3,title:"amqplib",slug:"amqplib",children:[]},{level:3,title:"@better-scroll/core 核心滚动，",slug:"better-scroll-core-核心滚动",children:[]},{level:3,title:"patch-package",slug:"patch-package",children:[]},{level:3,title:"resize-observer-polyfill",slug:"resize-observer-polyfill",children:[]},{level:3,title:"@loadable/server",slug:"loadable-server",children:[]},{level:3,title:"react-spring",slug:"react-spring",children:[]},{level:3,title:"@loadable/component",slug:"loadable-component",children:[]},{level:3,title:"generator-eslint 自定义 eslint 规则生成器",slug:"generator-eslint-自定义-eslint-规则生成器",children:[]},{level:3,title:"markdown-it 一个快速、灵活的 markdown 引擎",slug:"markdown-it-一个快速、灵活的-markdown-引擎",children:[]},{level:3,title:"开发 npm 开发笔记",slug:"开发-npm-开发笔记",children:[]},{level:3,title:"github-markdown-css",slug:"github-markdown-css",children:[]},{level:3,title:"node-stream-zip",slug:"node-stream-zip",children:[]},{level:3,title:"cheerio",slug:"cheerio",children:[]},{level:3,title:"unplugin-vue-components",slug:"unplugin-vue-components",children:[]},{level:3,title:"http2-proxy",slug:"http2-proxy",children:[]},{level:3,title:"Corepack 包管理器的管理器",slug:"corepack-包管理器的管理器",children:[]},{level:3,title:"ts-node",slug:"ts-node",children:[]},{level:3,title:"xterm.js",slug:"xterm-js",children:[]},{level:3,title:"dependency-cruiser",slug:"dependency-cruiser",children:[]},{level:3,title:"bundle-require",slug:"bundle-require",children:[]},{level:3,title:"react-css-modules",slug:"react-css-modules",children:[]},{level:3,title:"it-cliff",slug:"it-cliff",children:[]},{level:3,title:"source-map-explorer",slug:"source-map-explorer",children:[]}]}],filePathRelative:"pages/fe-sre/npm/common-use-npm/README.md",git:{updatedTime:1730118771e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:10}]}}},8484:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>V});var n=r(6252);const s=(0,n.uE)('<h2 id="高频使用的-npm-包"><a class="header-anchor" href="#高频使用的-npm-包">#</a> 高频使用的 NPM 包</h2><h3 id="depcheck"><a class="header-anchor" href="#depcheck">#</a> depcheck</h3><p>检测幽灵依赖</p><h3 id="yargs-命令参数配置"><a class="header-anchor" href="#yargs-命令参数配置">#</a> yargs 命令参数配置</h3><p>如果通过 process.argv 来获取，要额外处理两种不同的命令参数格式，不方便。</p><p>这里推荐 yargs 开源库来解析命令参数。运行以下命令安装 yargs</p><blockquote><p>npm install -g yargs</p></blockquote><h3 id="copy-dir-拷贝文件夹"><a class="header-anchor" href="#copy-dir-拷贝文件夹">#</a> copy-dir 拷贝文件夹</h3><p>在 Node.js 中拷贝文件夹并不简单，需要用到递归，这里推荐使用开源库 copy-dir 来实现拷贝文件。</p><h3 id="minimist"><a class="header-anchor" href="#minimist">#</a> minimist</h3><p>轻量命令行参数解析工具</p><h3 id="fast-glob"><a class="header-anchor" href="#fast-glob">#</a> fast-glob</h3><p>NodeJS 文件系统遍历工具：fast-glob</p><h3 id="nodemon"><a class="header-anchor" href="#nodemon">#</a> nodemon</h3><p>观察运行 node</p><h3 id="ts-morph"><a class="header-anchor" href="#ts-morph">#</a> ts-morph</h3>',16),l=(0,n.Uk)("基于 TS Compiler API 的工具 "),o={href:"https://zhuanlan.zhihu.com/p/616134364",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("知乎教程"),c={href:"https://ts-morph.com/utilities",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("文档"),p=(0,n.Wm)("h3",{id:"chokidar"},[(0,n.Wm)("a",{class:"header-anchor",href:"#chokidar"},"#"),(0,n.Uk)(" chokidar")],-1),h=(0,n.Uk)("极简高效的跨平台文件监视库 封装 Node.js 监控文件系统文件变化功能 "),d={href:"https://zhuanlan.zhihu.com/p/601689232?utm_id=0",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("知乎教程"),u=(0,n.Wm)("h3",{id:"yargs-命令行参数处理工具"},[(0,n.Wm)("a",{class:"header-anchor",href:"#yargs-命令行参数处理工具"},"#"),(0,n.Uk)(" yargs 命令行参数处理工具")],-1),g={href:"https://www.npmjs.com/package/yargs",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("yargs"),f=(0,n.Wm)("h3",{id:"mockjs"},[(0,n.Wm)("a",{class:"header-anchor",href:"#mockjs"},"#"),(0,n.Uk)(" MockJs")],-1),b={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("MockJs 官方文档"),W=(0,n.Wm)("h3",{id:"simple-git-一个轻量级但功能强大的-node-js-git-库"},[(0,n.Wm)("a",{class:"header-anchor",href:"#simple-git-一个轻量级但功能强大的-node-js-git-库"},"#"),(0,n.Uk)(" simple-git 一个轻量级但功能强大的 Node.js Git 库")],-1),y={href:"https://juejin.cn/post/7229906749070721085",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Uk)("simple-git"),j=(0,n.Wm)("h3",{id:"oclif-command-脚手架命令执行"},[(0,n.Wm)("a",{class:"header-anchor",href:"#oclif-command-脚手架命令执行"},"#"),(0,n.Uk)(" @oclif/command 脚手架命令执行")],-1),U={href:"https://zhuanlan.zhihu.com/p/54538055",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("@oclif/command"),x=(0,n.uE)('<h3 id="cosmiconfig"><a class="header-anchor" href="#cosmiconfig">#</a> cosmiconfig</h3><p>读取项目配置信息</p><h3 id="cron"><a class="header-anchor" href="#cron">#</a> cron</h3><p>node 维护定时任务</p><h3 id="amqplib"><a class="header-anchor" href="#amqplib">#</a> amqplib</h3><p>node 维护消息队列</p><h3 id="better-scroll-core-核心滚动"><a class="header-anchor" href="#better-scroll-core-核心滚动">#</a> @better-scroll/core 核心滚动，</h3><p>实现基础的列表滚动效</p><h3 id="patch-package"><a class="header-anchor" href="#patch-package">#</a> patch-package</h3><p>用与修复 npm 包的工具，允许你在不修改原始包的情况下进行补丁</p><h3 id="resize-observer-polyfill"><a class="header-anchor" href="#resize-observer-polyfill">#</a> resize-observer-polyfill</h3><p>提供浏览器的 resize 事件监听</p><h3 id="loadable-server"><a class="header-anchor" href="#loadable-server">#</a> @loadable/server</h3><h3 id="react-spring"><a class="header-anchor" href="#react-spring">#</a> react-spring</h3><p>react 动画库</p><h3 id="loadable-component"><a class="header-anchor" href="#loadable-component">#</a> @loadable/component</h3>',16),z=(0,n.Uk)("应用程序，组件拆分懒加载"),N=(0,n.Wm)("br",null,null,-1),_=(0,n.Uk)(" Enable Code Splitting in your React application. "),E={href:"https://loadable-components.com/",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("文档"),C=(0,n.Wm)("h3",{id:"generator-eslint-自定义-eslint-规则生成器"},[(0,n.Wm)("a",{class:"header-anchor",href:"#generator-eslint-自定义-eslint-规则生成器"},"#"),(0,n.Uk)(" generator-eslint 自定义 eslint 规则生成器")],-1),M={href:"https://github.com/eslint/generator-eslint",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("generator-eslint"),P=(0,n.Wm)("h3",{id:"markdown-it-一个快速、灵活的-markdown-引擎"},[(0,n.Wm)("a",{class:"header-anchor",href:"#markdown-it-一个快速、灵活的-markdown-引擎"},"#"),(0,n.Uk)(" markdown-it 一个快速、灵活的 markdown 引擎")],-1),I={href:"https://markdown-it.docschina.org/",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("markdown 中文文档"),R=(0,n.uE)('<h3 id="开发-npm-开发笔记"><a class="header-anchor" href="#开发-npm-开发笔记">#</a> 开发 npm 开发笔记</h3><p>开发一个 npm 包需要创建在项目中新建 example 项目用于测试</p><h3 id="github-markdown-css"><a class="header-anchor" href="#github-markdown-css">#</a> github-markdown-css</h3><p>帮助您轻松实现与 GitHub 一致的 Markdown 样式</p><h3 id="node-stream-zip"><a class="header-anchor" href="#node-stream-zip">#</a> node-stream-zip</h3><p>是查看和提取大型 ZIP 文件的 Node.js 库</p><h3 id="cheerio"><a class="header-anchor" href="#cheerio">#</a> cheerio</h3><p>一个用于解析 HTML 的库</p><h3 id="unplugin-vue-components"><a class="header-anchor" href="#unplugin-vue-components">#</a> unplugin-vue-components</h3><p>插件可以在 Vue 文件中自动引入组件</p><h3 id="http2-proxy"><a class="header-anchor" href="#http2-proxy">#</a> http2-proxy</h3><ul><li>微服务架构：作为不同微服务间的代理层，实现高效的内部通信。</li><li>负载均衡：可以用来分发流量到不同的后端服务器，增强系统的可扩展性和稳定性。</li><li>协议转换：帮助老旧系统与采用 HTTP/2 的新服务之间进行通信。</li><li>API 网关：在前端应用程序与多个后端 API 服务之间架设桥梁，统一管理和代理请求。</li><li>开发测试：快速搭建本地开发环境的代理，方便调试跨域问题或模拟不同后端服务响应。</li></ul><h3 id="corepack-包管理器的管理器"><a class="header-anchor" href="#corepack-包管理器的管理器">#</a> Corepack 包管理器的管理器</h3><p>在不同的项目切换时，难免会遇到使用不同的包管理器或者不同的包管理器版本的情况。如果团队中每个人都是用不同的包管理器或者不同版本,可能会导致：</p><ul><li>新版本的包管理的 breaking change 导致安装失败</li><li>安装的依赖版本不一致导致构建或运行失败，亦或是产生不同的构建结果，导致运行结果不一致</li><li>在没有对依赖进行变更的情况下更新了 lock 文件</li></ul><p><code>Corepack</code>就是为了解决这些问题</p><h3 id="ts-node"><a class="header-anchor" href="#ts-node">#</a> ts-node</h3><p>执行一个一次性的 Nodejs 脚本命令</p><blockquote><p>TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension &quot;.ts&quot;</p></blockquote><p>这是因为通过 tsc --init 生成默认 tsconfig.json 使用的默认模块规范是：&quot;module&quot;: &quot;commonjs&quot;, 也就是说 Typescript 的默认配置是将代码编译为 commonjs 的模块，而非我们在 package.json 中声明的 module （即 ES module）模块。 ts-node 在运行时会既会读取 package.json 又会读取 tsconfig.json ，而二者的配置相互冲突，于是产生了错误。 修改 tsconfig.json 中的</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span> <span class="token comment">// or ES2015, ES2020</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;ts-node&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;esm&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="xterm-js"><a class="header-anchor" href="#xterm-js">#</a> xterm.js</h3><p>一个使用 TypeScript 编写的前端终端组件</p><h3 id="dependency-cruiser"><a class="header-anchor" href="#dependency-cruiser">#</a> dependency-cruiser</h3><p>检测项目三方 npm 包依赖， 分析单文件对应的所有依赖</p><h3 id="bundle-require"><a class="header-anchor" href="#bundle-require">#</a> bundle-require</h3><p>‌bundle-require 是一个用于在 Node.js 项目中打包和管理依赖的包</p><h3 id="react-css-modules"><a class="header-anchor" href="#react-css-modules">#</a> react-css-modules</h3>',28),L=(0,n.Uk)("React CSS Modules 实现了自动化映射 CSS modules，完美得解决了上述问题，它的原理是扩展了 render 方法，根据 styleName 的值去在关联的 styles 对象中查找相应的 css-module，并给每个 CSS 类赋予一个带有全局唯一名字的本地标识符的类名 "),A={href:"https://github.com/gajus/react-css-modules",target:"_blank",rel:"noopener noreferrer"},G=(0,n.Uk)("react-css-modules"),H=(0,n.Wm)("h3",{id:"it-cliff"},[(0,n.Wm)("a",{class:"header-anchor",href:"#it-cliff"},"#"),(0,n.Uk)(" it-cliff")],-1),J=(0,n.Uk)("一个自动总结提交信息，生成 changelog 文件的命令行工具。 "),K={href:"https://github.com/orhun/git-cliff",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("it-cliff"),F=(0,n.uE)('<h3 id="source-map-explorer"><a class="header-anchor" href="#source-map-explorer">#</a> source-map-explorer</h3><p>打包体积分析</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;analyze&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;source-map-explorer &#39;build/static/js/*.js&#39;&quot;</span>,\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),V={render:function(e,a){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("p",null,[l,(0,n.Wm)("a",o,[t,(0,n.Wm)(r)]),(0,n.Wm)("a",c,[i,(0,n.Wm)(r)])]),p,(0,n.Wm)("p",null,[h,(0,n.Wm)("a",d,[m,(0,n.Wm)(r)])]),u,(0,n.Wm)("p",null,[(0,n.Wm)("a",g,[k,(0,n.Wm)(r)])]),f,(0,n.Wm)("p",null,[(0,n.Wm)("a",b,[v,(0,n.Wm)(r)])]),W,(0,n.Wm)("p",null,[(0,n.Wm)("a",y,[q,(0,n.Wm)(r)])]),j,(0,n.Wm)("p",null,[(0,n.Wm)("a",U,[w,(0,n.Wm)(r)])]),x,(0,n.Wm)("p",null,[z,N,_,(0,n.Wm)("a",E,[S,(0,n.Wm)(r)])]),C,(0,n.Wm)("p",null,[(0,n.Wm)("a",M,[T,(0,n.Wm)(r)])]),P,(0,n.Wm)("p",null,[(0,n.Wm)("a",I,[O,(0,n.Wm)(r)])]),R,(0,n.Wm)("p",null,[L,(0,n.Wm)("a",A,[G,(0,n.Wm)(r)])]),H,(0,n.Wm)("p",null,[J,(0,n.Wm)("a",K,[D,(0,n.Wm)(r)])]),F],64)}}}}]);