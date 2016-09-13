$( document ).ready(function() {


$("#dvLoading").height($( window ).height());
$("#rotate-device").height($( window ).height());
$("#resize-browser").height($( window ).height());

$('#logo-wrap')
        .hover(function() {
        	$( "#box" ).stop().animate({
							opacity: 1
					}, "slow");
					
					$( "#arrow" ).stop().animate({
							opacity: 1
						}, "slow");	

        	$( "#logo" ).stop().animate({
							top:57
					}, "slow");

					$( "#logo-top" ).stop().animate({
						opacity: 1,
						top:29
						}, "slow");	
					$( "#logo-bot" ).stop().animate({
						opacity: 1,
						top:28
						}, "slow");				  
				
				
				 
        }, function() {
        	$( "#arrow" ).stop().animate({
							opacity: 0
					}, "slow");

					$( "#box" ).stop().animate({
						opacity:0.25
					}, "slow");	

        	$( "#logo" ).stop().animate({
							top:42
					}, "slow");

					$( "#logo-top" ).stop().animate({
						opacity: 0,
						top:14
						}, "slow");	
					$( "#logo-bot" ).stop().animate({
						opacity: 0,
						top:0
						}, "slow");	
        });



$('.menu-container')
        .hover(function() {
			$( "#logo-top" ).stop().animate({
				opacity: 1
				}, "normal", function() {
				// Animation complete.
			});	
			$( "#logo-bot" ).stop().animate({
				opacity: 1,
				top:0
				}, "slow", function() {
				// Animation complete.
			});	
				  
				
				
				 
        }, function() {          
            $( "#logo-top" ).stop().animate({
				opacity: 0
				}, "slow", function() {
				// Animation complete.
			});	
			$( "#logo-bot" ).stop().animate({
				opacity: 0,
				top:-20
				}, "normal", function() {
				// Animation complete.
			});	
        });
	
	$('.menu-1')
        .hover(function() {
            $('.menu-1').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-1 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-1 .img-back').stop().animate({ opacity:0}, 'slow');
            console.log("rollover menu-1");
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-1 .img-over').stop().animate({ opacity:0}, 'slow');
            $('.menu-1 .img-back').stop().animate({ opacity:1}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: -380,
				}, "slow", function() {
				// Animation complete.
			});
    });
    
    $('.menu-2')
        .hover(function() {
            $('.menu-2').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-2 .img-over').stop().animate({ opacity:1}, 'slow');
			$('.menu-2 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-2 .img-over').stop().animate({ opacity:0}, 'slow');
			$('.menu-2 .img-back').stop().animate({ opacity:1}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: -380,
				}, "slow", function() {
				// Animation complete.
			});
    });
    
    $('.menu-3')
        .hover(function() {
            $('.menu-3').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-3 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-3 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-3 .img-over').stop().animate({ opacity:0}, 'slow');
            $('.menu-3 .img-back').stop().animate({ opacity:1}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: -380,
				}, "slow", function() {
				// Animation complete.
			});
    });
    
    $('.menu-4')
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
    
    $('.menu-4.unactive')
        .hover(function() {
            $('.menu-4.unactive div > p:first-child').stop().animate({ opacity:0}, 'slow');
            $('.menu-4 div .un-over').stop().animate({ opacity:1}, 'slow');
            
        }, function() {
            $('.menu-4.unactive div > p:first-child').stop().animate({ opacity:1}, 'slow');
            $('.menu-4 div .un-over').stop().animate({ opacity:0}, 'slow');
    });
    
    $('.menu-3.unactive')
        .hover(function() {
            $('.menu-3.unactive div > p:first-child').stop().animate({ opacity:0}, 'slow');
            $('.menu-3 div .un-over').stop().animate({ opacity:1}, 'slow');
            
        }, function() {
            $('.menu-3.unactive div > p:first-child').stop().animate({ opacity:1}, 'slow');
            $('.menu-3 div .un-over').stop().animate({ opacity:0}, 'slow');
    });

});


$( window ).resize(function() {

	$("#dvLoading").height($( window ).height());
	$("#rotate-device").height($( window ).height());
	$("#resize-browser").height($( window ).height());
});
