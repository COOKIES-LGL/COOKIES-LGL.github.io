(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[1419],{8312:(e,a,c)=>{"use strict";c.r(a),c.d(a,{data:()=>o});const o={key:"v-39755cf8",path:"/pages/fe-sre/babel/",title:"",lang:"zh-CN",frontmatter:{home:!1},excerpt:"",headers:[{level:3,title:"babel 使用笔记",slug:"babel-使用笔记",children:[]},{level:3,title:"AST 解析器对比",slug:"ast-解析器对比",children:[]},{level:3,title:"MarkDown 使用指南",slug:"markdown-使用指南",children:[]}],filePathRelative:"pages/fe-sre/babel/README.md",git:{updatedTime:1732773631e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:4}]}}},8205:(e,a,c)=>{"use strict";c.r(a),c.d(a,{default:()=>l});const o=(0,c(6252).uE)('<h3 id="babel-使用笔记"><a class="header-anchor" href="#babel-使用笔记">#</a> babel 使用笔记</h3><p><code>@babel/preset-env</code> 是一个 <code>Babel</code> 预设，它根据你的目标环境自动确定你的代码需要的 <code>Babel</code> 插件和 <code>polyfills</code>，并添加它们。然而，它主要关注于转换你的代码本身，而不是第三方包</p><p><code>Webpack</code> 在使用 <code>Babel-loader</code> 时会读取项目根目录下的 <code>.babelrc</code> 或 <code>babel.config.js</code> 配置文件，并应用这些配置选项。 如果你在 <code>webpack</code> 配置文件中也配置了 <code>Babel</code>，那么这些配置可能会与 <code>.babelrc</code> 文件中的配置有所覆盖 options 对象内的配置将优先于 <code>.babelrc</code> 中的配置。如果两边有同样的配置，<code>webpack</code> 的配置将覆盖 <code>.babelrc</code> 中的配置</p><p><code>.browserslistrc</code> 文件内容会被 <code>Babel</code> 自动读取并用于确定目标浏览器的版本，不会覆盖 <code>Babel</code> 本身的配置。 如果你使用 <code>Babel</code> 配置文件（如 <code>.babelrc、babel.config.js</code>或 <code>package.json</code> 中的 <code>babel</code> 字段）， 你可以在其中指定额外的 <code>Babel</code> 插件和预设，这些配置将会与 <code>.browserslistrc</code> 的内容相结合，共同决定如何转换代码</p><p>我们的组件引入方式不是从 <code>lib</code> 文件夹里引入的，这些组件不支持旧版浏览器。<code>lib</code> 里的组件走过 <code>polyfill</code> 支持旧版浏览器，所以手动从入口文件引入了下 <code>polyfill</code>。后续有兼容性组件特性引入可以从 组件库 <code>lib</code> 路径引入。 转译第三方包可能会导致构建时间显著增加，会引入不必要的复杂性。因此，在大多数情况下，建议只为自己的源代码配置 <code>Babel</code>。<code>core-js</code> 本身并不提供 <code>Intl.DateTimeFormate</code> 的 <code>polyfill</code> 之前的时区 <code>polyfill</code> 还是得手动填加。</p><h3 id="ast-解析器对比"><a class="header-anchor" href="#ast-解析器对比">#</a> AST 解析器对比</h3><details class="custom-container details"><summary>Acorn</summary><p>性能很出色，允许接入更高级的 ES Syntax，最近几年已经成为非常受欢迎的解析器之一 rollup 基于此。</p></details><details class="custom-container details"><summary>Babel Parser</summary><p>Babel 的语法分析器，允许支持不同于常见的 JavaScript 语法的开发语言（如 JSX）。兼容 ES6 和 ES7，并已经处理了 TC39 最新的语法变化。同时具有兼容性，易于扩展的优点。而 babel 目前所用的解析器 fork 自 acorn。webpack 的核心 parser 也是 acorn。而 eslint 作为一个可配置的代码规范检查工具，可以任意选择定义解析器来使用。</p></details><details class="custom-container details"><summary>recast</summary><p>一大特色就是在 print 的时候会尽量的保持源代码的格式，输出时只会重新输出有修改的 ast，未更改过的 ast，会直接按原样输出。所以非常适合那些需要修改源码，并且要把修改后的结果覆写到源码的情况。但是前提是需要使用 recast 的 parser，不要在 print 的时候使用一个用别的工具 parse 出来的 ast。</p></details><h3 id="markdown-使用指南"><a class="header-anchor" href="#markdown-使用指南">#</a> MarkDown 使用指南</h3><ul><li><a href="../../blog-daily/use-markdown">MarkDown</a> <span style="color:#bbb;float:right;">2023-06-24</span></li></ul>',11),l={render:function(e,a){return o}}}}]);