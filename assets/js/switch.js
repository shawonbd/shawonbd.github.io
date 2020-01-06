 $(document).ready(function () {
  $(".color-scheme a").click(function () {
   $('link.alt').attr('href', $(this).attr('rel'));
   return false;
  });
  imgPathStart = "images/pattern/";
  imgPathEnd = new Array("pattern0.png","pattern1.png","pattern2.png","pattern3.png","pattern4.png","pattern5.png","pattern6.png","pattern7.png","pattern8.png","pattern9.png");
 
  $(".background-selector li img").click(function() {
   backgroundNumber = $(this).attr("data-nr");
   $("body").css({background:"url('"+imgPathStart+imgPathEnd[backgroundNumber]+"')"});
  });
 });
 
 $(document).ready(function () {  
  $('.switch-button').click(function () { 
   if ($(this).is('.open')) {
    $(this).addClass('closed');
    $(this).removeClass('open');
    $('.styleswitcher').animate({
     'left': '-70px'
    });
   } else {
    $(this).addClass('open');
    $(this).removeClass('closed');
    $('.styleswitcher').animate({
     'left': '0px'
    });
   } 
  });
 });
 
