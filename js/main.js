$(document).ready(function(){

    $('body').plusAnchor({
        easing: 'easeInOutExpo',
        speed:  800
    });

    $('#myCarousel').carousel({
		pause: true,
		interval: false
	});
	
// COLLAPSE NAVBAR AUTOMATICALLY AFTER CLICK
	
	$('.navbar a').click(function(){
		$('.navbar-collapse').collapse('hide');
	});
});
