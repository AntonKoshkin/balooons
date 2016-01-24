if ($(window).width() < 1010) {
	var menuTitle = $('.navigation__a--active').closest('.navigation__item');
	
	$('.navigation__list').prepend(menuTitle);
}

$('body').on('click', '#collapseBtn', function(event) {
	event.preventDefault();
	
	if ($(window).width() < 1010) {
		event.preventDefault();
		
		$('.navigation').toggleClass('navigation--open');
	}
});