$(document).ready(function(){

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

	// currently not working as expected
	$("#cboxClose").click(function(){

		$(".header ul li").css('background','url("") no-repeat');
		
	});

	if($("#cboxOverlay").css("display") == "none"){

		$(".header ul li").css('background','url("") no-repeat');
		
	}

});