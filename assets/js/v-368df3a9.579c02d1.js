(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[8852],{3646:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-368df3a9",path:"/pages/fe-interview/codeOutput/",title:"",lang:"zh-CN",frontmatter:{home:!1,sidebar:!1},excerpt:"",headers:[{level:3,title:"代码输出",slug:"代码输出",children:[]},{level:3,title:"promise.then 的第二个参数写了， promise.catch 就不会执行",slug:"promise-then-的第二个参数写了-promise-catch-就不会执行",children:[]},{level:3,title:"async 函数中 await 的 new Promise 要是没有返回值的话则不执行后面的内容",slug:"async-函数中-await-的-new-promise-要是没有返回值的话则不执行后面的内容",children:[]},{level:3,title:".then 函数中的参数期待的是函数，如果不是函数的话会发生透传",slug:"then-函数中的参数期待的是函数-如果不是函数的话会发生透传",children:[]},{level:3,title:".then 返回任意一个非 promise 的值都会被包裹成 promise 对象",slug:"then-返回任意一个非-promise-的值都会被包裹成-promise-对象",children:[]},{level:3,title:"await 里的函数是同步函数则直接执行不会进入微任务队列",slug:"await-里的函数是同步函数则直接执行不会进入微任务队列",children:[]},{level:3,title:"await 后面的 Promise 没有返回值，也就是它的状态始终是 pending 状态，后面的代码不会执行",slug:"await-后面的-promise-没有返回值-也就是它的状态始终是-pending-状态-后面的代码不会执行",children:[]},{level:3,title:"async 函数包裹一个普通函数返回值，会返回 promise.resolve(返回值)的 promise, 如果 async 包裹的函数没有返回值，async 函数.then 会返回一个 promise",slug:"async-函数包裹一个普通函数返回值-会返回-promise-resolve-返回值-的-promise-如果-async-包裹的函数没有返回值-async-函数-then-会返回一个-promise",children:[]},{level:3,title:"race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，race、all、allSettle 执行时其他的异步方法代码仍在执行，不过执行结果会被抛弃。",slug:"race-的作用也是接收一组异步任务-然后并行执行异步任务-只保留取第一个执行完成的异步操作的结果-race、all、allsettle-执行时其他的异步方法代码仍在执行-不过执行结果会被抛弃。",children:[]},{level:3,title:"finally 是新一层的微任务队列执行",slug:"finally-是新一层的微任务队列执行",children:[]},{level:3,title:"function 的 length，就是第一个具有默认值之前的参数个数",slug:"function-的-length-就是第一个具有默认值之前的参数个数",children:[]},{level:3,title:"promise return 一个 pending 的 promise 可以中断后续流程",slug:"promise-return-一个-pending-的-promise-可以中断后续流程",children:[]},{level:3,title:"实现 Promise.all 失败之后依然可以往下执行",slug:"实现-promise-all-失败之后依然可以往下执行",children:[]},{level:3,title:"以下输出",slug:"以下输出",children:[]}],filePathRelative:"pages/fe-interview/codeOutput/README.md",git:{updatedTime:1726747499e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:9}]}}},2774:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h3 id="代码输出"><a class="header-anchor" href="#代码输出">#</a> 代码输出</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// undefined</span>\n<span class="token comment">// 代码预解析时，会将var b进行变量提升，此时b没有被赋值(b=undefined) (这里有人会说这里明明有个函数表达式呀，为什么没有进入变量提升，因为IIFE自带有词法作用域(我们常理解得作用域))</span>\n<span class="token comment">// 碰到了b = 20，会顺着作用域链寻找是否存在b，发现IIFE作用域中存在b，将IIFE作用域中的b赋值为20(b=20)(因为函数表达式特性，标识符无法被修改，所以这里执行失败)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="promise-then-的第二个参数写了-promise-catch-就不会执行"><a class="header-anchor" href="#promise-then-的第二个参数写了-promise-catch-就不会执行">#</a> promise.then 的第二个参数写了， promise.catch 就不会执行</h3><h3 id="async-函数中-await-的-new-promise-要是没有返回值的话则不执行后面的内容"><a class="header-anchor" href="#async-函数中-await-的-new-promise-要是没有返回值的话则不执行后面的内容">#</a> async 函数中 await 的 new Promise 要是没有返回值的话则不执行后面的内容</h3><h3 id="then-函数中的参数期待的是函数-如果不是函数的话会发生透传"><a class="header-anchor" href="#then-函数中的参数期待的是函数-如果不是函数的话会发生透传">#</a> .then 函数中的参数期待的是函数，如果不是函数的话会发生透传</h3><h3 id="then-返回任意一个非-promise-的值都会被包裹成-promise-对象"><a class="header-anchor" href="#then-返回任意一个非-promise-的值都会被包裹成-promise-对象">#</a> .then 返回任意一个非 promise 的值都会被包裹成 promise 对象</h3><h3 id="await-里的函数是同步函数则直接执行不会进入微任务队列"><a class="header-anchor" href="#await-里的函数是同步函数则直接执行不会进入微任务队列">#</a> await 里的函数是同步函数则直接执行不会进入微任务队列</h3><h3 id="await-后面的-promise-没有返回值-也就是它的状态始终是-pending-状态-后面的代码不会执行"><a class="header-anchor" href="#await-后面的-promise-没有返回值-也就是它的状态始终是-pending-状态-后面的代码不会执行">#</a> await 后面的 Promise 没有返回值，也就是它的状态始终是 pending 状态，后面的代码不会执行</h3><h3 id="async-函数包裹一个普通函数返回值-会返回-promise-resolve-返回值-的-promise-如果-async-包裹的函数没有返回值-async-函数-then-会返回一个-promise"><a class="header-anchor" href="#async-函数包裹一个普通函数返回值-会返回-promise-resolve-返回值-的-promise-如果-async-包裹的函数没有返回值-async-函数-then-会返回一个-promise">#</a> async 函数包裹一个普通函数返回值，会返回 promise.resolve(返回值)的 promise, 如果 async 包裹的函数没有返回值，async 函数.then 会返回一个 promise</h3><h3 id="race-的作用也是接收一组异步任务-然后并行执行异步任务-只保留取第一个执行完成的异步操作的结果-race、all、allsettle-执行时其他的异步方法代码仍在执行-不过执行结果会被抛弃。"><a class="header-anchor" href="#race-的作用也是接收一组异步任务-然后并行执行异步任务-只保留取第一个执行完成的异步操作的结果-race、all、allsettle-执行时其他的异步方法代码仍在执行-不过执行结果会被抛弃。">#</a> race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，race、all、allSettle 执行时其他的异步方法代码仍在执行，不过执行结果会被抛弃。</h3><h3 id="finally-是新一层的微任务队列执行"><a class="header-anchor" href="#finally-是新一层的微任务队列执行">#</a> finally 是新一层的微任务队列执行</h3><h3 id="function-的-length-就是第一个具有默认值之前的参数个数"><a class="header-anchor" href="#function-的-length-就是第一个具有默认值之前的参数个数">#</a> function 的 length，就是第一个具有默认值之前的参数个数</h3><h3 id="promise-return-一个-pending-的-promise-可以中断后续流程"><a class="header-anchor" href="#promise-return-一个-pending-的-promise-可以中断后续流程">#</a> promise return 一个 pending 的 promise 可以中断后续流程</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;我是finally2返回的值&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n    <span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">function</span> <span class="token function">fail1</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;fail1&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fail2</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;fail2&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fail2 Error: error!!!</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="实现-promise-all-失败之后依然可以往下执行"><a class="header-anchor" href="#实现-promise-all-失败之后依然可以往下执行">#</a> 实现 Promise.all 失败之后依然可以往下执行</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p11 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> p22 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> p33 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>p11<span class="token punctuation">,</span> p22<span class="token punctuation">,</span> p33<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> all <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>\n  arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;错误信息&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nall\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;res:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;err:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;这个不会执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="以下输出"><a class="header-anchor" href="#以下输出">#</a> 以下输出</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// example 1</span>\n<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c</span>\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>\n<span class="token comment">// example 2</span>\n<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b</span>\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>\n<span class="token comment">// example 3</span>\n<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token operator">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token operator">:</span><span class="token string">&#39;456&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Lydia&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token punctuation">[</span>person<span class="token punctuation">]</span><span class="token punctuation">;</span>\nperson <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>members<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [{ name: &quot;Lydia&quot; }]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',19),t={render:function(n,s){return p}}}}]);