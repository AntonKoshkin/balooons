function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

$('body').on('click', '.catalog-item__minus', function(event) {
	event.preventDefault();
	
	var	input		= $(this).closest('.catalog-item__counter').find('.catalog-item__input'),
			ifNumber	= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.catalog-item').find('.catalog-item__price');

	if (input.val() && ifNumber && (input.val() > 0)) {
		input.val(parseFloat(input.val()) - 1);
		baloonPrice.text(input.val() * 100 + ' руб');
	} else {
		input.val(0);
		baloonPrice.text('0 руб');
	}



});

$('body').on('click', '.catalog-item__plus', function(event) {
	event.preventDefault();

	var	input		= $(this).closest('.catalog-item__counter').find('.catalog-item__input'),
			ifNumber	= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.catalog-item').find('.catalog-item__price');
	
	if (input.val() && ifNumber) {
		input.val(parseFloat(input.val()) + 1);
		baloonPrice.text(input.val() * 100 + ' руб');
	} else {
		input.val(0);
		baloonPrice.text('0 руб');
	}
});