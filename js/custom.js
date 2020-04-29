$(document).ready(function(){

    var headerHeight = $('.navbar').outerHeight();
    headerHeight = headerHeight + 'px';
    $('body').css('padding-top', headerHeight);

    $(window).resize(function(){
        var headerHeight = $('.navbar').outerHeight();
        headerHeight = headerHeight + 'px';
        $('body').css('padding-top', headerHeight);
    });
    
    $('.explore-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,                                    
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.popupOpen').click(function(){

        $('.popup_overlay').addClass('overlay_visible');
        $('.popup_wrapper').addClass('show_popup');

    });

    $('.closePopup').click(function(){
        $('.popup_overlay').removeClass('overlay_visible');
        $('.popup_wrapper').removeClass('show_popup');
    });

});