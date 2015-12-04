// обрабатываем изменение в селекте цвета
$('#color').change(function(event) {
	// кладем айди выбранного пункта в переменную
	var pickedColor = $('#color option:selected').attr('id');

	// если выбран синий
	if (pickedColor == 'colorBoxBlue') {
		// то красим квадратик в синий
		$('#calcColorBox').css('background', '#0a75ad');

	// если красный
	} else if (pickedColor == 'colorBoxRed') {
		// то красим в красный
		$('#calcColorBox').css('background', '#ff5548');
		
	// если зеленый
	} else if (pickedColor == 'colorBoxGreen') {
		// то, соответственно, зеленый
		$('#calcColorBox').css('background', 'green');
	}
});