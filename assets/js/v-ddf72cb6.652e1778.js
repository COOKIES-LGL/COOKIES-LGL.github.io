(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[4607],{607:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-ddf72cb6",path:"/pages/javascript/es6/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"Symbol 使用技巧",slug:"symbol-使用技巧",children:[]},{level:3,title:"flatMap",slug:"flatmap",children:[]},{level:3,title:"WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用",slug:"weakmap-弱引用的只是键名-而不是键值。键值依然是正常引用",children:[]},{level:3,title:"WeakSet 与 Set 的差异",slug:"weakset-与-set-的差异",children:[]},{level:3,title:"WeakMap 与 Map 的差异",slug:"weakmap-与-map-的差异",children:[]},{level:3,title:"输出结果",slug:"输出结果",children:[]},{level:3,title:"new.target",slug:"new-target",children:[]},{level:3,title:"for await 异步迭代器",slug:"for-await-异步迭代器",children:[]},{level:3,title:"FileReader",slug:"filereader",children:[]},{level:3,title:"迭代对象获取迭代器",slug:"迭代对象获取迭代器",children:[]},{level:3,title:"Promise.race 特殊特性",slug:"promise-race-特殊特性",children:[]},{level:3,title:"class 类无法遍历它实例原型链上的属性和方法",slug:"class-类无法遍历它实例原型链上的属性和方法",children:[]},{level:3,title:"class 类相关",slug:"class-类相关",children:[]}],filePathRelative:"pages/javascript/es6/README.md",git:{updatedTime:172681525e4,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:13},{name:"guilin.li",email:"1344714332@qq.com",commits:2}]}}},7988:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h3 id="symbol-使用技巧"><a class="header-anchor" href="#symbol-使用技巧">#</a> Symbol 使用技巧</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>symbol 作为对象的属性无法通过.运算符获取,需要使用[symbol] 全局共享 Symbol</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\na <span class="token operator">===</span> b<span class="token punctuation">;</span> <span class="token comment">// true</span>\nSymbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以通过变量名查询该变量名对应的Symbol是否在全局注册表中</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>我们还可以通过更改内置 Symbol 值对应的方法来达到更改外部方法作用的效果。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">demo</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> item <span class="token operator">===</span> <span class="token string">&quot;恶霸&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token string">&quot;恶霸&quot;</span> <span class="token keyword">instanceof</span> <span class="token class-name">demo</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Symbol.hasInstance 对应的外部方法是 instanceof，这个大家熟悉吧，经常用于判断类型。而在上面的代码片段中，我创建了一个 demo 类，并重写了 Symbol.hasInstance，所以其对应的 instanceof 行为也会发生改变，其内部的机制是这样的：当我们调用 instanceof 方法的时候，内部对应调用 Symbol.hasInstance 对应的方法即 return item === &quot;恶霸&quot;</p></div><h3 id="flatmap"><a class="header-anchor" href="#flatmap">#</a> flatMap</h3><p>只能增加数组元素不能减少</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Expected output: Array [1, 2, 2, 1]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="weakmap-弱引用的只是键名-而不是键值。键值依然是正常引用"><a class="header-anchor" href="#weakmap-弱引用的只是键名-而不是键值。键值依然是正常引用">#</a> WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> wm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nwm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nwm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Object {foo: 1}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="weakset-与-set-的差异"><a class="header-anchor" href="#weakset-与-set-的差异">#</a> WeakSet 与 Set 的差异</h3><ul><li>对于 WeakSet 实例，若调用了 add()方法时传入了非对象的参数，则会抛出错误。如果在 has()或者 delete()方法中传入了非对象的参数则会返回 false；</li><li>Weak Set 不可迭代，因此不能用于 for-of 循环；</li><li>Weak Set 无法暴露出任何迭代器（例如 keys() 与 values() 方法） ，因此没有任何编程手段可用于判断 Weak Set 的内容；</li><li>Weak Set 没有 forEach()方法；</li><li>Weak Set 没有 size 属性；</li></ul><h3 id="weakmap-与-map-的差异"><a class="header-anchor" href="#weakmap-与-map-的差异">#</a> WeakMap 与 Map 的差异</h3><ul><li>WeakMap 的键必须是对象，值可以是任意类型</li><li>可以使用 has()方法来检查 Weak Map 中是否存在某一个键值对，使用 delete()方法可以删除一个键值对。</li><li>clear() 方法不存在，</li><li>Weak Map 只为它们的内容提供了很小的可见度，因此你不能使用 forEach() 方法、size 属性或 clear() 方法来管理其中的项</li><li>这是因为没必要对键进行枚举, 并且枚举 Weak Map 也是不可能的</li></ul><h3 id="输出结果"><a class="header-anchor" href="#输出结果">#</a> 输出结果</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>核心就是会比正常的 return 一个非 Promise 的值时，多两个微任务.then().then()</p><h3 id="new-target"><a class="header-anchor" href="#new-target">#</a> new.target</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的</span>\n<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;Foo() must be called with new&quot;</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Foo instantiated with new&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throws &quot;Foo() must be called with new&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;Foo instantiated with new&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="for-await-异步迭代器"><a class="header-anchor" href="#for-await-异步迭代器">#</a> for await 异步迭代器</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">myAsyncIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> <span class="token function">myAsyncIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="filereader"><a class="header-anchor" href="#filereader">#</a> FileReader</h3><p>如果想要读取 Blob 或者文件对象并转化为其他格式的数据，可以借助 FileReader 对象的 API 进行操作</p><ul><li>FileReader.readAsText(Blob)：将 Blob 转化为文本字符串</li><li>FileReader.readAsArrayBuffer(Blob)：将 Blob 转为 ArrayBuffer 格式数据</li><li>FileReader.readAsDataURL(): 将 Blob 转化为 Base64 格式的 Data URL</li></ul><h3 id="迭代对象获取迭代器"><a class="header-anchor" href="#迭代对象获取迭代器">#</a> 迭代对象获取迭代器</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> iterator <span class="token operator">=</span> iterable<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取迭代器</span>\n<span class="token keyword">const</span> value <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取元素内容/每次调用获取下一个</span>\nvalue<span class="token punctuation">.</span>done<span class="token punctuation">;</span> <span class="token comment">// bool 是否迭代完毕</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="promise-race-特殊特性"><a class="header-anchor" href="#promise-race-特殊特性">#</a> Promise.race 特殊特性</h3><p>当使用空的可迭代对象，调用 Promise.race API 时，将会返回一个永远处于 pending 状态的 Promise 对象</p><h3 id="class-类无法遍历它实例原型链上的属性和方法"><a class="header-anchor" href="#class-类无法遍历它实例原型链上的属性和方法">#</a> class 类无法遍历它实例原型链上的属性和方法</h3><h3 id="class-类相关"><a class="header-anchor" href="#class-类相关">#</a> class 类相关</h3><h4 id="抽象类"><a class="header-anchor" href="#抽象类">#</a> 抽象类</h4><p><strong>*特点</strong></p><ul><li>抽象类不能被直接实例化，即不能使用 new 关键字创建抽象类的实例。抽象类主要用于作为其他类的基类，提供通用的属性和方法的框架，但不能独立存在。</li><li>抽象类中可以包含抽象方法，这些方法没有具体的实现，而是要求子类必须提供具体的实现。抽象方法使用 abstract 关键字标记。</li><li>抽象类可以被其他类继承，子类必须实现抽象类中的所有抽象方法，否则子类也必须声明为抽象类。</li></ul><h4 id="非抽象类"><a class="header-anchor" href="#非抽象类">#</a> 非抽象类</h4><p><strong>特点</strong></p><ul><li>可以被实例化：非抽象类可以被直接实例化，使用 new 关键字可以创建非抽象类的对象。</li><li>具体方法：非抽象类中可以包含具体的方法实现，而不仅限于抽象方法。这些方法可以被继承或直接调用。</li><li>继承：非抽象类可以被其他类继承，子类可以选择性地覆盖或扩展父类中的方法。</li></ul><h4 id="非抽象类继承非抽象类"><a class="header-anchor" href="#非抽象类继承非抽象类">#</a> 非抽象类继承非抽象类</h4><p>当一个非抽象类继承另一个非抽象类时，子类会继承父类的属性和方法，并且子类可以选择性地覆盖或扩展父类的方法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Some generic sound&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 子类继承父类</span>\n<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以覆盖父类的方法</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Woof! Woof!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">greetOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以扩展父类的方法</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, owner! My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="非抽象类继承抽象类"><a class="header-anchor" href="#非抽象类继承抽象类">#</a> 非抽象类继承抽象类</h4><p>当一个非抽象类继承抽象类时，子类必须提供抽象类中定义的抽象方法的具体实现。抽象类中的抽象方法是没有具体实现的方法，而是由子类去实现。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 抽象类</span>\nabstract <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>\n    abstract <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 抽象方法</span>\n    <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Calculating area...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 非抽象类继承抽象类</span>\n<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>\n    radius<span class="token operator">:</span> number<span class="token punctuation">;</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">radius<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的构造函数</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 实现抽象方法</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 可以扩展父类的方法</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Area</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="抽象类是继承抽象类"><a class="header-anchor" href="#抽象类是继承抽象类">#</a> 抽象类是继承抽象类</h4><p>抽象类是可以继承抽象类的。这种继承关系允许在类的层次结构中建立一种更高层次的抽象，并要求子类实现更具体的行为。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 抽象类</span>\nabstract <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n    abstract <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 抽象方法</span>\n    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Animal is moving...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 另一个抽象类继承抽象类</span>\nabstract <span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n    abstract <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 抽象方法</span>\n    <span class="token function">chirp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Chirp chirp!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 具体的子类实现抽象类中的抽象方法</span>\n<span class="token keyword">class</span> <span class="token class-name">Sparrow</span> <span class="token keyword">extends</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>\n    <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Sparrow is making sound&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Sparrow is flying&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="接口继承接口"><a class="header-anchor" href="#接口继承接口">#</a> 接口继承接口</h4><p>接口可以通过 extends 关键字来继承其他接口，从而形成接口继承接口的关系。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 定义一个基础接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>\n  color<span class="token operator">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 定义继承自 Shape 接口的新接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>\n  sideLength<span class="token operator">:</span> number<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 使用新接口</span>\n<span class="token keyword">let</span> square<span class="token operator">:</span> Square <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>\n  sideLength<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="接口继承类"><a class="header-anchor" href="#接口继承类">#</a> 接口继承类</h4><p>接口是不能直接继承类的。类可以作为接口的一部分，从而实现接口继承类,这意味着你可以定义一个接口，它包含了类的实例部分的成员，然后其他类可以实现这个接口。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>abstract <span class="token keyword">class</span> <span class="token class-name">AbstractParent</span> <span class="token punctuation">{</span>\n    abstract <span class="token function">abstractFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string\n<span class="token punctuation">}</span>\n <span class="token comment">// 接口继承类</span>\n<span class="token keyword">interface</span> <span class="token class-name">IExample</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractParent</span><span class="token punctuation">{</span>\n    name<span class="token operator">:</span>string\n    age<span class="token operator">:</span>number\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>::: tips 需要注意的是，这种方式强调的是类的实例结构，而不是类的构造函数或静态部分。因此，只有类的实例部分的成员才会被包含在接口中。 :::</p><p>::: tips 类是无法直接使用 extends 继承接口的，只能使用 implements 去实现接口 :::</p>',51),t={render:function(n,s){return p}}}}]);