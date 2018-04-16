$(document).ready(function(){

    $('body').plusAnchor({
        easing: 'easeInOutExpo',
        speed:  800
    });

    $('#myCarousel').carousel({
pause: true,
interval: false
});

});
