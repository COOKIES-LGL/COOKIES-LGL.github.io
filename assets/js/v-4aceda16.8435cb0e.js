(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[2721],{8423:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-4aceda16",path:"/pages/blog-daily/vscode-plugin/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"开发与调试",slug:"开发与调试",children:[]},{level:3,title:"如何编写一个 vscode 插件",slug:"如何编写一个-vscode-插件",children:[]},{level:3,title:"package.json：插件的声明文件，包含 2 个重要配置项",slug:"package-json-插件的声明文件-包含-2-个重要配置项",children:[]},{level:3,title:"extension.js：插件的执行入口文件，",slug:"extension-js-插件的执行入口文件",children:[]},{level:3,title:"如何调试 vscode",slug:"如何调试-vscode",children:[]},{level:3,title:"打包",slug:"打包",children:[]},{level:3,title:"发布的注意事项：",slug:"发布的注意事项",children:[]}],filePathRelative:"pages/blog-daily/vscode-plugin/README.md",git:{updatedTime:1733294272e3,contributors:[{name:"guilin.li",email:"1344714332@qq.com",commits:2},{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:1}]}}},8504:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var p=a(6252);const t=(0,p.uE)('<h3 id="开发与调试"><a class="header-anchor" href="#开发与调试">#</a> 开发与调试</h3><p>Vscode 插件是一个由 HTML、CSS、JS、图片等资源组成的压缩包,保证根目录有<strong>manifest.json</strong>即可。</p><h3 id="如何编写一个-vscode-插件"><a class="header-anchor" href="#如何编写一个-vscode-插件">#</a> 如何编写一个 vscode 插件</h3><p>开发 vscode 插件需要本地环境安装了 node.js 和 git，然后借助脚手架 yomen 和 generator-code 来快速生成项目框架</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// 安装yomen generator-code\n<span class="token function">npm</span> <span class="token function">install</span> yo generator-code\n// 根据提示选择配置，快速生成项目框架，\nyo code\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>生成的项目目录结构如下：</p><p>vscode 插件的核心实现主要在 package.json 和 extension.js 文件中。</p><h3 id="package-json-插件的声明文件-包含-2-个重要配置项"><a class="header-anchor" href="#package-json-插件的声明文件-包含-2-个重要配置项">#</a> package.json：插件的声明文件，包含 2 个重要配置项</h3><p>activationEvents、contributes。</p><h4 id="activationevents"><a class="header-anchor" href="#activationevents">#</a> activationEvents</h4><p>主要用于指定插件的触发事件。基于性能的考虑，vscode 插件都是 lazy load 的，只有激活的时候才启用插件。例子中用到的是 onCommand，在 Hello World 命令被调用时，插件才会被激活。</p><p>目前支持 11 种激活事件：</p><ul><li>onLanguage:${language} ：当打开特定语言时插件被激活</li><li>onCommand:${command}： 调用某个 VSCode 命令时插件被激活</li><li>onDebug：Debug 时插件被激活</li><li>workspaceContains:${toplevelfilename}：当打开包含某个命名规则的文件夹时插件被激活</li><li>onFileSystem:${scheme}：以某个协议（ftp/sftp/ssh 等）打开文件或文件夹时插件被激活</li><li>onView:${viewId}：指定 id 的视图展开时插件被激活</li><li>onUri：插件的系统级 URI 打开时插件被激活</li><li>onWebviewPanel：webview 触发时插件被激活</li><li>*：VSCode 启动时插件被激活。</li></ul><h4 id="contributes"><a class="header-anchor" href="#contributes">#</a> contributes</h4><p>主要是描述插件的拓展点，定义插件要扩展 vscode 哪部分功能。 常用扩展项有 代码片段（snippets）、命令（commands）、菜单（menus）、快捷键（keybindings）、主题（themes）。通常完成命令的开发后，会将其与菜单/快捷键进行关联，以便调用。</p><h3 id="extension-js-插件的执行入口文件"><a class="header-anchor" href="#extension-js-插件的执行入口文件">#</a> extension.js：插件的执行入口文件，</h3><p>通常包括激活（activate）和禁用（deactivate）2 个方法。vscode 会在激活插件的时候会执行 active 钩子，在卸载插件的时候会执行 deactivate 钩子。 接下来通过开发一个 jumpNpm 的插件来看一下如何实现一个 vscode 插件 实现功能：</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>根据 package.json 里的 npm 包名字按 commond 键+点击跳转到本地 node_modules 下 鼠标悬浮在 npm 包名字上的时候，显示当前包的名字、版本、协议信息的提示</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jumpNpm&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jumpNpm&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.73.0&quot;</span> <span class="token comment">// 插件支持的最低vscode版本</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;categories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;Other&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;onLanguage:json&quot;</span> <span class="token comment">// 注册命令事件</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./extension.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;contributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;pretest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn run lint&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./test/runTest.js&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;@types/glob&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;@types/mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.0.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16.x&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;@types/vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.73.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;@vscode/test-electron&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.26.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;glob&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.3&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.1.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.8.4&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>由于用在 package.json 里的 npm 包，只用打开 json 文件的时候激活插件，所以配置了&quot;activationEvents&quot;: [&quot;onLanguage:json&quot;]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> vscode <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vscode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 注册如何实现跳转到定义，第一个参数表示仅对json文件生效</span>\n  <span class="token keyword">const</span> definitionProvider <span class="token operator">=</span> vscode<span class="token punctuation">.</span>languages<span class="token punctuation">.</span><span class="token function">registerDefinitionProvider</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token function">provideDefinition</span><span class="token punctuation">(</span><span class="token parameter">document<span class="token punctuation">,</span> position<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 当前文件完整路径</span>\n      <span class="token keyword">const</span> filePath <span class="token operator">=</span> document<span class="token punctuation">.</span>fileName<span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>filePath<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;package.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 当前文件所在目录</span>\n\n      <span class="token keyword">const</span> workDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 光标所在单词</span>\n      <span class="token keyword">const</span> pkgName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getWordRangeAtPosition</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pkgName<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 更改 Node.js进程到package.json文件工作目录</span>\n\n      process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>workDir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> destPath <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">resolvePath</span><span class="token punctuation">(</span>pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 判空</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>destPath <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>destPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// new vscode.Position(0, 0) 表示跳转到某个文件的第一行第一列</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vscode<span class="token punctuation">.</span>Location</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>destPath<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">vscode<span class="token punctuation">.</span>Position</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> hoverProvider <span class="token operator">=</span> vscode<span class="token punctuation">.</span>languages<span class="token punctuation">.</span><span class="token function">registerHoverProvider</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">provideHover</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">document<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> filePath <span class="token operator">=</span> document<span class="token punctuation">.</span>fileName<span class="token punctuation">;</span>\n      <span class="token keyword">const</span> workDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> word <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getWordRangeAtPosition</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>filePath<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;package.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>content<span class="token operator">?.</span>dependencies<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">||</span> content<span class="token operator">?.</span>devDependencies<span class="token punctuation">[</span>word<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 更改 Node.js进程到package.json文件工作目录</span>\n        process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>workDir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> destPath <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">resolvePath</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> packageContent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>destPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hover内容支持markdown语法</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vscode<span class="token punctuation">.</span>Hover</span><span class="token punctuation">(</span>\n          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">* **名称**：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageContent<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n* **版本**：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageContent<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n* **许可协议**：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageContent<span class="token punctuation">.</span>license<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>definitionProvider<span class="token punctuation">,</span> hoverProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  activate<span class="token punctuation">,</span>\n  deactivate<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>出于安全性考虑，vscode 不支持直接操作 dom，只能使用 vscode 封装的 api 来操作编辑器，也就是头部 require 的 vscode 对象。这里是对 json 文件的内容进行跳转命令，所以使用 vscode.languages.registerDefinitionProvider 注册一个监听 json 文件的 provider，然后将返回的实例添加至 context.subscriptions 中。当命令被激活时，会执行相应的回调方法。</p><h3 id="如何调试-vscode"><a class="header-anchor" href="#如何调试-vscode">#</a> 如何调试 vscode</h3><p>使用 Yomen 生成的模板自带 vs code 运行能力，切换到调试面板点击运行就会创建一个新的 vscode 窗口(Extension Development Host)，可以在该窗口进行调试。每次修改了代码通过 command+shift+F5 刷新</p><h3 id="打包"><a class="header-anchor" href="#打包">#</a> 打包</h3><p>插件的打包需要借助 vsce 这个工具打包成 vsix 文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// 全局安装vsce\n<span class="token function">npm</span> <span class="token function">install</span> -g vsce\n// 打包\nvsce package\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',27),e=(0,p.Uk)("打包后会生成一个以.vsix 结尾的文件 vscode 插件的安装支持本地安装和插件应用市场两种安装形式。 本地安装的话，可以通过以下步骤安装上一步生成的.vsix 文件。 "),o=(0,p.Wm)("br",null,null,-1),c=(0,p.Uk)(" 发布到应用市场安装的话，就需要在 Azure DevOps 上注册账号，并创建一个组织来获取 PAT(Personak access tokens)。"),l=(0,p.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// 登陆 需要PAT\nvsce login <span class="token operator">&lt;</span>plublisher name<span class="token operator">&gt;</span>\n// 打包\nvsce package\n// 发布\nvsce publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="发布的注意事项"><a class="header-anchor" href="#发布的注意事项">#</a> 发布的注意事项：</h3><ul><li>PAT 网站不会存储，需要自行保存</li><li>plublisher name 需要和 pacage.json 里的保持一致</li></ul>',3),u={render:function(n,s){return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("img",{src:n.$withBase("./images/daily-blog/vscode-plugin.png"),class:"show-in-center"},null,8,["src"]),t,(0,p.Wm)("p",null,[e,(0,p.Wm)("img",{src:n.$withBase("./images/daily-blog/vscode-plugin-open.png"),class:"show-in-center"},null,8,["src"]),o,c]),l],64)}}}}]);