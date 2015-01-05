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

});