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

		// initialize properties to default
		$(".header ul li > a").css('color','#666');
		$(".header ul li").css('background','url("") no-repeat');

		// set active properties
		$(this).parent().css('background','url("images/activeNavArrow.png") no-repeat');
		$(this).parent().css('background-position','center bottom');
		$(this).css('color','#c00');

	});

	$("#cboxOverlay").click(function(){
		
		// set properties to default
		$(".header ul li").css('background','url("") no-repeat');
		$(".header ul li > a").css('color','#666');

	});

	// // currently not working as expected
	// if($("div").hasClass("fancybox-opened") == true){

	// 	alert("no class");
	// 	$(".header ul li").css('background','url("") no-repeat');
	// 	$(".header ul li > a").css('color','#666');
		
	// };

});