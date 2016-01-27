$('a[href^="#"]').on('click', function(e){
	e.preventDefault();
	if ($(this).attr('href').length > 1) {
		point = $(this).attr('href');
		coord = $(point).offset().top;
		$('html,body')
			.stop()
			.animate({
				scrollTop: coord
			}, 1000);
	}
});