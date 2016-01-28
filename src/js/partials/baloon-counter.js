$('body').on('click', '.baloon__minus', function(event) {
	event.preventDefault();
	
	var	input			= $(this).closest('.baloon__counter').find('.baloon__input'),
			ifNumber		= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.baloon').find('.baloon__sum');

	if (input.val() && ifNumber && (input.val() > 0)) {
		input.val(parseFloat(input.val()) - 1);
		baloonPrice.text(input.val() * 50 + ' руб');
	} else {
		input.val(0);
		baloonPrice.text('0 руб');
	}
});

$('body').on('click', '.baloon__plus', function(event) {
	event.preventDefault();

	var	input			= $(this).closest('.baloon__counter').find('.baloon__input'),
			ifNumber		= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.baloon').find('.baloon__sum');
	
	if (input.val() && ifNumber) {
		input.val(parseFloat(input.val()) + 1);
		baloonPrice.text(input.val() * 50 + ' руб');
	} else {
		input.val(1);
		baloonPrice.text(input.val() * 50 + ' руб');
	}
});

$('body').on('click', '.baloon-also__minus', function(event) {
	event.preventDefault();
	
	var	input			= $(this).closest('.baloon-also__counter').find('.baloon-also__input'),
			ifNumber		= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.baloon-also__item').find('.baloon-also__price');

	if (input.val() && ifNumber && (input.val() > 0)) {
		input.val(parseFloat(input.val()) - 1);
		baloonPrice.text(input.val() * 99 + ' руб');
	} else {
		input.val(0);
		baloonPrice.text('0 руб');
	}
});

$('body').on('click', '.baloon-also__plus', function(event) {
	event.preventDefault();

	var	input			= $(this).closest('.baloon-also__counter').find('.baloon-also__input'),
			ifNumber		= isNumeric(input.val()),
			baloonPrice	= $(this).closest('.baloon-also__item').find('.baloon-also__price');
	
	if (input.val() && ifNumber) {
		input.val(parseFloat(input.val()) + 1);
		baloonPrice.text(input.val() * 99 + ' руб');
	} else {
		input.val(1);
		baloonPrice.text(input.val() * 99 + ' руб');
	}
});