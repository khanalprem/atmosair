(function($) {
    'use strict';

    var $winHeight = $(window).innerHeight(),
        $headerHeight = $('.site-header').height(),
        $customTabHeight = $winHeight - $headerHeight - 150,
        $bannerHeight = $('.landing-banner').height(),
        $equaltHeight = $('.equal-height').height();







    $('.weather-condition  .white-card').css({
        'min-height': $equaltHeight,
    });

    $(window).on('resize', function() {
        $('.weather-condition  .white-card').css({
            'min-height': $equaltHeight,
        });
    })




    /*==================================
   Toggle Button
 ==================================*/
    $('.toggle-button').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('Is-toggle');
        $(this).toggleClass('is-active');
    });



    var pageSection = $('.bg-image');
    pageSection.each(function() {
        if ($(this).attr('data-background')) {
            $(this).css(
                'background-image',
                'url(' + $(this).data('background') + ')'
            );
        }
    });




    function stickyMenu() {
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();

            if (scroll > 130) {
                $('.landing-header').addClass('is-bg-white');
            } else {
                $('.landing-header').removeClass('is-bg-white');
            }

        });

    }
    stickyMenu();

    function bannerHeight() {
        if ($(window).width() <= 767) {
            $('.landing-banner .banner-content').css({
                'max-height': 'auto',
                'min-height': "auto",
            });
        } else {
            $('.landing-banner .banner-content').css({
                'max-height': $bannerHeight,
                'min-height': $bannerHeight,
            });
        }
    }
    bannerHeight();

    function smoothScroll() {
        $(' .scroll-arrow').on(
            'click',
            function(e) {
                e.preventDefault();

                $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top,
                    },
                    900,
                    'linear'
                );
            }
        );
    }
    smoothScroll();


})(window.jQuery);