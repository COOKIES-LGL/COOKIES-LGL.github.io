(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[8082],{5901:(e,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>n});const n={key:"v-36f477e2",path:"/pages/fe-sre/chrome/",title:"",lang:"zh-CN",frontmatter:{home:!1},excerpt:"",headers:[{level:2,title:"chrome 模糊知识汇总",slug:"chrome-模糊知识汇总",children:[{level:3,title:"浏览器一轮循环流程",slug:"浏览器一轮循环流程",children:[]},{level:3,title:"sessionStorage 不在多个窗口或标签页之间共享数据",slug:"sessionstorage-不在多个窗口或标签页之间共享数据",children:[]}]}],filePathRelative:"pages/fe-sre/chrome/README.md",git:{updatedTime:1726747499e3,contributors:[{name:"COOKIES-LGL",email:"1344714332@qq.com",commits:6}]}}},2761:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var n=a(6252);const r=(0,n.uE)('<h2 id="chrome-模糊知识汇总"><a class="header-anchor" href="#chrome-模糊知识汇总">#</a> chrome 模糊知识汇总</h2><h3 id="浏览器一轮循环流程"><a class="header-anchor" href="#浏览器一轮循环流程">#</a> 浏览器一轮循环流程</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一个 task(宏任务) -- 这个开始时的宏任务也叫同步任务<br> 队列中全部 job(微任务) --<br> requestAnimationFrame --<br> 浏览器重排/重绘 --<br> requestIdleCallback -- task(宏任务)</p></div>',3),o={href:"https://www.zhihu.com/tardis/bd/art/582586289",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("彻底搞懂 EventLoop 事件循环机制(浏览器和 Node EventLoop)"),t=(0,n.uE)('<h3 id="sessionstorage-不在多个窗口或标签页之间共享数据"><a class="header-anchor" href="#sessionstorage-不在多个窗口或标签页之间共享数据">#</a> sessionStorage 不在多个窗口或标签页之间共享数据</h3><p>sessionStorage 不能在多个窗口或标签页之间共享数据，但是当通过 window.open 或链接打开新页面时(不能是新窗口)，新页面会复制前一页的 sessionStorage，window.open 新打开的页面新增的 sessionStorage 值，在父页面是无法访问的。localStorage 能够共享数据。</p><ul><li>windows.open(, ‘_blank’): A 跳到 B，B 拷贝 A 的 sessionStorage，互不影响。</li><li>windows.open(, ‘_self’): A 刷新到 B，A 和 B 共用 sessionStorage，肯定影响。</li><li>link（‘_blank’）: A 跳到 B，B 不拷贝 A 的 sessionStorage，互不影响。</li><li>link（‘_self’）: A 刷新到 B，A 和 B 共用 sessionStorage，肯定影响。</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chrome://version/\n<span class="token comment"># 用于查看可执行文件路径和版本信息</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',4),i={render:function(e,s){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,(0,n.Wm)("p",null,[(0,n.Wm)("a",o,[l,(0,n.Wm)(a)])]),t],64)}}}}]);