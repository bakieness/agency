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