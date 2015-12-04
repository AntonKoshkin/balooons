// обрабатываем клик по чекбоксам
$('.calc__number').on('click',function(event) {
	// кладем выбранное значение в переменную
	var balNumber = $('input:checked').val();
	// производим сложные математические вычисления
	var totalPrice = balNumber*100-(balNumber*0.1)+100

	// полученное значение выводим
	$('#countPrice').text(totalPrice);
});
