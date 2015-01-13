$(document).ready(function(){

	var fbFlag = false;
	$(".cboxElement").click(function(){

		 fbFlag = false;
 		 if( $("div").hasClass("fancybox-wrap") ) {
 		 	fbFlag = true;
 		 }

 		 if(!fbFlag) {
		 	$(".portfolioList1").remove();
		 	$(".portfolioList2").remove();
		 	// alert("no FB");
 		 	$("#cboxContent").append('<ul class="portfolioList1 pfList clearfix animated fadeInUp de6ms"><li id="pf1_1"><a href="javascript:void(0);">Architectural</a><span></span></li><li id="pf1_2"><a href="javascript:void(0);">Industrial Product</a><span></span></li><li id="pf1_3"><a href="javascript:void(0);">Food Product</a><span></span></li><li id="pf1_4"><a href="javascript:void(0);">Jewellery</a><span></span></li><li id="pf1_5"><a href="javascript:void(0);">Product</a><span></span></li><li id="pf1_6"><a href="javascript:void(0);">People</a><span></span></li><li id="pf1_7"><a href="javascript:void(0);">Nature &amp; Landscape</a></li></ul>');
 		 }

		if(fbFlag) {
			$(".portfolioList1").remove();
			$(".portfolioList2").remove();
			// alert("yes FB");
 		 	$("#cboxContent").append('<ul class="portfolioList2 pfList clearfix animated fadeInUp de6ms"><li id="pf2_1"><a href="javascript:void(0);">Architectural</a><span></span></li><li id="pf2_2"><a href="javascript:void(0);">Industrial Product</a><span></span></li><li id="pf2_3"><a href="javascript:void(0);">Food Product</a><span></span></li><li id="pf2_4"><a href="javascript:void(0);">Jewellery</a><span></span></li><li id="pf2_5"><a href="javascript:void(0);">Product</a><span></span></li><li id="pf2_6"><a href="javascript:void(0);">People</a><span></span></li><li id="pf2_7"><a href="javascript:void(0);">Nature &amp; Landscape</a></li></ul>');
		}

 		$("#pf1_1").click(function(){
			if(!fbFlag) {
				$("a.home_gallery1").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_1").addClass("activeGal");
		});
		$("#pf1_2").click(function(){
			if(!fbFlag) {
				$("a.home_gallery2").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_2").addClass("activeGal");
		});
		$("#pf1_3").click(function(){
			if(!fbFlag) {
				$("a.home_gallery3").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_3").addClass("activeGal");
		});
		$("#pf1_4").click(function(){
			if(!fbFlag) {
				$("a.home_gallery4").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_4").addClass("activeGal");
		});
		$("#pf1_5").click(function(){
			if(!fbFlag) {
				$("a.home_gallery5").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_5").addClass("activeGal");
		});
		$("#pf1_6").click(function(){
			if(!fbFlag) {
				$("a.home_gallery6").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_6").addClass("activeGal");
		});
		$("#pf1_7").click(function(){
			if(!fbFlag) {
				$("a.home_gallery7").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf1_7").addClass("activeGal");
		});

		// List 2

		$("#pf2_1").click(function(){
			if(fbFlag) {
				$("a.gallery1").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_1").addClass("activeGal");
		});
		$("#pf2_2").click(function(){
			if(fbFlag) {
				$("a.gallery2").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_2").addClass("activeGal");
		});
		$("#pf2_3").click(function(){
			if(fbFlag) {
				$("a.gallery3").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_3").addClass("activeGal");
		});
		$("#pf2_4").click(function(){
			if(fbFlag) {
				$("a.gallery4").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_4").addClass("activeGal");
		});
		$("#pf2_5").click(function(){
			if(fbFlag) {
				$("a.gallery5").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_5").addClass("activeGal");
		});
		$("#pf2_6").click(function(){
			if(fbFlag) {
				$("a.gallery6").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_6").addClass("activeGal");
		});
		$("#pf2_7").click(function(){
			if(fbFlag) {
				$("a.gallery7").colorbox({open:true});
			}

			$(".pfList > li").removeClass("activeGal");
			$("#pf2_7").addClass("activeGal");
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

 		$(".pfList > li").removeClass("activeGal");
 		switch(galNum){

 			case 1: $("#pf1_1, #pf2_1").addClass("activeGal");
 					break;

 			case 2: $("#pf1_2, #pf2_2").addClass("activeGal");
 					break;

 			case 3: $("#pf1_3, #pf2_3").addClass("activeGal");
 					break;

 			case 4: $("#pf1_4, #pf2_4").addClass("activeGal");
 					break;

 			case 5: $("#pf1_5, #pf2_5").addClass("activeGal");
 					break;

 			case 6: $("#pf1_6, #pf2_6").addClass("activeGal");
 					break;

 			case 7: $("#pf1_7, #pf2_7").addClass("activeGal");
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