(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[9646],{4462:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-1f565bc5",path:"/pages/css/front-end-compatibility/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"1、日期兼容性",slug:"_1、日期兼容性",children:[]},{level:3,title:"2、input 框聚焦，ios 出现 outline 或者阴影，安卓显示正常",slug:"_2、input-框聚焦-ios-出现-outline-或者阴影-安卓显示正常",children:[]},{level:3,title:"3、input 的 placeholder 属性会使文本位置偏上",slug:"_3、input-的-placeholder-属性会使文本位置偏上",children:[]},{level:3,title:"4、ios 设置 input 按钮样式会被默认样式覆盖",slug:"_4、ios-设置-input-按钮样式会被默认样式覆盖",children:[]},{level:3,title:"5、iOS 系统中，中文输入法输入英文时，字母之间可能会出现一个六分之一空格",slug:"_5、ios-系统中-中文输入法输入英文时-字母之间可能会出现一个六分之一空格",children:[]},{level:3,title:"6、移动端点透问题",slug:"_6、移动端点透问题",children:[]},{level:3,title:"7、Android 下取消输入语音按钮",slug:"_7、android-下取消输入语音按钮",children:[]},{level:3,title:"8、ios Android 监听键盘弹起事件",slug:"_8、ios-android-监听键盘弹起事件",children:[]},{level:3,title:"9、常用的 meta 属性设置",slug:"_9、常用的-meta-属性设置",children:[]},{level:3,title:"10、清除输入框内阴影",slug:"_10、清除输入框内阴影",children:[]},{level:3,title:"11、如何禁止保存或拷贝图像",slug:"_11、如何禁止保存或拷贝图像",children:[]},{level:3,title:"12、设置字体禁止缩放",slug:"_12、设置字体禁止缩放",children:[]},{level:3,title:"13、IOS 键盘收起时页面没用回落，底部会留白",slug:"_13、ios-键盘收起时页面没用回落-底部会留白",children:[]},{level:3,title:"14、IOS 下 fixed 失效的原因",slug:"_14、ios-下-fixed-失效的原因",children:[]}],filePathRelative:"pages/css/front-end-compatibility/README.md",git:{updatedTime:172733844e4,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:8}]}}},604:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h3 id="_1、日期兼容性"><a class="header-anchor" href="#_1、日期兼容性">#</a> 1、日期兼容性</h3><p>安卓系统下 可以 Date.parse(new Date(&#39;2018-03-30 12:00:00&#39;))<br> ios 系统下 报错 Date.parse(new Date(&#39;2018-03-30 12:00:00&#39;))</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 兼容写法</span>\n<span class="token keyword">function</span> <span class="token function">formatTimeStamp</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2018/03/30 12:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2018-03-30 12:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2、input-框聚焦-ios-出现-outline-或者阴影-安卓显示正常"><a class="header-anchor" href="#_2、input-框聚焦-ios-出现-outline-或者阴影-安卓显示正常">#</a> 2、input 框聚焦，ios 出现 outline 或者阴影，安卓显示正常</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>\n  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">input:</span> <span class="token punctuation">{</span>\n  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3、input-的-placeholder-属性会使文本位置偏上"><a class="header-anchor" href="#_3、input-的-placeholder-属性会使文本位置偏上">#</a> 3、input 的 placeholder 属性会使文本位置偏上</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">line-height</span><span class="token punctuation">:</span> （和input框的高度一样高）---pc端解决方法 line-height：normal ---移动端解决方法<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_4、ios-设置-input-按钮样式会被默认样式覆盖"><a class="header-anchor" href="#_4、ios-设置-input-按钮样式会被默认样式覆盖">#</a> 4、ios 设置 input 按钮样式会被默认样式覆盖</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input,\ntextarea</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_5、ios-系统中-中文输入法输入英文时-字母之间可能会出现一个六分之一空格"><a class="header-anchor" href="#_5、ios-系统中-中文输入法输入英文时-字母之间可能会出现一个六分之一空格">#</a> 5、iOS 系统中，中文输入法输入英文时，字母之间可能会出现一个六分之一空格</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\u2006</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_6、移动端点透问题"><a class="header-anchor" href="#_6、移动端点透问题">#</a> 6、移动端点透问题</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>touchstart 早于 touchend 早于 click。 亦即 click 的触发是有延迟的，这个时间大概在 300ms 左右，也就是说我们 tap 触发之后蒙层隐藏， 此时 click 还没有触发，300ms 之后由于蒙层隐藏，我们的 click 触发到了下面的 a 链接上。解决：</p><ul><li>1、尽量都使用 touch 事件来替换 click 事件。例如用 touchend 事件(推荐)。</li><li>2、用 fastclick https://github.com/ftlabs/fastclick</li><li>3、用 preventDefault 阻止 a 标签的 click</li></ul></div><h3 id="_7、android-下取消输入语音按钮"><a class="header-anchor" href="#_7、android-下取消输入语音按钮">#</a> 7、Android 下取消输入语音按钮</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input::-webkit-input-speech-button</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_8、ios-android-监听键盘弹起事件"><a class="header-anchor" href="#_8、ios-android-监听键盘弹起事件">#</a> 8、ios Android 监听键盘弹起事件</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>visualViewport<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span>visualViewport<span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  window<span class="token punctuation">.</span>visualViewport<span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_9、常用的-meta-属性设置"><a class="header-anchor" href="#_9、常用的-meta-属性设置">#</a> 9、常用的 meta 属性设置</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen-orientation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>portrait<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> // Android 禁止屏幕旋转\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full-screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> // 全屏显示\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>browsermode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> //\nUC应用模式，使用application后，页面默认全屏，禁止长按菜单，禁止收拾，标准排版，以及强制图片显示。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_10、清除输入框内阴影"><a class="header-anchor" href="#_10、清除输入框内阴影">#</a> 10、清除输入框内阴影</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_11、如何禁止保存或拷贝图像"><a class="header-anchor" href="#_11、如何禁止保存或拷贝图像">#</a> 11、如何禁止保存或拷贝图像</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">-webkit-touch-callout</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_12、设置字体禁止缩放"><a class="header-anchor" href="#_12、设置字体禁止缩放">#</a> 12、设置字体禁止缩放</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token property">text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token property">-moz-text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_13、ios-键盘收起时页面没用回落-底部会留白"><a class="header-anchor" href="#_13、ios-键盘收起时页面没用回落-底部会留白">#</a> 13、IOS 键盘收起时页面没用回落，底部会留白</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;focusout&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//input输入框弹起软键盘的解决方案。</span>\n<span class="token keyword">var</span> bfscrolltop <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>\n    <span class="token comment">//console.log(document.body.scrollTop);</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> bfscrolltop<span class="token punctuation">;</span>\n    <span class="token comment">//console.log(document.body.scrollTop);</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_14、ios-下-fixed-失效的原因"><a class="header-anchor" href="#_14、ios-下-fixed-失效的原因">#</a> 14、IOS 下 fixed 失效的原因</h3><p>软键盘唤起后，页面的 fixed 元素将失效，变成了 absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。</p><p>解决方法: 不让页面滚动，而是让主体部分自己滚动,主体部分高度设为 100%，overflow:scroll</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>warper<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>main<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fix-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.warper</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>\n  <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span> <span class="token comment">/* 解决ios滑动不流畅问题 */</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.fix-bottom</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',31),t={render:function(n,s){return p}}}}]);