$(document).ready(function(){

	$(".cboxElement").click(function(){

		$(".portfolioList").remove();
 		$("#cboxContent").append('<ul class="portfolioList clearfix animated fadeInUp de6ms"><li id="pf1"><a href="javascript:void(0);">Architectural</a><span></span></li><li id="pf2"><a href="javascript:void(0);">Industrial Product</a><span></span></li><li id="pf3"><a href="javascript:void(0);">Food Product</a><span></span></li><li id="pf4"><a href="javascript:void(0);">Jewellery</a><span></span></li><li id="pf5"><a href="javascript:void(0);">Product</a><span></span></li><li id="pf6"><a href="javascript:void(0);">People</a><span></span></li><li id="pf7"><a href="javascript:void(0);">Nature &amp; Landscape</a></li></ul>');

 		$("#pf1").click(function(){
			$("a.gallery1").colorbox({open:true});
		});
		$("#pf2").click(function(){
			$("a.gallery2").colorbox({open:true});
		});
		$("#pf3").click(function(){
			$("a.gallery3").colorbox({open:true});
		});
		$("#pf4").click(function(){
			$("a.gallery4").colorbox({open:true});
		});
		$("#pf5").click(function(){
			$("a.gallery5").colorbox({open:true});
		});
		$("#pf6").click(function(){
			$("a.gallery6").colorbox({open:true});
		});
		$("#pf7").click(function(){
			$("a.gallery7").colorbox({open:true});
		});

 		var galNum;
 		if(	$(this).hasClass("gallery1") ){
 			galNum = 1;
 		}
 		if(	$(this).hasClass("gallery2") ){
 			galNum = 2;
 		}
 		if(	$(this).hasClass("gallery3") ){
 			galNum = 3;
 		}
 		if(	$(this).hasClass("gallery4") ){
 			galNum = 4;
 		}
 		if(	$(this).hasClass("gallery5") ){
 			galNum = 5;
 		}
 		if(	$(this).hasClass("gallery6") ){
 			galNum = 6;
 		}
 		if(	$(this).hasClass("gallery7") ){
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

});