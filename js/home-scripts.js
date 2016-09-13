$( document ).ready(function() {
	
	$("#container").height($( window ).height());
	 $("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));

	 
	/*
	$('#container').mousemove(function(e){
	  var mousePosX = (e.pageX/$(window).width())*50;
	  //var mousePosY = (e.pageY/$(window).width())*100;
	  //$('#container').css('backgroundPosition', mousePosX+'% ' +'-'+mousePosY+'px');
	  $('#container').css('backgroundPositionX', mousePosX+'% ');
	}); 
	*/
	
	$('#clock').countdown('2015/04/02 09:00:00').on('update.countdown', function(event) {
		 var format = '%-D';
		 if(event.offset.days > 0) {
			 format = '%-D';
		 }
		 $(this).html(event.strftime(format));
		 }).on('finish.countdown', function(event) {
			 $(this).html('This offer has expired!');
	 });

});

$( window ).resize(function() {
	$("#container").height($( window ).height());
	$("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));
});