jQuery(document).ready(function($) {


	var mastheadheight = $('.header').outerHeight();
	//console.log(mastheadheight);
	$(".banner,.main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.header').addClass('fixed-header');
	    }
	    else {
	        $('.header').removeClass('fixed-header');
	    }
	}).scroll();


});
