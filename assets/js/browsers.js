function getBrowser() {
    var ua = window.navigator.userAgent;

// Is Mobile
   var isAndroid = ua.indexOf("Linux") != -1 && ua.indexOf("Android") != -1;
   // 是否安卓
   var isWeChat = isAndroid && ua.indexOf("MQQBrowser") != -1 && ua.indexOf("MicroMessenger") != -1;
   // 手机微信
   var isQQMob = isAndroid && ua.indexOf("QQ/") != -1 && ua.indexOf("MQQBrowser") != -1;
   // 手机QQ (不是QQ浏览器)
   var isAlipay = ua.indexOf("Alipay") != -1;
   // 支付宝
   var isWinPhone = ua.indexOf("Windows Phone") != -1;
   // WP
   var isiPhone = ua.indexOf("iPhone") != -1;
   // Apple's iPhone
   var isiPad = ua.indexOf("iPad") != -1;
   // Apple's iPad
   var isSafariMob = ua.indexOf("Safari") != -1 && ua.indexOf("Mobile") != -1 && ua.indexOf("Version") != -1;
   // Safari Mobile
   var isMobile = isAndroid || isWeChat || isQQMob || isWinPhone || isiPhone || isiPad || isSafariMob || ua.indexOf("Mobile") != -1;
   // 是否移动端
// Part 1
    var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
    // Internet Explorer
    var isIE11 = ua.indexOf("Trident/7.0") != -1;
    // Internet Explorer 11
	var isIEMob = ua.indexOf("MSIE") != -1 && ua.indexOf("IEMobile") != -1;
	// Internet Explorer 移动版
	var isIEMob11 = ua.indexOf("Trident/7.0") != -1 && ua.indexOf("IEMobile") != -1;
	// Internet Explorer 11 移动版
	var isNokiaB = ua.indexOf("NokiaBrowser") != -1;
	// NokiaBrowser
    var isFirefox = ua.indexOf("Firefox") != -1;
    // Firefox
    var isOpera = window.opr != undefined;
    // Opera
    var isEdg = ua.indexOf("Edg/") != -1;
    // Edge (Chromium based)
    var isEdgM = ua.indexOf("EdgA") != -1;
    // Edge Mobile
    var isEdge = ua.indexOf("Edge") != -1 && ua.indexOf("Mobile") == -1;
    // Edge (EdgeHTML based)
	var isEd = ua.indexOf("Edge") != -1 && ua.indexOf("Mobile") != -1;
	// Windows Phone's Edge
    var isChrome = ua.indexOf("Chrome") && window.chrome;
    // Google Chrome & Chromium based browsers
    var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
    // Apple Safari

// Part 2
    var isHeyTap = ua.indexOf("HeyTapBrowser") != -1;
    // OPPO浏览器
    var isQQWeb = ua.indexOf(" QQBrowser") != -1;
    // QQ浏览器
/* 360浏览器都不在UserAgent里声明是360的浏览器的,真的恶心,不愧是大流氓*/
/*    var is360Bro = _mime("type", "application/vnd.chromium.remoting-viewer");
 function _mime(option, value) {
             var mimeTypes = navigator.mimeTypes;
             for (var mt in mimeTypes) {
                 if (mimeTypes[mt][option] == value) {
                     name = true;
                 }
             }
             name = false;
         }*/
	var platform, name;
	
	if (isMobile) {
		platform = "移动端";
	} else {
		platform = "桌面端";
	}
	
    if (isWeChat) {
		name = "微信";
	} else if (isQQMob) {
		name = "手机QQ";
	} else if (isAlipay) {
		name = "支付宝";
	} else if (isQQWeb) {
        name = "QQ浏览器";
    } else if (isHeyTap) {
        name = "OPPO浏览器(移动版)";
    } else if (isEdg) {
        name = "新版Edge";
    } else if (isEdgM) {
        name = "Edge移动版";
    } else if (isEdge) {
        name = "旧版Edge";
    } else if (isEd) {
		name = "Edge (Windows Phone)";
	} else if (isFirefox) {  
        name = "Firefox";
    } else if (isOpera) {
        name = "Opera";
    } else if (isIEMob) {
		name = "Internet Explorer 10- 移动版";
	} else if (isIEMob11) {
		name = "Internet Explorer 11 移动版";
	} else if (isIE) {
        name = "IE 10以下";
    } else if (isIE11) {
        name = "Internet Explorer 11";
    } else if (isNokiaB) {
		name = "Nokia浏览器";
	} else if (isSafariMob) {
		name = "Safari移动端";
	} else if (isSafari) {
        name = "Safari";
    } else if (isChrome) {
        name = "Chrome";
    } else {
        name = "未知浏览器";  
    }  
return (platform + name);
//return (name + " on " + platform);
}
