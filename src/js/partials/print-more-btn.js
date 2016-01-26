$('body').on('click', '#moreColorBtn', function(event) {
	event.preventDefault();

	if ($('#moreColorCont').attr('class') == 'print-color__colors') {
		$('#moreColorCont').attr('class', 'print-color__colors print-color__colors--open');
		$(this).text('Скрыть палитру');
	} else {
		$('#moreColorCont').attr('class', 'print-color__colors');
		$(this).text('Смотреть всю палитру');
	}
});