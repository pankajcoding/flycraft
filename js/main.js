var t1=new TimelineLite();

$(document).ready(function(){
	$('.link1').click(function(event) {
		// console.log('sdsd');
		// $('.section-wrap1').slideToggle("slow");
		// console.log('sdsd');
		// var linkwrap1=$('.link1-wrap');
		// var linkwrap2=$('.link2-wrap');
		// var linkwrap3=$('.link3-wrap');
		// var linkwrap4=$('.link4-wrap');
		// t1.to(linkwrap1,.5,{y:'45%',width:'95vw'},0);
		// t1.to(linkwrap2,.3,{y:'-200%'},0)
		//   .to(linkwrap3,.3,{x:'-2000%'},0)
		//   .to(linkwrap4,.3,{y:'200%'},0)
		// ;
		$('.menu-container').addClass('noopacity');
		$('.chapter1').toggleClass('active');
		$('.nav1').addClass('active');
		$('.nav-container').removeClass('outleft');
	});
	$('.link2').click(function(event) {
		/* Act on the event */
		$('.menu-container').addClass('noopacity');
		$('.chapter2').toggleClass('active');
		$('.nav1').addClass('active');
		$('.nav-container').removeClass('outleft');
	});
	$('.link3').click(function(event) {
		/* Act on the event */
		$('.menu-container').addClass('noopacity');
		$('.chapter3').toggleClass('active');
		$('.nav1').addClass('active');
		$('.nav-container').removeClass('outleft');
	});
	$('.link4').click(function(event) {
		/* Act on the event */

		$('.menu-container').addClass('noopacity');
		$('.chapter4').toggleClass('active');
		$('.nav1').addClass('active');
		$('.nav-container').removeClass('outleft');
	});

	$('.nav-wrap li').click(function(event) {
		$('.nav-wrap li').removeClass('active');
		$(this).addClass('active');
		var index=$(this).index();
		console.log(index);
		$('.menu-container').addClass('noopacity');
		$('.chapter').removeClass('active');
		index++;
		console.log('.chapter'+index);
		
		$('.chapter'+index).toggleClass('active');
	});
});



// desktop

jQuery(document).ready(function($) {
	console.log('sds');
	$('.card').click(function(event) {
			var index=$(this).index();
			console.log(index);
			$('.subchapter-tabs>div').removeClass('active');
			$('.subchapter-tabs>div').eq(index).addClass('active');
		    $('.subchapter-tabs').addClass('inview');
		    $('.subchapter-cards').fadeOut('fast', function() {

		    $('.text').eq(index).removeClass('novisible').addClass('block-display').addClass('zoomIn animated');	
	    });
	});
});