<!DOCTYPE html>
<!-- HTML5声明，虽然这个网站其实是用XHTML写的... -->
<html lang="zh-cn">
<head>
<meta charset="utf-8" />
<meta name="description" content="O7I2的个人小站, O7I2的小站" />
<meta name="keywords" content="O7I2, XP-Play, 博客, 纯属娱乐, ">
<!-- user-scalable=no | 不可缩放
	 maximum-scale=1.0 | 最大缩放
	 minimum-scale=1.0 | 最小缩放
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>主页 | O7I2的个人小站</title>
<!-- 加载 CSS -->
<link rel="stylesheet" type="text/css" href="/assets/css/main.css" />
<link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
<!-- 百度统计脚本 -->
<script src="/assets/js/hm.js"></script>
<!-- 简单的写入/读取cookie的js -->
<script src="/assets/js/basic.js"></script>
</head>
<body>
<!-- Header -->
<div id="header_wrap" class="outer">
<header class="inner">
<a id="me" href="https://space.bilibili.com/393815403" target="_blank" class="sl">哔哩哔哩</a>
<h1 id="page_title">主页</h1>
<h2 id="page_subtitle">O7I2的小站</h2>
</header>
</div>
<!-- Body -->
<div id="main_content_wrap" class="outer">
<section id="main_content" class="inner">
<!-- 一些提示 -->
<div id="warnings">
<!-- 低于IE11提示 -->
<!--[if lte IE 10]>
<div id="ie-must-go-die" class="warnbox" style="display: none;">
<strong>您正在IE的世界中</strong><br />
“姐姐，我们也曾经在这个世界中绽放光彩呢”，33说道。<br />
“可是啊，世界永远在变幻，正因如此，未来才变得绚烂。我们也不能裹足不前呢。”<br />
“嗯。”33点点头，眼中流露出了一丝希冀的神采。<br />
推荐您更新至最新的Internet Explorer 11<br />或者下载
<a href="//firefox.com" target="_blank">Firefox</a>
<a href="//google.cn/chrome" target="_blank">Chrome</a>
<a href="//www.microsoft.com/edge" target="_blank">Edge</a>
等现代浏览器后再次访问本页面</div>
<[end if]-->
<!-- 未加载JavaScript提示 -->
<div id="nojs" class="warnbox">
<strong>未启用JavaScript</strong><br />
或JavaScript无法正确运行 - 这可能导致部分元素无法正确显示；某些功能无法使用</div>
<script>
if (window.ActiveXObject != undefined && window.navigator.userAgent.indexOf("MSIE") != -1) {document.getElementById('ie-must-go-die').style.display = ""};
document.getElementById('nojs').style.display = "none";
</script>
</div>
<h1>O7I2的小站</h1>
<p>你好，<span id="username" ondblclick="this.innerHTML=username('reset')" title="双击以修改">Username</span> 你的IP是<span id="ip" onmouseenter="this.innerHTML=ip;" onmouseout="this.innerHTML=ip_2">IPv4 Address</span> 位置是<span id="location">Country</span>，欢迎来到O7I2的小站</p> 
<blockquote>
本站最近使用了<a href="https://jekyllrb.com/" target="_blank">Jekyll(官网,英文)</a>(<a href="https://jekyllcn.com" target="_blank">中文</a>)重写，最近才发现有Jekyll这种东西，而且Github Pages也支持<br />
</blockquote>
<p id="browserinfodiv" style="display: none;">
你正在使用的浏览器: <span id="browser">???</span><br />
UserAgent: "<span id="useragent">???</span>"</p>
<!-- 引入判断浏览器UA的jio本 -->
<script src="/assets/js/browsers.js"></script>
<!-- 引入修改Subtitle的js -->
<script>
function changeTitle(num) {
var title_id = document.getElementById('page_subtitle');
var random;
	if (num == 1) {random = "XP-Play的闲聊网站"};
	if (num == 2) {random = "XP-Play的 Github Pages"};
	if (num == 3) {random = "View on <a href=\"https://space.bilibili.com/393815403\">哔哩哔哩</a>!"};
	if (num == 4) {random = "XP-Play的静态页面"};
	if (num == 5) {random = "When you could see this, that means you enabled the JavaScript"};
		var day, day_info;
	switch (new Date().getDay()) {
	case 0:
		day = "周日";
		day_info = "今天是双休日的最后一天了";
		break;
	case 1:
		day = "周一";
		day_info = "今天开始工作/学习了哦";
		break;
	case 2:
		day = "周二";
		day_info = "继续努力！加油，奥里给！";
		break;
	case 3:
		day = "周三";
		day_info = "我们遇到什么困难，都不要怕，微笑着面对他......";
		break;
	case 4:
		day = "周四";
		day_info = "明天就是周五了，再坚持一下";
		break;
	case 5:
		day = "周五";
		day_info = "明天就是双休日了哦";
		break;
	case  6:
		day = "周六";
		day_info = "(雾)";
	}
title_id.innerHTML = "今天是" + day + "，" + day_info + "<br />" + random;
}
changeTitle(Math.floor(Math.random() * 6 ))
</script>
<script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
document.getElementById('browser').innerHTML = getBrowser();
document.getElementById('useragent').innerHTML = window.navigator.userAgent;
document.getElementById('browserinfodiv').style.display = "";
</script>
<script>
var ip = returnCitySN["cip"];
var ip_2 = ip.slice(0,ip.slice(0,ip.lastIndexOf(".")).lastIndexOf("."))+ip.slice(ip.slice(0,ip.slice(0,ip.lastIndexOf(".")).lastIndexOf(".")).length,ip.length).replace(/[0-9]/g,"*");
document.getElementById('ip').innerHTML = ip_2;
document.getElementById('username').innerHTML = username();
document.getElementById('location').innerHTML = returnCitySN["cname"] + "(" + returnCitySN["cid"] + ")";
</script>

<h2>页面:</h2>
<div id="pages" class="sl">
<p id="banner"></p>
<script>
var banner_num = 1,
	banner_max = 5;
function banner_next() {
	window.banner_num = banner_num + 1;
	if (banner_num == banner_max + 1) {window.banner_num = 1};
	changeBanner(banner_num);
}
function changeBanner(num) {
	var banner_id = document.getElementById('banner'),
		header_text = "<span style=\"font-size: 30px; text-align: center;\"><strong><a href=\"javascript:banner_next()\">推荐</a>: <a id=\"banner_link\" href=\"",
		inner = "\">["
		footer_text = "]</a></strong></span>";
	switch (num) {
		case 1:
			banner_id.innerHTML = header_text + "tool/randomstring/" + inner + "随机数生成器" + footer_text;
			break;
		case 2:
			banner_id.innerHTML = header_text + "minesweeper/" + inner + "扫雷" + footer_text;
			break;
		case 3:
			banner_id.innerHTML = header_text + "tool/browser" + inner + "浏览器信息" + footer_text;
			break;
		case 4:
			banner_id.innerHTML = header_text + "tool/qrcode" + inner + "二维码生成器" + footer_text;
			break;
		case 5:
			banner_id.innerHTML = header_text + "tool/cps" + inner + "CPS测试器" + footer_text;
			break;
	}
}
changeBanner(Math.floor(Math.random() * banner_max + 1 ))
</script>
<strong>随机字符生成器:</strong> <a href="tool/randomstr">链接</a><br />
<strong>CPS测试器:</strong> <a href="tool/cps">链接</a><br />
<strong>查看浏览器信息:</strong> <a href="tool/browser">链接</a><br />
<strong>二维码生成器:</strong> <a href="tool/qrcode">链接</a><br />
<strong>Minecraft 服务器:</strong> <a href="mcs/">链接</a><br />
<strong>Minesweeper(扫雷):</strong> <a href="minesweeper/">链接</a><br />
<strong>留言板:</strong> <a href="message">链接</a><br />
<strong>捐赠(送钱给我:</strong> <a href="donate">链接</a><br />
<strong>关于:</strong> <a href="about">链接</a><br />
</div>

<div id="bingpic">
<h3>必应每日壁纸</h3>
<p>图片版权请前往<a href="//cn.bing.com" target="_blank">Bing</a>官网查看</p>
<a href="https://open.saintic.com/api/bingPic/" target="_blank">
<img src="https://open.saintic.com/api/bingPic/" alt="必应每日壁纸" title="今日壁纸" /></a>
<p>必应官方API: <a href="https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN" target="_blank">https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN</a><br />
第三方API: <br />
<a href="https://open.saintic.com/api/bingPic/" target="_blank">https://open.saintic.com/api/bingPic/</a><br />
<a href="https://bing.ioliu.cn/" target="_blank">必应壁纸</a> By <a href="https://ioliu.cn/" target="_blank">云淡风轻</a></p>
<p>
<div id="丢人时刻" style="display: none;">由于浏览器不允许跨域XMLHttpRequest(其实就是我菜，不会弄)，原来打算用的AJAX代码
<pre>
&lt;img id="bingImg"src=""&gt;&lt;/img&gt;
&lt;!-- AJAX --&gt;
&lt;script src="/assets/js/ajaxGET.js"&lt;/script&gt;
&lt;script&gt;
AJAXGET("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN");
document.getElementById('bingImg').src = ajaxget;
&lt;/script&gt;
</pre>
<blockquote>AJAX脚本: <a href="/assets/js/ajaxGET.js" target="_blank">/assets/js/ajaxGET.js</a></blockquote></div>
</div>

</section>
</div>
<!-- Footer -->
<div id="footer_wrap" class="outer">
<!-- 这里的类名"sl"代表这是一个安全链接(不会出现图标) -->
<footer class="inner sl">
<p></p>
<!-- SITE MAP -->
<p id="sitemap">
| 站点地图 | <a href="/">主页</a> | <a href="/p/files/">文件</a> | <a href="/p/server/">MC服务器</a> | <a href="/p/donate">捐赠</a> | <a href="/p/about">关于</a> |
</p>
<!-- ABOUT -->
<p id="about">
| By <a href="https://o7i2.github.io/post/about" target="_blank">O7I2</a> | <a href="https://space.bilibili.com/393815403" target="_blank">B站</a> | <a href="mailto:jerryo7i2@outlook.com" target="_blank">邮件 </a> | <a href="https://weibo.com/O7I2" target="_blank">微博</a> | <a href="https://shang.qq.com/wpa/qunwpa?idkey=6ce16eb20ec3c0cbff9e481d830fdfe8015eb2ac16463b31ce4b859f152c769c"  target="_blank">Q群</a> | <a href="http://wpa.qq.com/msgrd?v=3&uin=778570190&site=qq&menu=yes" target="_blank">QQ</a> | <br />
<!-- Info -->
| 部分元素(css,js,文字,图片)来自Internet |<br />| Hosted on <a href="https://pages.github.com" target="_blank">Github Pages</a> | Powered by <a href="https://jekyllrb.com/" target="_blank">Jek</a><a href="https://jekyllcn.com/" target="_blank">yll</a> |
</p>
</footer>
</div>
</body>
</html>