$(document).ready(function(){

	var row;
	 for (var row = 1; row <= 6; row++) {
	 	
	 	for (var i = 1; i <= 7; i++) {
	 		
	 		var objectString = ".homeGallery .row"+row+" .img"+i+" img";
	 		var imageUrl = "images/homepage/row"+row+"_"+i+".jpg";

	 		$(objectString).attr("src",imageUrl);

	 	};

	 };

	$(".header ul li > a").click(function(){

		var clickedObj = $(this);
		setTimeout(function() {  
	     		$(".header ul li").removeClass("activeNav");
				$(clickedObj).parent().addClass("activeNav");
		    },
		    500
		);

	});

	// $( window ).resize(function() {
	  
	//   $.fancybox.reposition();

	// });

});

$(window).load(function() {
		// Animate loader off screen

		$( ".container" ).removeClass( "loading" );
		$( ".container" ).css("left","0");
		$( ".container" ).css("opacity","1");
		$( ".loader_cont" ).remove();
	});