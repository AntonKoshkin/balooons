jQuery(document).ready(function($) {
	$('.side-menu__item').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.side-menu__sublist').removeClass('side-menu__sublist--active');
		$(this).find('.side-menu__sublist').addClass('side-menu__sublist--active');
	});
});