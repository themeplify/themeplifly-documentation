(function($) {

    'use strict';

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

    $(document).on('click', 'a[href^="#"][class="nav-link"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 25
        }, 500);
    });

})(jQuery);