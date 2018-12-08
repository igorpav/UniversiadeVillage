$(function(){
    var sel=$("select");
    var description = $('#description');
    description.html($('option[selected]').val());
    description.toggleClass('animated fadeInDownBig');
    sel.change(function(){
        description.toggleClass('animated fadeInDownBig');
        description.html(this.value);
    });
});