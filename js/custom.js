$(document).ready(function(){
    $('.link-scroll').click(function(e){
        
        var linkhref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkhref).offset().top - 100
        });

        e.preventDefault();
    });
});