function imgSwitchL(left, center, right){
	left.removeClass( "left" ).addClass( "right" );
	center.removeClass( "center" ).addClass( "left" );
	right.removeClass( "right" ).addClass( "center" );
}

function imgSwitchR(left, center, right){
	left.removeClass( "left" ).addClass( "center" );
	center.removeClass( "center" ).addClass( "right" );
	right.removeClass( "right" ).addClass( "left" );
}
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