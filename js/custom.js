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

    $('.projects_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [            
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

    $('.course-slider_wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        dots: true,
    });

    $('.popupOpen').click(function(){

        $('.popup_overlay').addClass('overlay_visible');
        $('.popup_wrapper').addClass('show_popup');

    });

    $('.closePopup').click(function(){
        $('.popup_overlay').removeClass('overlay_visible');
        $('.popup_wrapper').removeClass('show_popup');
    });

    $('.course-categories-tab_video img').click(function(){
        $(this).addClass('hide_image_tumbnail');
        $('.course-categories-tab_video').removeClass('hide_play_btn');
        $(this).parents('.course-categories-tab_video').addClass('hide_play_btn');
        $(this).siblings('.hide_video').addClass('play_video');
        $('.hide_video').trigger('play');
        var videoURL = $(this).siblings('iframe').prop('src');
        videoURL += "&autoplay=1";
        $(this).siblings('iframe').prop('src',videoURL);
    });
    
    $('.course-categories-tab_tabs ul li').click(function(){
        $('.course-categories-tab_video').removeClass('hide_play_btn');
        $('.course-categories-tab_video img').removeClass('hide_image_tumbnail');
        $('.hide_video').removeClass('play_video');
        $('.course-categories-tab_tabs ul li').removeClass('active-tab');
        $('.course-categories-tab_video').removeClass('active-video')
        let current_tab = $(this).data('tab-name');
        $(this).addClass('active-tab');
        $('.course-categories-tab_video').each(function(){
            let current_video = $(this).data('tab-name');
            if (current_video == current_tab)
            {
                $(this).addClass('active-video');
            }
        })
    });

    if($('body').find('.classes-section_class-wrapper').length > 0)
    {
        var mixer = mixitup('.classes-section_class-wrapper');
    }

    if($('body').find('#faq-section_accordion').length > 0){
        $("#faq-section_accordion").accordion({
            heightStyle: "content",
            collapsible: true,
        });
    }

    if($('body').find('.teacher_intro_scrollbar').length > 0){
        $(".teacher_intro_scrollbar").mCustomScrollbar();
    }

    if($('body').find('.teacher-explore-classes_tab-content').length > 0){
        $(".teacher-explore-classes_tab-content").slick({
            'slidesToShow': 5,
            'slidesToScroll': 1,            
        });

        // var mixer = mixitup('.teacher-explore-classes_tab-content');

        // $('.teacher-explore-classes_tab-menu ul li button').click(function(){            
        //     setTimeout(() => {
        //         $('.teacher-explore-classes_tab-content .slick-slide').each(function(){
        //             var displayValue = $(this).find('.teacher-explore-classes_tab').css('display');
        //             var opacityValue = $(this).find('.teacher-explore-classes_tab').css('opacity');
        //             var currentSlide = $(this);                    
        //             if(displayValue == 'none' || opacityValue == 0)
        //             {
        //                 $(currentSlide).css('display', 'none')
        //             }
        //             else{
        //                 $(currentSlide).css('display', 'block')
        //             }
        //         });
        //     }, 800);
        // });
    }





});