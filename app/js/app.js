(function($) {

    'use strict';

    // sidebar position
    var main_pos = $('main').offset().top;
    var sidebarPos = function() {
        var scroll_ammount = $(window).scrollTop();
        if (scroll_ammount >= main_pos) {
            $('main').addClass('fix_pos');
        } else {
            $('main').removeClass('fix_pos');
        }
    }

    $(window).scroll(function(event) {
        sidebarPos();
    });

    sidebarPos();

    // anchor smooth scroll
    $(document).on('click', 'a[href^="#"][class="nav-link"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 25
        }, 500);
    });


    $('.code-box-copy').codeBoxCopy({
        tooltipText: 'Copied',
        tooltipShowTime: 1000,
        tooltipFadeInTime: 300,
        tooltipFadeOutTime: 300
    });

    $('#to-top').bind('click', function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1500);
    });
    $(window).scroll(function() {

        // scroll to top
        if ($(this).scrollTop() > 1000) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });
})(jQuery);