var app = angular.module('c4app');

app.directive('menuMain', function () {

	return {
		restrict: 'A',
		link: function(scope, $elm) {


			var menuStatus = 0;

			

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
				
				$('.menu-1')
			        .hover(function() {
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#b08d64"}, 'slow');
			            $('.menu-1 .img-over').stop().animate({ opacity:1}, 'slow');
			            $('.menu-1 .img-back').stop().animate({ opacity:0}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: 0,
							}, 500, function() {
							// Animation complete.
						});
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
						$( "#logo-top" ).stop().animate({
							opacity: 1
							}, "normal", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 1,
							y:0
							}, "slow", function() {
						});
						menuStatus = 1;
			        }, function() {
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1 .img-over').stop().animate({ opacity:0}, 'slow');
			            $('.menu-1 .img-back').stop().animate({ opacity:1}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: -380,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 0;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
			            $( "#logo-top" ).stop().animate({
							opacity: 0
							}, "slow", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 0,
							y:-20
							}, "normal", function() {
						});	
			    });
			    
			    $('.menu-2')
			        .hover(function() {
			        		$('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#b08d64"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2 .img-over').stop().animate({ opacity:1}, 'slow');
						$('.menu-2 .img-back').stop().animate({ opacity:0}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: 0,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 1;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
						$( "#logo-top" ).stop().animate({
							opacity: 1
							}, "normal", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 1,
							y:0
							}, "slow", function() {
						});
			        }, function() {
			        	 	$('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2 .img-over').stop().animate({ opacity:0}, 'slow');
						$('.menu-2 .img-back').stop().animate({ opacity:1}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: -380,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 0;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
			            $( "#logo-top" ).stop().animate({
							opacity: 0
							}, "slow", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 0,
							y:-20
							}, "normal", function() {
						});	
			    });
			    
			    $('.menu-3')
			        .hover(function() {
			            $('.menu-3').stop().animate({ color:"#b08d64"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-3 .img-over').stop().animate({ opacity:1}, 'slow');
			            $('.menu-3 .img-back').stop().animate({ opacity:0}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: 0,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 1;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
						$( "#logo-top" ).stop().animate({
							opacity: 1
							}, "normal", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 1,
							y:0
							}, "slow", function() {
						});
			        }, function() {
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-3 .img-over').stop().animate({ opacity:0}, 'slow');
			            $('.menu-3 .img-back').stop().animate({ opacity:1}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: -380,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 0;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
			            $( "#logo-top" ).stop().animate({
							opacity: 0
							}, "slow", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 0,
							y:-20
							}, "normal", function() {
						});	
			    });
			    
			    $('.menu-4')
			        .hover(function() {
			            $('.menu-4').stop().animate({ color:"#b08d64"}, 'slow');
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-4 .img-over').stop().animate({ opacity:1}, 'slow');
			            $('.menu-4 .img-back').stop().animate({ opacity:0}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: 0,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 1;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
						$( "#logo-top" ).stop().animate({
							opacity: 1
							}, "normal", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 1,
							y:0
							}, "slow", function() {
						});
			        }, function() {
			            $('.menu-4').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-4 .img-over').stop().animate({ opacity:0}, 'slow');
			            $('.menu-4 .img-back').stop().animate({ opacity:1}, 'slow');
			            $( "#menu-hid" ).stop().transition({
							y: -380,
							}, 500, function() {
							// Animation complete.
						});
						menuStatus = 0;
						$( '#logo' ).stop().animate({
							opacity: 1
							}, "slow", function() {
						});
			            $( "#logo-top" ).stop().animate({
							opacity: 0
							}, "slow", function() {
						});	
						$( "#logo-bot" ).stop().transition({
							opacity: 0,
							y:-20
							}, "normal", function() {
						});	
			    });
			    
			    
			    
			    $('#menu-hid')
			        .hover(function() {
			            
			        }, function() {
			            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
			            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
			    });

			//});


			$( window ).resize(function() {
				$("#dvLoading").height($( window ).height());
				$("#rotate-device").height($( window ).height());
				$("#resize-browser").height($( window ).height());
			});

		
		}
	}

});
