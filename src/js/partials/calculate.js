// обрабатываем клик по чекбоксам
var balNumber = 100;
var totalPrice = 500;

// при вводе цифр в поле
$('#numberCust').on('input', function(event) {

	// кладем выбранное значение в переменную
	balNumber = $('#numberCust').val();

	// отмеченный пункт отменяется
	$('input:checked').prop('checked', false);

	// производим сложные математические вычисления
	totalPrice = balNumber*100-(balNumber*0.1)+100

	// полученное значение выводим
	$('#countPrice').text(Math.ceil(totalPrice));
});

// при выборе готового варианта
$('.calc__number').on('click', function(event) {

	// кладем выбранное значение в переменную
	balNumber = $(this).html();
	
	// обнуляем значение в текстовом поле
	$('#numberCust').val('');

	// производим сложные математические вычисления
	totalPrice = balNumber*100-(balNumber*0.1)+100

	// полученное значение выводим
	$('#countPrice').text(Math.ceil(totalPrice));
});
