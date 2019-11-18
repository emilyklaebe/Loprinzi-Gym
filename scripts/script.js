// your script file for adding your own jquery
 $(function() {
// Your Code from here on down. Don't delete that line above!
  

// $(document).scroll(function () {
//   var $nav = $(".navbar-fixed-top");
//   $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
// });


// Drop Downs

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


// Focus Point Test Below

$(document).ready(function() {
		
		$(".joe").click(function(e){
		
			var imageW = $(this).width();
			var imageH = $(this).height();
			
			//Calculate FocusPoint coordinates
			var offsetX = e.pageX - $(this).offset().left;
			var offsetY = e.pageY - $(this).offset().top;
			var focusX = (offsetX/imageW - .5)*2;
			var focusY = (offsetY/imageH - .5)*-2;
			
			//Calculate CSS Percentages
			var percentageX = (offsetX/imageW)*100;
			var percentageY = (offsetY/imageH)*100;
			var backgroundPosition = percentageX.toFixed(0) + '% ' + percentageY.toFixed(0) + '%';
			var backgroundPositionCSS = 'background-position: ' + backgroundPosition + ';';
			
			window.alert('FocusX:' + focusX.toFixed(2) + ', FocusY:' + focusY.toFixed(2) + ' (For CSS version: ' + backgroundPositionCSS + ')');
		
});


	var setupContainer = function($el) {
		var imageSrc = $el.find('img').attr('src');
		$el.data('imageSrc', imageSrc);

		resolveImageSize(imageSrc, function(err, dim) {
			$el.data({
				imageW: dim.width,
				imageH: dim.height
			});
			adjustFocus($el);
		});
	};







// End of Your Code . Don't delete that line below!!
});