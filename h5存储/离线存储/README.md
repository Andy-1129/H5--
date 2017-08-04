#定义
H5的html标签中新增了manifest属性，它允许指定要缓存的manifest文件,(注：manifest文件时以.manifest后缀结尾的 )这样就把html和manifest连接起来了。
## 格式
CACHE MANIFEST
#version 1.1
CACHE: http://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css http://cdn.bootcss.com/jquery/3.2.1/jquery.min.js http://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/js/bootstrap.js
NETWORK:
*
FALLBACK:
404.html
# 解释
第一行的CACHE MANIFEST是固定格式，必须写在前面，表明这是一个
离线缓存文件。基本格式分为三段，即CACHE、NETWORK以及FALLBACK
。
1、#号开头的是注释，通常写明版本号或时间戳，这在manifest更新时很有用， 它用来在缓存文件更新时修改manifest。
2、CACHE（必须）,manifest的核心，即需要离线缓存的文件路径。可以是 绝对路径也可是相对路径甚至是SDN线上地址。这里面的文件在有线状态第一次加载时会缓存到本地。
3、NETWORK（可选），表示绕过缓存的文件，即需要联网使用的文件。通常设置为*，表明除了CACHE中的文件其它的均要联网使用。
4、FALLBACK（可选），备胎选项，即当资源无法访问时要替代的页面。注意：这里必须使用相对路径且备胎文件要与manifest文件同域
## 更新
1.更新manifest文件
2.清除浏览缓存
3.通过js控制
前面两种很好理解，清除浏览器缓存即将缓存中的文件清除，下一次打开app时会重新渲染；而在manifest中新增或删除文件也会更新缓存，这时#中的版本就会用来更新缓存。
浏览器提供了一个window.applicationCache方法来手动更新离线缓存，通过以下代码可将源码与manifest连接，一旦源码改变则会触发新的缓存。
# 更新代码
window.applicationCache.addEventListener('updateready', function(e) { if (window.applicationCache.status == window.applicationCache.UPDATEREADY) { window.applicationCache .swapCache(); if (confirm('A new version of this site is available. Load it?')) { window.location.reload(); } } else { //不更新 } }, false);
