$(document).ready(function () {
   $('#btn').attr('disabled','disabled');
    var EMAIL_REGEX = new RegExp('^[A-Za-z]+@stud.kpfu.ru$');
    var PASSWORD_REGEX = new RegExp('^[A-Za-z0-9]{6,}$');
    var flagE = false;
    var flagP = false;
   $(document).on('change',function () {
       $('#defaultLoginFormEmail').keyup(function () {
           if (!EMAIL_REGEX.test($(this).val())) {
               flagE = false;
               $(this).removeClass('allRight');
               $(this).addClass('error');
           }
           if(EMAIL_REGEX.test($(this).val())) {
               flagE = true;
               $(this).removeClass('error');
               $(this).addClass('allRight');
           }
       });
       $('#defaultLoginFormPassword').keyup(function () {
           if (!PASSWORD_REGEX.test($(this).val())) {
               flagP = false;
               $(this).removeClass('allRight');
               $(this).addClass('error');
           }
           if(PASSWORD_REGEX.test($(this).val())) {
               flagP = true;
               $(this).removeClass('error');
               $(this).addClass('allRight');
           }
       });
       if(flagP === flagE === true ) {
           $('#btn').removeAttr('disabled');
       } else {
           $('#btn').attr('disabled','disabled');
       }

   })
});