$( document ).ready(function() {
	
	$("#container").height($( window ).height());
	 $("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));
	
	$("#logo-home-mobile").height(($( window ).height()-210));
	$("#logo-home-mobile img").height(($( window ).height()-210));
	 
	/*
	$('#container').mousemove(function(e){
	  var mousePosX = (e.pageX/$(window).width())*50;
	  //var mousePosY = (e.pageY/$(window).width())*100;
	  //$('#container').css('backgroundPosition', mousePosX+'% ' +'-'+mousePosY+'px');
	  $('#container').css('backgroundPositionX', mousePosX+'% ');
	}); 
	*/
	
	
	

});

$( window ).resize(function() {
	$("#container").height($( window ).height());
	$("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));
	$("#logo-home-mobile").height(($( window ).height()-210));
	$("#logo-home-mobile img").height(($( window ).height()-210));
});