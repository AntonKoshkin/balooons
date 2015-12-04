// вешаем событие на клик по бургеру
$('.main-menu__burger').on('click', function(event) {
	// если ширина окна браузера < 900 пк
	if ($(window).width()<'900') {
		// отменяем действие по умолчанию (так, на всякий)
		event.preventDefault();
		// вкл/выкл класс смены полосок на крестик
		$('.main-menu__burger-strip').toggleClass('main-menu__burger-strip--open');
		// вкл/выкл класс открывания меню
		$('.main-menu').toggleClass('main-menu--open');
	};
});