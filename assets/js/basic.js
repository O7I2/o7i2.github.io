/* Cookie相关 */
function cookie(id,content,time) {
	if (content != "" && content != null) {
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000))
		var expires = "expires="+d.toGMTString()
		document.cookie = id + "=" + content + "; " + expires;
	} else {
		var name = id + "=";
		var ca = document.cookie.split(";");
		for (var i=0; i<ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return;
	}
}
/* Cookie相关 */

/* 加密函数 */
function compile(code) {    
	var c=String.fromCharCode(code.charCodeAt(0)+code.length);
	for(var i=1;i<code.length;i++){
		c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
	}
	return escape(c);
}
/* 加密函数 */

/* 解密函数 */
function uncompile(code) {
	code=unescape(code);
	var c=String.fromCharCode(code.charCodeAt(0)-code.length);
	for(var i=1;i<code.length;i++){
		c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
	}
	return c;
}
/* 解密函数 */

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function username(type) {
	var user = getCookie("username");
	if (type == "set") {
		user = prompt("设置你的名字:",user);
		if (user != "" && user != null) {
			setCookie("username",user,365);
		}
		return getCookie("username");
	}
	if (user == "") {
		setCookie("username","不知名的访问者",365);
	}
	return getCookie("username");
}