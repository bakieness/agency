$(document).ready(function ($) {
	$(".controls .left").click(function(){
		var left = $( ".items .left" );
		var right = $( ".items .right" );
		var center = $( ".items .center" );
		imgSwitchL(left, center, right);
	});

	$(".controls .right").click(function(){
		var left = $( ".items .left" );
		var right = $( ".items .right" );
		var center = $( ".items .center" );
		imgSwitchR(left, center, right);
	});

	$(".menu").click(function(){
		$("nav").toggleClass('open');
	});
});