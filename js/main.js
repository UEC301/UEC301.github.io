$(document).ready(function(){
	
// DEFAULT HOME POSITION NAVBAR SETTING
	
	$('.navbar').removeClass('navbar-bg-light');
	$('.nav-link').addClass('bg-light-link');
	$('.navbar-brand').addClass('bg-light-brand');
	
// SCROLLING EFFECT
	
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
	

// NAVBAR TRANSITION ON SCROLLING

        $(window).scroll(function() {
          if($(this).scrollTop() > 350) { 
              $('.navbar').addClass('navbar-bg-light');
			  $('.nav-link').removeClass('bg-light-link');
			  $('.navbar-brand').removeClass('bg-light-brand');
          }
		  if($(this).scrollTop() <= 350) {
			  $('.navbar').removeClass('navbar-bg-light');
			  $('.nav-link').addClass('bg-light-link');
			  $('.navbar-brand').addClass('bg-light-brand');
		  }
        });
	
});

        
