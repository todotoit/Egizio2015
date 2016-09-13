var altezzaRimanente;

$( document ).ready(function() {
	
	console.log($('iframe')[1]);
	console.log($('iframe')[0]);
	$('#img1')
        .hover(function() {
            $('.menu-4').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-4 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-4 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-4').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-4 .img-over').stop().animate({ opacity:0}, 'slow');
            $('.menu-4 .img-back').stop().animate({ opacity:1}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: -380,
				}, "slow", function() {
				// Animation complete.
			});
    });
	
	$("#active-veil").width($( window ).width()-40);
	/*$( "#active-veil" ).click(function() {
		 $(this).fadeOut(1000, function() {
		 // Animation complete.
		 });
		 $( "#veil" ).fadeOut(1000, function() {
		 // Animation complete.
		 });
		 $("#cover h1").fadeOut( 500, function() {
		 // Animation complete.
		 });
		 $("#quote").fadeOut( 500, function() {
		 // Animation complete.
		 });
	})*/;
	
	$( "#video-player" ).click(function() {
		 console.log("click su YT");
	});
	
	
	altezzaRimanente = $( window ).height() - 275;
	
	if ($( window ).height() >430){
		 $( ".arrow" ).fadeIn( "fast" );
		 $( ".arrow" ).css({
		   "top": (altezzaRimanente/2)+230,
		 });
	}else{
		$( ".arrow" ).fadeOut( "fast" );
	}	
	
});


$(window).scroll(function (event) {
	
	altezzaRimanente = $( window ).height() - 275;
	
	if ($( window ).height() >430){
		 $( ".arrow" ).fadeIn( "fast" );
		 $( ".arrow" ).css({
		   "top": (altezzaRimanente/2)+230,
		 });
	}else{
		$( ".arrow" ).fadeOut( "fast" );
	}		

});


$( window ).resize(function() {
	$("#active-veil").width($( window ).height()-40);
	$("#lb-backstage").height(500);
	altezzaRimanente = $( window ).height() - 275;
	if ($( window ).height() >430){
		 $( ".arrow" ).fadeIn( "fast" );
		 $( ".arrow" ).css({
		   "top": (altezzaRimanente/2)+230,
		 });
	}else{
	
		$( ".arrow" ).fadeOut( "fast" );
	}
});