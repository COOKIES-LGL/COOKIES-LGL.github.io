(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[6510],{2916:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-f5e4f90a",path:"/pages/frontier-technology/WebContainer/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"WebContainers 使用笔记",slug:"webcontainers-使用笔记",children:[{level:3,title:"定义",slug:"定义",children:[]},{level:3,title:"使用",slug:"使用",children:[]},{level:3,title:"配置跨域",slug:"配置跨域",children:[]}]}],filePathRelative:"pages/frontier-technology/WebContainer/README.md",git:{updatedTime:172681525e4,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:2}]}}},7852:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="webcontainers-使用笔记"><a class="header-anchor" href="#webcontainers-使用笔记">#</a> WebContainers 使用笔记</h2><h3 id="定义"><a class="header-anchor" href="#定义">#</a> 定义</h3><p>WebContainers 是一种基于浏览器的运行时，用于在浏览器标签内完全执行 Node.js 应用程序和操作系统命令。 在 WebContainers 中，先前需要云虚拟机来执行用户代码的应用程序可以完全在客户端运行，并且相对于传统的云虚拟机，具有许多优点。</p><h3 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h3><h4 id="安装-webcontainer-api"><a class="header-anchor" href="#安装-webcontainer-api">#</a> 安装 webcontainer/api</h4><p>可以让我们使用到 webcontainer 中的一些核心的功能<br> 我们接下来就是需要通过 webcontainer/api 来将这段 node.js 代码运行在浏览器环境中 项目结构 ---files.js ---main.js ---index.html</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// files.js</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;index.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      file<span class="token operator">:</span> <span class="token punctuation">{</span>\n        contents<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\nimport express from &#39;express&#39;;\nconst app = express();\nconst port = 3111;\n\napp.get(&#39;/&#39;, (req, res) =&gt; {\n    res.send(&#39;Welcome to a WebContainers app! 🥳&#39;);\n});\n\napp.listen(port, () =&gt; {\n    console.log(</span><span class="token template-punctuation string">`</span></span>App is live at http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span>$<span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">);\n});</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;package.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      file<span class="token operator">:</span> <span class="token punctuation">{</span>\n        contents<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n          {\n            &quot;name&quot;: &quot;example-app&quot;,\n            &quot;type&quot;: &quot;module&quot;,\n            &quot;dependencies&quot;: {\n              &quot;express&quot;: &quot;latest&quot;,\n              &quot;nodemon&quot;: &quot;latest&quot;\n            },\n            &quot;scripts&quot;: {\n              &quot;start&quot;: &quot;nodemon index.js&quot;\n            }\n          }</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> WebContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@webcontainer/api&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./files&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Terminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;xterm&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;xterm/css/xterm.css&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建输入组件</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  &lt;div class=&quot;container&quot;&gt;\n    &lt;div class=&quot;editor&quot;&gt;\n      &lt;textarea&gt;I am a textarea&lt;/textarea&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;preview&quot;&gt;\n      &lt;iframe src=&quot;loading.html&quot;&gt;&lt;/iframe&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;terminal&quot;&gt;&lt;/div&gt;\n  &lt;/div&gt;\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token comment">// 配置调试终端</span>\n<span class="token comment">// convertEol设置为的原因true是强制光标始终从下一行的开头开始</span>\n<span class="token keyword">const</span> terminal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Terminal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  convertEol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>HTMLTextAreaElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span> */</span>\n<span class="token keyword">const</span> terminalEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.terminal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  terminal<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>terminalEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 加载files.js文件</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  textareaEl<span class="token punctuation">.</span>value <span class="token operator">=</span> files<span class="token punctuation">[</span><span class="token string">&quot;index.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>file<span class="token punctuation">.</span>contents<span class="token punctuation">;</span>\n  textareaEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">writeIndexJS</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">writeIndexJS</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> webcontainerInstance<span class="token punctuation">.</span>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;/index.js&quot;</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>HTMLIFrameElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span> */</span>\n<span class="token keyword">const</span> iframeEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;iframe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>HTMLTextAreaElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span> */</span>\n<span class="token keyword">const</span> textareaEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;textarea&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  webcontainerInstance <span class="token operator">=</span> <span class="token keyword">await</span> WebContainer<span class="token punctuation">.</span><span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> webcontainerInstance<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> exitCode <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">installDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>exitCode <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Installation failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">startDevServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 下载代码所需的依赖了，我们需要通过webcontainer/api 提供的 spawn 方法来执行 npm 命令</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">installDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Install dependencies</span>\n  <span class="token keyword">const</span> installProcess <span class="token operator">=</span> <span class="token keyword">await</span> webcontainerInstance<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;install&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  installProcess<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">pipeTo</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">WritableStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token function">write</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        terminal<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// Wait for install command to exit</span>\n  <span class="token keyword">return</span> installProcess<span class="token punctuation">.</span>exit<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">startDevServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Run `npm run start` to start the Express app</span>\n  <span class="token keyword">const</span> serverProcess <span class="token operator">=</span> <span class="token keyword">await</span> webcontainerInstance<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  serverProcess<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">pipeTo</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">WritableStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token function">write</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        terminal<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Wait for `server-ready` event</span>\n  webcontainerInstance<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;server-ready&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">port<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    iframeEl<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h3 id="配置跨域"><a class="header-anchor" href="#配置跨域">#</a> 配置跨域</h3><p>为避免跨域问题，WebContainers 要求我们的页面（即使在开发阶段）也需要使用这两个标头</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  server<span class="token operator">:</span> <span class="token punctuation">{</span>\n    headers<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;Cross-Origin-Embedder-Policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;require-corp&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;Cross-Origin-Opener-Policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;same-origin&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',12),t={render:function(n,s){return p}}}}]);