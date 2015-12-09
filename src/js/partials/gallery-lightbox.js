$('.cat-gal__link').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var pic = $(this).find('.cat-gal__img').attr('data-img');

	$('.gal-box__img').attr('src', pic);
	$('.gal-box').addClass('gal-box--on');
	$('html,body').css('overflow','hidden');
});

$('.gal-box__close, .gal-box__back').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.gal-box').removeClass('gal-box--on');
	$('html,body').css('overflow','auto');
});