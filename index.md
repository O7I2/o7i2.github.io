---
layout: default
title: 主页
subtitle: CHINQ
---
## 欢迎光临   CHINQ 无名博客

<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>

<link rel="stylesheet" type="text/css" href="css/default.css">

<script src="js/jquery.min.js"></script>
<script src="js/jquery.knob.js"></script>
<script src="js/jquery.throttle.js"></script>
<script src="js/jquery.classycountdown.js"></script>

<link rel="stylesheet" type="text/css" href="css/jquery.classycountdown.css" />

<style>
	.ClassyCountdownDemo { margin:0 auto 30px auto; max-width:800px; width:calc(100%); padding:30px; display:block }
	#countdown2 { background:#FFF }
	#countdown3 { background:rgb(52, 73, 94) }
	#countdown4 { background:#222 }
	#countdown5 { background:#222 }
	#countdown6 { background:#222 }
	#countdown7 { background:#222 }
	#countdown8 { background:#222 }
	#countdown9 { background:#FFF }
	#countdown10 { background:#3498db }
</style>
<!--[if IE]>
<script src="http://libs.baidu.com/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
</head>
<body>

<div id="countdown2" class="ClassyCountdownDemo"></div>
<div id="countdown4" class="ClassyCountdownDemo"></div>
<div id="countdown3" class="ClassyCountdownDemo"></div>
<div id="countdown10" class="ClassyCountdownDemo"></div>
<div id="countdown9" class="ClassyCountdownDemo"></div>
<div id="countdown15" class="ClassyCountdownDemo"></div>
<div id="countdown16" class="ClassyCountdownDemo"></div>
<div id="countdown17" class="ClassyCountdownDemo"></div>
<div id="countdown18" class="ClassyCountdownDemo"></div>
<div id="countdown5" class="ClassyCountdownDemo"></div>
<div id="countdown6" class="ClassyCountdownDemo"></div>
<div id="countdown7" class="ClassyCountdownDemo"></div>
<div id="countdown8" class="ClassyCountdownDemo"></div>
<div id="countdown11" class="ClassyCountdownDemo"></div>
<div id="countdown12" class="ClassyCountdownDemo"></div>
<div id="countdown13" class="ClassyCountdownDemo"></div>
<div id="countdown14" class="ClassyCountdownDemo"></div>

<script type="text/javascript">
$(document).ready(function() {
	$('#countdown15').ClassyCountdown({
		theme: "flat-colors",
		end: $.now() + 10000
	});
	$('#countdown16').ClassyCountdown({
		theme: "flat-colors-wide",
		end: $.now() + 10000
	});
	$('#countdown17').ClassyCountdown({
		theme: "flat-colors-very-wide",
		end: $.now() + 10000
	});
	$('#countdown18').ClassyCountdown({
		theme: "flat-colors-black",
		end: $.now() + 10000
	});
	$('#countdown1').ClassyCountdown({
		theme: "white",
		end: $.now() + 645600
	});
	$('#countdown5').ClassyCountdown({
		theme: "white",
		end: $.now() + 10000
	});
	$('#countdown6').ClassyCountdown({
		theme: "white-wide",
		end: $.now() + 10000
	});
	$('#countdown7').ClassyCountdown({
		theme: "white-very-wide",
		end: $.now() + 10000
	});
	$('#countdown8').ClassyCountdown({
		theme: "white-black",
		end: $.now() + 10000
	});
	$('#countdown11').ClassyCountdown({
		theme: "black",
		style: {
			secondsElement: {
				gauge: {
					fgColor: "#F00"
				}
			}
		},
		end: $.now() + 10000
	});
	$('#countdown12').ClassyCountdown({
		theme: "black-wide",
		labels: false,
		end: $.now() + 10000
	});
	$('#countdown13').ClassyCountdown({
		theme: "black-very-wide",
		labelsOptions: {
			lang: {
				days: 'D',
				hours: 'H',
				minutes: 'M',
				seconds: 'S'
			},
			style: 'font-size:0.5em; text-transform:uppercase;'
		},
		end: $.now() + 10000
	});
	$('#countdown14').ClassyCountdown({
		theme: "black-black",
		labelsOptions: {
			style: 'font-size:0.5em; text-transform:uppercase;'
		},
		end: $.now() + 10000
	});
	$('#countdown4').ClassyCountdown({
		end: $.now() + 10000,
		labels: true,
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .03,
					bgColor: "rgba(255,255,255,0.05)",
					fgColor: "#1abc9c"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
			},
			hours: {
				gauge: {
					thickness: .03,
					bgColor: "rgba(255,255,255,0.05)",
					fgColor: "#2980b9"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
			},
			minutes: {
				gauge: {
					thickness: .03,
					bgColor: "rgba(255,255,255,0.05)",
					fgColor: "#8e44ad"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
			},
			seconds: {
				gauge: {
					thickness: .03,
					bgColor: "rgba(255,255,255,0.05)",
					fgColor: "#f39c12"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
	$('#countdown2').ClassyCountdown({
		end: '1388468325',
		now: '1378441323',
		labels: true,
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#1abc9c"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			hours: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#2980b9"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			minutes: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#8e44ad"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			seconds: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#f39c12"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
	$('#countdown9').ClassyCountdown({
		end: '1388468325',
		now: '1380501323',
		labels: true,
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .05,
					bgColor: "rgba(0,0,0,0)",
					fgColor: "#1abc9c",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			hours: {
				gauge: {
					thickness: .05,
					bgColor: "rgba(0,0,0,0)",
					fgColor: "#2980b9",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			minutes: {
				gauge: {
					thickness: .05,
					bgColor: "rgba(0,0,0,0)",
					fgColor: "#8e44ad",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			seconds: {
				gauge: {
					thickness: .05,
					bgColor: "rgba(0,0,0,0)",
					fgColor: "#f39c12",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
	$('#countdown10').ClassyCountdown({
		end: '1397468325',
		now: '1388471324',
		labels: true,
		labelsOptions: {
			lang: {
				days: 'D',
				hours: 'H',
				minutes: 'M',
				seconds: 'S'
			},
			style: 'font-size:0.5em; text-transform:uppercase;'
		},
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .02,
					bgColor: "rgba(255,255,255,0.1)",
					fgColor: "rgba(255,255,255,1)",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			hours: {
				gauge: {
					thickness: .02,
					bgColor: "rgba(255,255,255,0.1)",
					fgColor: "rgba(255,255,255,1)",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			minutes: {
				gauge: {
					thickness: .02,
					bgColor: "rgba(255,255,255,0.1)",
					fgColor: "rgba(255,255,255,1)",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			seconds: {
				gauge: {
					thickness: .02,
					bgColor: "rgba(255,255,255,0.1)",
					fgColor: "rgba(255,255,255,1)",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
	$('#countdown3').ClassyCountdown({
		end: '1390868325',
		now: '1388461323',
		labels: true,
		labelsOptions: {
			lang: {
				days: 'Zile',
				hours: 'Ore',
				minutes: 'Minute',
				seconds: 'Secunde'
			},
			style: 'font-size:0.5em; text-transform:uppercase;'
		},
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,0.2)",
					fgColor: "rgb(241, 196, 15)"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			hours: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,0.2)",
					fgColor: "rgb(241, 196, 15)"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			minutes: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,0.2)",
					fgColor: "rgb(241, 196, 15)"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			},
			seconds: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,0.2)",
					fgColor: "rgb(241, 196, 15)"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:rgba(255,255,255,0.7);'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
});
</script>

</body>
</html>

<script>
var now=(new Date()).getHours();
if(now>0&&now<=6){
document.write("经常熬夜对身体不好哟~");
}else if(now>6&&now<=10){
document.write("早上心情好 快来看一看~");
}else if(now>10&&now<=14){
document.write("停下手中的工作 去吃饭~");
}else if(now>14&&now<=18){
document.write("累了一上午了 休息会吧~");
}else{
document.write("晚上好 醒来有惊喜哟~");
}
</script>

<iframe src="https://www.lovestu.com/api/project/cnmapyinqing/obj.php" height="500" frameborder="no" border="0" width="100%"> </iframe>

<del>咱也不知道写什么，咱也不敢说</del><br>

进入每一个页面时，如果出现"主页"脑袋<del>增大</del>，右键自动点击等BUG,请在留言板反馈给我（因为我是不会写代码的菜鸡<br>

<audio src="/assets/audio/123.mp3" controls="" __idm_id__="213856257"></audio>

欢迎关注我的<a href="https://space.bilibili.com/341532844">【BILIBILI首页】</a>


也欢迎关注我的<a href="https://www.youtube.com/channel/UCQzzMjMBa9Z3REpdIYaUa7g?view_as=subscriber" target="_blank">Youtube</a>
  
  
@O7I2 hey   man


2020年1月26日15:01:20...我这个小垃圾把自己的网站做出来了（PS:其实是你@O7I2）

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
点击这里来显示日期和时间
</button>

<p id="demo"></p>
Jekyll我假装不知道是什么东西......
 
 就这样吧

> 本站最近使用了<a href="https://jekyllrb.com/" target="_blank">Jekyll(官网,英文)</a>(<a href="https://jekyllcn.com" target="_blank">中文</a>)重写，最近才发现有Jekyll这种东西，而且Github Pages也支持<br /> 
>还 是 好 难！！！

## 页面（我绝对不会告诉你我在模仿O7I2）：

让我帮你百度一下（<a href="baiduso/so.html">链接</a>） 
 
相册：（<a href="/img.html">链接</a>） （<a href="https://www.jb51.net/html5/704463.html">JS</a>）  

白给专区：（<a href="/baigei.html">链接</a>）  

Base64在线转换：（<a href="tools/base64.html">链接</a>）  

留言板：（<a href="talk">链接</a>）  

 Markdown帮助文档：（<a href="md">链接</a>）  
 
二维码（QRCODE）生成器：（<a href="qrcode">链接</a>）  

CPS测试器：（<a href="cps">链接</a>）  

长链接转短链接：（<a href="https://nw5.cc">链接</a>）（我直接贴网址好了...） 来自（<a href="https://www.kindyear.cn">链接</a>）    

关于：（[链接](about)）  

## PDF区

>这玩意可是我花了好长时间Ctrl+c and Ctrl+v过来占空间22MB的巨婴<br>

（<a href="tools/pdf">链接</a>）

## BING区

（<a href="tools/bing">链接</a>）

## 游戏区

墙裂推荐：OnOff:（<a href="games/OnOff/index.html">链接</a>）<a href="https://github.com/starzonmyarmz/js13k-2018">Github</a>

Offline Paradise：（<a href="games/op/index.html">链接</a>）<a href="https://github.com/sirxemic/js13k-game">Github</a>

SystemsOffline：（<a href="games/SystemsOffline/index.html">链接</a>）<a href="https://github.com/eschatonic/SystemsOffline">Github</a>

猜数字：（<a href="games/caishuzi.html">链接</a>）<a href="http://www.codesc.net/jscss/3427.shtml">JS</a>

贪吃蛇：（<a href="games/snake.html">链接</a>）

FlyBird:（<a href="games/index.html">链接</a>）

扫雷：（<a href="saolei">链接</a>）

STEAM游戏区：不定时更新游戏（<a href="steam-games">链接</a>）

## Blog(博客)：（<a href="blog">链接</a>）

推荐：看了十分钟抖音,我觉得自己像是一个工具

## 必应（Bing）每日壁纸
图片版权请前往<a href="https://cn.bing.com" target="_blank">Bing</a>官方网站查看

<a href="https://open.saintic.com/api/bingPic/" target="_blank"><img src="https://open.saintic.com/api/bingPic/" alt="必应每日壁纸" title style></a>

必应（Bing）官方API:<a href="https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN" target="_blank">链接</a>



第三方API: <a href="https://open.saintic.com/api/bingPic/" target="_blank">链接</a> (本站使用) <br>


<a href="https://bing.ioliu.cn/" target="_blank">必应壁纸</a>  BY  <a href="https://ioliu.cn/" target="_blank">云淡风轻</a>

## 在我的小破站搜索（可能没有用处，第一次做...）

<form role="search" method="get" class="search-form" action="https://chinqblog.github.io/">

<label>
<span class="screen-reader-text">
搜索：</span><input type="search" class="search-field" placeholder="搜索…" value name="s">
</label>

<a class="button" href="https://chinqblog.github.io" target="_blank">搜索</a>
</form>

## 那些我当年认识的dalao们（友联）

O7I2:一傻逼小学生>>><a href="https://o7i2.github.io/" target="_blank">Concern Ta</a><br>

<del>CHINQ:划掉</del><br>

ZihanGu:网站开发人员（真正的dalao）>>><a href="https://zihangu.com" target="_blank">Concern Ta</a><br>

虛度巛光陰：刘明帅 – 热爱生活！>>><a href="https://lmshuai.com/" target="_blank">Concern Ta</a><br>

kindyear：kindyear’s blog – 杂乱的技术小站>>><a href="https://www.kindyear.cn/" target="_blank">Concern Ta</a><br>

BiMax的晒鱼厂：定期晒鱼，随缘更新>>><a href="https://www.bbimax.xyz/" target="_blank">Concern Ta</a><br>


##      人生的真理
```
因为挚爱，所以热爱
```
## 阿里云推广（马云打钱！）

<a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=4wz5xqgf"><img class="alignnone size-full wp-image-195" src="https://zihangu.com/wp-content/uploads/2019/03/600x300.png" alt width="600" height="300"></a>

<div class="fill"><img style="transform: rotateY(180deg)" src="https://atlinker.cn/theme/funny.png">
<div class="cardA">
<div class="boxA translateA">
<div class="fillA">
<div id="nb" class="bubble">QAQ滑稽</div>
<a class="button" href="#">回到顶部</div>