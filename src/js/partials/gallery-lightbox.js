// обработка клика по миниатюре
$('.cat-gal__link').on('click', function(event) {

	// отменяем действие по умолчанию
	event.preventDefault();

	// положим в переменную адрес большой картинки
	var pic = $(this).find('.cat-gal__img').attr('data-img');

	// добавляем его в адрес для картинки в модалке
	$('.gal-box__img').attr('src', pic);

	// добавляем класс видимости модалке
	$('.gal-box').addClass('gal-box--on');

	// отключаем скролл у страницы
	$('html,body').css('overflow','hidden');
});

// обработка клика по кнопке закрытия и по фону
$('.gal-box__close, .gal-box__back').on('click', function(event) {

	//  отменяем действие по умолчанию
	event.preventDefault();

	// удаляем класс видимости у модалки
	$('.gal-box').removeClass('gal-box--on');

	// возвращаем скролл странице
	$('html,body').css('overflow','auto');
});