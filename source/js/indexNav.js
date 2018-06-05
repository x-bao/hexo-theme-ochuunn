var indexNavItems = $('.index-nav__list span');
var links = $('.index-nav__list a');
var indexNav = $('.index-nav__list');

window.onload = function () {
    indexNav.animate({}, 0, open).animate({}, 200, close);
}

function open () {
    indexNav.addClass('open');
}

function close () {
    setTimeout(function () {
        indexNav.removeClass('open');
    }, 720);
}

var index = 5;
var timer = setInterval(function () {
	var item = $(indexNavItems[index % 5]);
	item.css('zIndex', index++);
}, 1000);
