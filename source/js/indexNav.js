var indexNavItems = $('.index-nav__list span');
var links = $('.index-nav__list a');

var index = 5;
var timer = setInterval(function () {
	var item = $(indexNavItems[index % 5]);
	item.css('zIndex', index++);
}, 1000);
