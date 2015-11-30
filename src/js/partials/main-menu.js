jQuery(document).ready(function($) {
	$('.main-menu__burger').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.main-menu__burger-strip').toggleClass('main-menu__burger-strip--open');
		$('.main-menu').toggleClass('main-menu--open');
	});
});