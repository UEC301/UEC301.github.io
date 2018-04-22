$(document).ready(function(){
	
// DEFAULT HOME POSITION NAVBAR SETTING
	
	$('.navbar').removeClass('navbar-bg-light');
	$('.nav-link').addClass('bg-light-link');
	$('.navbar-brand').addClass('bg-light-brand');
	$('.ac1').addClass('visible-none');
	
// ON CLICK NAVLINKS SCROLLING EFFECT
	
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
	
	
// CHECK IF ELEMENT IS IN VIEWPORT ?
	
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

	
// ADD FADE-IN CLASSES WHEN ELEMENT IS IN VIEWPORT
	
	  $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
		  if (isScrolledIntoView(this) === true) {
			$(this).removeClass('visible-none');
			$(this).addClass('fadeIn');
		  }
		});
	  });
});

