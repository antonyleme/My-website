var $items = $('.link-scroll');

$(document).ready(function(){
    $('.link-scroll').click(function(e){
        
        var linkhref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkhref).offset().top -20
        });

        e.preventDefault();
    });
});

$('.nav-link').on('click', function(){
    $('.navbar-toggler').click(); //bootstrap 4.x
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});