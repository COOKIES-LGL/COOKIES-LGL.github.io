(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[1234],{3315:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-4c0eddc3",path:"/pages/fe-interview/h5LoadSpeedOptimize/rafScript/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"pages/fe-interview/h5LoadSpeedOptimize/rafScript/README.md",git:{updatedTime:1727168301e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:2}]}}},4568:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@file</span> Preload.js\n * <span class="token keyword">@description</span>: 预加载文件\n */</span>\n\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> scripts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n  scripts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span> crossOrigin<span class="token operator">=</span><span class="token string">&quot;anonymous&quot;</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;script&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@file</span> requestAnimationFrame.js\n * <span class="token keyword">@description</span>: raf 兼容字符串\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> safeRequestAnimationFrameStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">window.requestAnimationFrame ||\n\n// Older versions Chrome/Webkit\nwindow.webkitRequestAnimationFrame ||\n\n// opera\nwindow.oRequestAnimationFrame ||\n\n// Firefox &lt; 23\nwindow.mozRequestAnimationFrame ||\n\n// IE\nwindow.msRequestAnimationFrame ||\n\nfunction (callback) {\n    return window.setTimeout(callback, 1000 / 60);\n};</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@file</span> RafScript.js\n * <span class="token keyword">@scripts</span> 需要加载的脚步列表\n * <span class="token keyword">@context</span> 设备上下文\n * <span class="token keyword">@description</span> raf 优化 ios 加载\n */</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Preload <span class="token keyword">from</span> <span class="token string">&quot;./Preload&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SYSTEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./platform-util&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> safeRequestAnimationFrameStr <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./requestAnimationFrame&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RafScript</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> scripts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>\n      <span class="token punctuation">{</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;development&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>Preload scripts<span class="token operator">=</span><span class="token punctuation">{</span>scripts<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span>script\n        dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          __html<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(function() {\n    function loadScript(n) {\n      for (var e = document.createDocumentFragment(), t = 0; t &lt; n.length; t++) {\n        var o = document.createElement(&quot;script&quot;);\n        o.src = n[t],\n        o.crossOrigin = &quot;anonymous&quot;,\n        o.async = !1,\n        e.appendChild(o)\n      }\n      document.body.appendChild(e)\n    }\n    function scriptDelayLoad(n) {\n      var aniFrame = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>safeRequestAnimationFrameStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n      aniFrame(function(){\n        loadScript(n)\n      })\n    }\n    document.addEventListener(&#39;DOMContentLoaded&#39;, function () {\n      </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token operator">?.</span>platform<span class="token operator">?.</span>platform <span class="token operator">===</span> <span class="token constant">SYSTEM</span><span class="token punctuation">.</span><span class="token constant">IOS</span> <span class="token operator">?</span> <span class="token string">&quot;scriptDelayLoad&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;loadScript&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">([</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scripts\n            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]);\n    });\n}());</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>',3),t={render:function(n,s){return p}}}}]);