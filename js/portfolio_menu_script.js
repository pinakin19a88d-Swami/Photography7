$(document).ready(function(){

	$(".cboxElement").click(function(){

		$(".portfolioList").remove();
 		$("#cboxContent").append('<ul class="portfolioList clearfix animated fadeInUp de6ms"><li id="pf1"><a href="javascript:void(0);">Architectural</a><span></span></li><li id="pf2"><a href="javascript:void(0);">Industrial Product</a><span></span></li><li id="pf3"><a href="javascript:void(0);">Food Product</a><span></span></li><li id="pf4"><a href="javascript:void(0);">Jewellery</a><span></span></li><li id="pf5"><a href="javascript:void(0);">Product</a><span></span></li><li id="pf6"><a href="javascript:void(0);">People</a><span></span></li><li id="pf7"><a href="javascript:void(0);">Nature &amp; Landscape</a></li></ul>');

	});

});