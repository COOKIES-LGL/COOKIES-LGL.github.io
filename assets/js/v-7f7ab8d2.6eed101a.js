(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[2690],{5399:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-7f7ab8d2",path:"/pages/css/UnoCSS/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"下载安装 UnoCSS",slug:"下载安装-unocss",children:[]},{level:3,title:"配置文件",slug:"配置文件",children:[]},{level:3,title:"在 vite.config.ts 中引入一下",slug:"在-vite-config-ts-中引入一下",children:[]}],filePathRelative:"pages/css/UnoCSS/README.md",git:{updatedTime:1727063061e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:2}]}}},1880:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var p=a(6252);const t=(0,p.uE)('<h3 id="下载安装-unocss"><a class="header-anchor" href="#下载安装-unocss">#</a> 下载安装 UnoCSS</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> unocss\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置文件"><a class="header-anchor" href="#配置文件">#</a> 配置文件</h3><p>在项目的根目录下创建 uno.config.{js,ts,mjs,mts}文件</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\ndefineConfig<span class="token punctuation">,</span>\npresetUno<span class="token punctuation">,</span>\npresetAttributify<span class="token punctuation">,</span>\npresetTypography<span class="token punctuation">,</span>\npresetIcons<span class="token punctuation">,</span>\ntransformerVariantGroup，\ntransformerAttributifyJsx<span class="token punctuation">,</span>\ntransformerCompileClass<span class="token punctuation">,</span>\ntransformerDirectives<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unocss&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> presetRemToPx <span class="token keyword">from</span> <span class="token string">&quot;@unocss/preset-rem-to-px&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">//自定义规则</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^bg-?([0123456789abcdef]+)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>_<span class="token punctuation">,</span> rgb<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rgb<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">//预设规则 有前两个预设可以满足95%以上的需求</span>\n  presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">//此预设规则可以看Tailwind CSS、Windi CSS、Bootstrap、Tachyons官网了解相关规则</span>\n    <span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//m-10 理解为 margin:10rem 或者 m-10px 理解为 margin:10px</span>\n    <span class="token function">presetAttributify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//归因模式 bg=&quot;blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600&quot; 背景颜色的简写  也可以再元素上不加class 直接写属样式 例如 &lt;div m-2 p-10 bg-000&gt;&lt;/div&gt;</span>\n   <span class="token comment">// presetTypography(), //排版预设 详细排版看https://unocss.dev/presets/typography#colors 使用这个前两个必须</span>\n   <span class="token comment">// presetIcons(), //css图标 支持图标看 https://icones.js.org/ 需要下载</span>\n\n   <span class="token comment">// 这里看个人需求是否要使用px</span>\n    <span class="token function">presetRemToPx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      baseFontSize<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//基准字体大小  官方的默认预设（1单位 = 0.25rem） html的字体是16  所以这里为4</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//默认unocss默认是rem 转换成 px单位</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">//看个人需求添加转换器</span>\n  transformers<span class="token operator">:</span> <span class="token punctuation">[</span>\n   <span class="token function">transformerVariantGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，\n   <span class="token function">transformerAttributifyJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token function">transformerCompileClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token function">transformerDirectives</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">//以下可以按个人需求添加</span>\n  shortcuts：<span class="token punctuation">{</span><span class="token punctuation">}</span>，\n  layers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  theme<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  variants<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extractors<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  preflights<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="在-vite-config-ts-中引入一下"><a class="header-anchor" href="#在-vite-config-ts-中引入一下">#</a> 在 vite.config.ts 中引入一下</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//vite.config.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> UnoCss <span class="token keyword">from</span> <span class="token string">&quot;unocss/vite&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">//插件中也可以选择指定uno文件地址 参数{configFile: &#39;./uno.config.ts&#39;}</span>\n    <span class="token comment">//当然默认不传参数也是可以正常运行的  这里就不选择传入参数了</span>\n    <span class="token function">UnoCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">//....</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token comment">//另外webpack5中 webpack.config.js</span>\n <span class="token keyword">const</span> UnoCSS <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@unocss/webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span>\n <span class="token keyword">module</span><span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n     plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">UnoCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n     optimization<span class="token operator">:</span> <span class="token punctuation">{</span> realContentHash<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',7),e={href:"https://juejin.cn/post/7322401091237068854",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("参考文献"),c={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[(0,p.Wm)("a",e,[o,(0,p.Wm)(a)])])],64)}}}}]);