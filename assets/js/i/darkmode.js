function DarkmodeToggle() {
	var darkedcss = document.getElementById("darkedcss") != null;
	//var darkedcss = ;
	if (!darkedcss) {
		var mode = "dark";
	} else if (darkedcss) {
		var mode = "light";
	}
	if (mode == "dark") {
		Darkmode("dark");
		setCookie("darkmode","dark");
	} else if (mode == "light") {
		Darkmode("light");
		setCookie("darkmode","",-1)
	}
	
}
function Darkmode(mode) {
	if (mode == "dark") {
		var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
		link.id = "darkedcss";
        link.href = "/assets/css/dark.css";
        document.getElementsByTagName('head')[0].appendChild(link);
	} else {
		document.getElementById('darkedcss').remove();
		// 不知道怎么删除CSS元素，暂时就这么搞了
		//window.location.reload();
	}
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Darkmode("dark");
} else if (getCookie("darkmode") == "dark") {
	Darkmode("dark");
}