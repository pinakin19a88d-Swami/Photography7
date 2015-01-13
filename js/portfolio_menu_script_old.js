$(document).ready(function(){

	var fbFlag = false;
	$(".cboxElement").click(function(){

		 $(".portfolioList").remove();
 		 $("#cboxContent").append('<ul class="portfolioList clearfix animated fadeInUp de6ms"><li id="pf1"><a href="javascript:void(0);">Architectural</a><span></span></li><li id="pf2"><a href="javascript:void(0);">Industrial Product</a><span></span></li><li id="pf3"><a href="javascript:void(0);">Food Product</a><span></span></li><li id="pf4"><a href="javascript:void(0);">Jewellery</a><span></span></li><li id="pf5"><a href="javascript:void(0);">Product</a><span></span></li><li id="pf6"><a href="javascript:void(0);">People</a><span></span></li><li id="pf7"><a href="javascript:void(0);">Nature &amp; Landscape</a></li></ul>');

 		 fbFlag = false;
 		 if( $("div").hasClass("fancybox-wrap") ) {
 		 	fbFlag = true;
 		 }

 		$("#pf1").click(function(){
			if(!fbFlag) {
				$("a.home_gallery1").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery1").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf1").addClass("activeGal");
		});
		$("#pf2").click(function(){
			if(!fbFlag) {
				$("a.home_gallery2").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery2").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf2").addClass("activeGal");
		});
		$("#pf3").click(function(){
			if(!fbFlag) {
				$("a.home_gallery3").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery3").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf3").addClass("activeGal");
		});
		$("#pf4").click(function(){
			if(!fbFlag) {
				$("a.home_gallery4").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery4").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf4").addClass("activeGal");
		});
		$("#pf5").click(function(){
			if(!fbFlag) {
				$("a.home_gallery5").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery5").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf5").addClass("activeGal");
		});
		$("#pf6").click(function(){
			if(!fbFlag) {
				$("a.home_gallery6").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery6").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf6").addClass("activeGal");
		});
		$("#pf7").click(function(){
			if(!fbFlag) {
				$("a.home_gallery7").colorbox({open:true});
			}
			if(fbFlag) {
				$("a.gallery7").colorbox({open:true});
			}

			$(".portfolioList > li").removeClass("activeGal");
			$("#pf7").addClass("activeGal");
		});

 		var galNum;
 		if(	$(this).hasClass("home_gallery1") || $(this).hasClass("gallery1") ){
 			galNum = 1;
 		}
 		if(	$(this).hasClass("home_gallery2") || $(this).hasClass("gallery2") ){
 			galNum = 2;
 		}
 		if(	$(this).hasClass("home_gallery3") || $(this).hasClass("gallery3") ){
 			galNum = 3;
 		}
 		if(	$(this).hasClass("home_gallery4") || $(this).hasClass("gallery4") ){
 			galNum = 4;
 		}
 		if(	$(this).hasClass("home_gallery5") || $(this).hasClass("gallery5") ){
 			galNum = 5;
 		}
 		if(	$(this).hasClass("home_gallery6") || $(this).hasClass("gallery6") ){
 			galNum = 6;
 		}
 		if(	$(this).hasClass("home_gallery7") || $(this).hasClass("gallery7") ){
 			galNum = 7;
 		}

 		$(".portfolioList > li").removeClass("activeGal");
 		switch(galNum){

 			case 1: $("#pf1").addClass("activeGal");
 					break;

 			case 2: $("#pf2").addClass("activeGal");
 					break;

 			case 3: $("#pf3").addClass("activeGal");
 					break;

 			case 4: $("#pf4").addClass("activeGal");
 					break;

 			case 5: $("#pf5").addClass("activeGal");
 					break;

 			case 6: $("#pf6").addClass("activeGal");
 					break;

 			case 7: $("#pf7").addClass("activeGal");
 					break;

 		}

	});

	var childObj;

	$(".cycle-slideshow").hover(function(){
		
		var hoveredObj = $(this).parent();

		childObj = $(hoveredObj).children()[0];

		var valueToChange;
		if($( childObj ).children("i").hasClass("architectural")){
			valueToChange = "-46px 0";
		}
		if($( childObj ).children("i").hasClass("industrialProduct")){
			valueToChange = "-46px -145px";
		}
		if($( childObj ).children("i").hasClass("foodProduct")){
			valueToChange = "-46px -290px";
		}
		if($( childObj ).children("i").hasClass("jewellery")){
			valueToChange = "-46px -435px";
		}
		if($( childObj ).children("i").hasClass("product")){
			valueToChange = "-46px -580px";
		}
		if($( childObj ).children("i").hasClass("people")){
			valueToChange = "-46px -727px";
		}
		if($( childObj ).children("i").hasClass("nature")){
			valueToChange = "-46px -872px";
		}

		$( childObj ).children("i").css("background-position",valueToChange);

	},
	function(){

		var valueToChange;
		if($( childObj ).children("i").hasClass("architectural")){
			valueToChange = "0 0";
		}
		if($( childObj ).children("i").hasClass("industrialProduct")){
			valueToChange = "0 -145px";
		}
		if($( childObj ).children("i").hasClass("foodProduct")){
			valueToChange = "0 -290px";
		}
		if($( childObj ).children("i").hasClass("jewellery")){
			valueToChange = "0 -435px";
		}
		if($( childObj ).children("i").hasClass("product")){
			valueToChange = "0 -580px";
		}
		if($( childObj ).children("i").hasClass("people")){
			valueToChange = "0 -727px";
		}
		if($( childObj ).children("i").hasClass("nature")){
			valueToChange = "0 -872px";
		}

		$( childObj ).children("i").css("background-position",valueToChange);

	});

});