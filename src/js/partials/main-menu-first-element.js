// если ширина экрана <900
if ($(window).width()<'900') {
	// кладем элемент списка с активной ссылкой в переменную
	var a = $('.main-menu__a--active').closest('.main-menu__item');
	// и перетаскиваем ее в начало списка
	$('.main-menu__list').prepend(a);
};