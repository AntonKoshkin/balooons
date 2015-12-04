jQuery(document).ready(function($) {
	// вешаем событие на клик по элементу списка
	$('.side-menu__item').on('click', function(event) {
		// отменяем действие по умолчанию
		event.preventDefault();
		// убираем класс открытия у всех элементов меню
		$('.side-menu__sublist').removeClass('side-menu__sublist--active');
		// добавляем класс открытия тому, по которому кликнули
		$(this).find('.side-menu__sublist').addClass('side-menu__sublist--active');
	});
});