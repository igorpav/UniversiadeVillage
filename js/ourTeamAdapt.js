"use strict"
$(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() > 991) {
        $('.our-team').addClass('flex-nowrap');
    }
    else {}
});

$(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() > 991) {
        $('.our-team').addClass('flex-nowrap');
    }
    else {$('.our-team').removeClass('flex-nowrap');}
});