$(function(){
    $(".nav-link").click(function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: $($(this).attr('href')).offset().top - 100}, 500);
    });
});
$(function () {
    $('#logo').click(function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop : $('#intro').offset().top},500);
    })
});