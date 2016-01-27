$('body').on('click', '#countMinus', function(event) {
	event.preventDefault();
	
	var	input		= $(this).closest('#counter').find('#countNumber'),
			ifNumber	= isNumeric(input.val()),
			output	= $('#orderBaloonSum'),
			numb;

	if (input.val() && ifNumber && (input.val() > 0)) {
		input.val(parseFloat(input.val()) - 1);
		numb = input.val();
		output.text(parseFloat(numb) * 99 +' р');
		console.log(output)
	} else {
		input.val(0);
		numb = input.val();
		output.text(parseFloat(numb) * 99 +' р');
	}
});

$('body').on('click', '#countPlus', function(event) {
	event.preventDefault();

	var	input		= $(this).closest('#counter').find('#countNumber'),
			ifNumber	= isNumeric(input.val()),
			output	= $('#orderBaloonSum'),
			numb;

	if (input.val() && ifNumber) {
		input.val(parseFloat(input.val()) + 1);
		numb = input.val();
		output.text(parseFloat(numb) * 99 +' р');
	} else {
		input.val(0);
		numb = input.val();
		output.text(parseFloat(numb) * 99 +' р');
	}
});

$('body').on('click', '#counterBtn', function(event) {
	event.preventDefault();

	var	keepingNumber = parseFloat($(this).text()),
			output	= $('#orderBaloonSum');

	$('#countNumber').val(keepingNumber);
	output.text(parseFloat(keepingNumber) * 99 +' р');
});