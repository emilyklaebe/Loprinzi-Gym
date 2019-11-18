// your script file for adding your own jquery
 $(function() {
// Your Code from here on down. Don't delete that line above!
  

// $('.standard-rates').on('click', function (){
//	$('.hide').css('display', '.table-rates')
// })


var flip = 0;
$( ".standard-rates" ).click(function() {
  $( ".table-one" ).toggle( flip++ % 2 === 0 ).slideToggle("slow");
});

var flip = 0;
$( ".student-rates" ).click(function() {
  $( ".table-two" ).toggle( flip++ % 2 === 0 ).slideToggle("slow");
});

var flip = 0;
$( ".group-rates" ).click(function() {
  $( ".table-three" ).toggle( flip++ % 2 === 0 ).slideToggle("slow");
}); 

$(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});







// End of Your Code . Don't delete that line below!!
});