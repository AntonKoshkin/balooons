// обрабатываем изменения в выборе картинки
$('#picDown').change(function(event) {
	// если картинка выбрана
	if ($(this).val() != '') {
		// то зажигаем лампочку
		$('.calc__pic-label--round').css('background', '#48EC41');
	};
});