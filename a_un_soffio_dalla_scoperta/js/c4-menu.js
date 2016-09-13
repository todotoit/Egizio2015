var app = angular.module('c4app');

app.directive('menuMain', function () {

	return {
		restrict: 'A',
		link: function(scope, $elm) {


			var menuStatus = 0;

			

			$('#logo-black')
			        .hover(function() {
						$( '#logo-black' ).stop().animate({
							opacity: 0
							}, "slow", function() {
							// Animation complete.
						});
						$( "#logo-top" ).stop().animate({
							opacity: 1
							}, "normal", function() {
							// Animation complete.
						});	
						$( "#logo-bot-2" ).stop().animate({
							opacity: 1,
							y:0
							}, 500, function() {
							// Animation complete.
						});	
							  
							
							
							 
			        }, function() { 
			        	$( '#logo-black' ).stop().animate({
							opacity: 1
							}, "slow", function() {
							// Animation complete.
						});         
			            $( "#logo-top" ).stop().animate({
							opacity: 0
							}, "slow", function() {
							// Animation complete.
						});	
						$( "#logo-bot-2" ).stop().transition({
							opacity: 0,
							y:-20
							}, "normal", function() {
							// Animation complete.
						});	
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
						$( '#logo-black' ).stop().animate({
							opacity: 0
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
						$( '#logo-black' ).stop().animate({
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
						$( '#logo-black' ).stop().animate({
							opacity: 0
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
						$( '#logo-black' ).stop().animate({
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
						$( '#logo-black' ).stop().animate({
							opacity: 0
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
						$( '#logo-black' ).stop().animate({
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
						$( '#logo-black' ).stop().animate({
							opacity: 0
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
						$( '#logo-black' ).stop().animate({
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