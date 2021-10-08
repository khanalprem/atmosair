(function($) {
    'use strict';

    var $winHeight = $(window).innerHeight(),
        $headerHeight = $('.site-header').height(),
        $sidebarHeadHeight = $('.sidebar .card-header').height(),
        $mapHeight = $winHeight - $headerHeight,
        $commentHeight = $('.comments').height(),
        $projectListHeight = $winHeight - ($headerHeight + $sidebarHeadHeight) - 40,
        $customTabHeight = $winHeight - $headerHeight - 150,
        $bannerHeight = $('.landing-banner').height(),
        $profileMainHeight = $('.profile-details-card').height() + 15,
        $siteMainHeight = $('.site-main-card').height() + 220;

    $('.landing-banner .banner-content').css({
        'max-height': $bannerHeight,
        'min-height': $bannerHeight,
    });
    $('.sidebar .projects').css('max-height', $projectListHeight - 20);
    $('.sidebar .project-details').css({
        'max-height': $siteMainHeight,
        'min-height': $siteMainHeight,
    });
    $('.sidebar .profile-details').css({
        'max-height': $profileMainHeight,
        'min-height': $profileMainHeight,
    });
    $('.project-details-card .custom-tab-content').css({
        'max-height': $customTabHeight,
        'min-height': $customTabHeight,
    });
    $('.map').css('height', $mapHeight - 2);

    function openModal() {
        $('button.common-button').on('click', function(e) {
            e.preventDefault();
            var targetId = $(this).attr('popup-link');
            $('#' + targetId).addClass('open');
        });
    }
    openModal();

    function closeModal() {
        $('.popup-footer .common-button, .close-icon').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.popup').removeClass('open');
        });
    }
    closeModal();
    $('.advance-filter').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.filter').find('.filter-content').slideToggle(400);
    });

    function selectToggle() {
        $('.custom-select .selected-item').on('click', function() {
            $(this).closest('.custom-select').toggleClass('show-dropdown');
        });
        $(document).on('click', function(event) {
            var $trigger = $('.custom-select');
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $('.custom-select').removeClass('show-dropdown');
            }
        });
    }
    selectToggle();

    function customDropdown() {
        $('.custom-dropdown').on('click', function(e) {
            e.preventDefault();
            $(this).children('ul.custom-dropdown-menu').slideToggle(300);
        });

        $(document).mouseup(function(e) {
            var container = $('.custom-dropdown-menu');
            // If the target of the click isn't the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide(300);
            }
        });
    }
    customDropdown();

    $('.selectdrop .dropdown-menu li a').on('click', function() {
        var selText = $(this).html();
        $(this)
            .parents('.selectdrop')
            .find('.selection')
            .html(
                selText + '<span class="arrow"><i class="fa fa-angle-down"></i></span>'
            );
    });

    function filterToggle() {
        $('.filter .circle-icon').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-bg');
            $(this).closest('.filter').find('.filter-content').toggle(300);
        });

        // $(document).mouseup(function (e) {
        //   var container = $(".filter-content");
        //   if (!container.is(e.target) && container.has(e.target).length === 0) {
        //     container.hide(300);
        //   }
        // });
    }
    filterToggle();

    var pageSection = $('.bg-image');
    pageSection.each(function() {
        if ($(this).attr('data-background')) {
            $(this).css(
                'background-image',
                'url(' + $(this).data('background') + ')'
            );
        }
    });

    function customTab() {
        $('.custom-tab ul.tab-list a').click(function(e) {
            e.preventDefault();
            var tab_id = $(this).attr('data-tab');

            $('.custom-tab ul.tab-list li a').removeClass('current');
            $('.custom-tab .custom-tab-content .tab-item').removeClass('current');

            $(this).addClass('current');
            $('#' + tab_id).addClass('current');
        });
    }
    customTab();
    $('.toaster .close').click(function(e) {
        e.preventDefault();
        var parent = $(this).parent('.toast');
        parent.fadeOut('slow', function() {
            $(this).remove();
        });
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

    $('#upload').change(function(event) {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var filename = $('#upload').val();
            filename = filename.substring(filename.lastIndexOf('\\') + 1);
            reader.onload = function(e) {
                debugger;
                $('#preview').attr('src', e.target.result);
                $('#preview').hide();
                $('#preview').fadeIn(500);
                $('.custom-file-label').text(filename);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
})(window.jQuery);