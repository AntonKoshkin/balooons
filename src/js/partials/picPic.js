// обрабатываем изменения в выборе картинки
$('#picDown').change(function(event) {

	// если выбран один из этих форматов
	if (
		$(this).val().slice(-3) === 'peg' ||
		$(this).val().slice(-3) === 'svg' ||
		$(this).val().slice(-3) === 'png' ||
		$(this).val().slice(-3) === 'jpg'
	) {

		// то зажигаем лампочку
		$('.calc__pic-label--round').css('background', '#48EC41');

	// иначе
	} else {

		// очищаем ввод
		$(this).val('');

		// и гасим лампочку
		$('.calc__pic-label--round').css('background', '#e8e8e8');
	}
});