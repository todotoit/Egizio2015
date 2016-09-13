$( document ).ready(function() {
	$("body").height($( window ).height());
	 $("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));

	var d = new Date('December 25, 2013');
	$('#clock-2').tinyTimer({ from: d, format: '%d Days, %h Hours, %m Minutes, %s Seconds' });

	 /*$('#clock-2').countdown('2015/04/01 09:00:00').on('update.countdown', function(event) {
		 var format;
		 if(event.offset.days > 0) {
			 format = '%-D';
		 }
		 $(this).html(event.strftime(format));
		 }).on('finish.countdown', function(event) {
			 $(this).html('This offer has expired!');
	 });
*/


});

$( window ).resize(function() {
	$("body").height($( window ).height());
	$("#welcome").css( "margin-top", (($( window ).height() - $("#welcome").height())/2));
});