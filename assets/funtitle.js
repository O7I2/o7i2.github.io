var OriginTitile = document.title;
var titleDisplay,titleHide;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		document.title = '(つェ⊂)我藏好啦 ' + OriginTitile;
		clearTimeout(titleDisplay);
		titleHide = setTimeout(function() {
		document.title = OriginTitile;
	}, 1500);
	} else {
		document.title = '´∇｀ 呀被发现啦~ ' + OriginTitile;
		clearTimeout(titleHide);
		titleDisplay = setTimeout(function() {
		document.title = OriginTitile;
	}, 1500);
}});