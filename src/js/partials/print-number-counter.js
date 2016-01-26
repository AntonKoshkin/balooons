$('body').on('click', '#countMinus', function(event) {
	event.preventDefault();
	
	var	input		= $(this).closest('#counter').find('#countNumber'),
			ifNumber	= isNumeric(input.val());

	if (input.val() && ifNumber && (input.val() > 0)) {
		input.val(parseFloat(input.val()) - 1);
	} else {
		input.val(0);
	}



});

$('body').on('click', '#countPlus', function(event) {
	event.preventDefault();

	var	input		= $(this).closest('#counter').find('#countNumber'),
			ifNumber	= isNumeric(input.val());

	if (input.val() && ifNumber) {
		input.val(parseFloat(input.val()) + 1);
	} else {
		input.val(0);
	}
});

$('body').on('click', '#counterBtn', function(event) {
	event.preventDefault();

	var keepingNumber = parseFloat($(this).text());

	$('#countNumber').val(keepingNumber);
});