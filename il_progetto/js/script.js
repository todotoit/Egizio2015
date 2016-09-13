var time=500;

$( document ).ready(function() {
	
	$("#credits").height($( window ).height());
	$(".img-gallery").height($( window ).height());
	$(".dida").css( "margin-top", (($( window ).height() - $(".dida").height())/2));
	$(".arrow").height($( window ).height());
	
	$( "#credits-but" ).click(function(event) {
		event.preventDefault();		
/*		$('#credits').fadeIn({queue: false, duration: 'slow'});*/
		$('#credits').animate({ top: "0px" }, 'slow');
	});
	
	$( "#progetto-but" ).click(function(event) {
		event.preventDefault(event);		
		/*$('#credits').fadeOut({queue: false, duration: 'slow'});*/
		$('#credits').animate({ top: "100%" }, 'slow');
	});
	
	var n=0;
	var totSlide = 11
	
	$( "#next-arr" ).hover(
	  function() {
		$( ".next" ).animate({
			 left: "-95px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "-30px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "20px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }, function() {
		$( ".next" ).animate({
			 left: "-55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "0px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "00px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }
	);
	
	
	
	
	$( "#next-arr" ).click(function() {
		if(n==0){
			n=n+1;
		}
		else{
			if(n>0 && n!=totSlide){
				n=n+1;
			}
			else{
				n=0;
			}
		}
	
		if(n>0){
			$( "#prev-arr" ).show();
		}
		
		if(n==0){
			$( "#prev-arr" ).hide();
		}
		
		
		

		if(n==0){
			console.log("entra nella condizione con n=0");
			$(".prev").css({
					   marginLeft: "100%",
					   left: "0px"
					});	
			$( "#gallery-"+(totSlide-1)).removeClass( "prev" );
			$( "#gallery-"+totSlide).addClass( "prev" );
			$( "#gallery-"+totSlide).removeClass( "current" );
			$( "#gallery-0").addClass( "current" );
			$( "#gallery-0").removeClass( "next" );
			$( "#gallery-1").addClass( "next" );

		}
	
		else {
			if(n==1){
				console.log("entra nella condizione con n=1");
				$(".prev").css({
					   marginLeft: "100%",
					   left: "0px"
					});	
				$( "#gallery-"+totSlide).removeClass( "prev" );
				$( "#gallery-0").addClass( "prev" );
				$( "#gallery-0").removeClass( "current" );
				$( "#gallery-1").addClass( "current" );
				$( "#gallery-1").removeClass( "next" );
				$( "#gallery-2").addClass( "next" );
			}
		
			else{
				if(n>1 && n!=totSlide){
					console.log("entra nella condizione con n>1");
					$(".prev").css({
					   marginLeft: "100%",
					   left: "0px"
					});	
					$( "#gallery-"+(n-2) ).removeClass( "prev" );
					$( "#gallery-"+(n-1) ).addClass( "prev" );
					$( "#gallery-"+(n-1) ).removeClass( "current" );
					$( "#gallery-"+n ).addClass( "current" );
					$( "#gallery-"+n ).removeClass( "next" );
					$( "#gallery-"+(n+1) ).addClass( "next" );

				}		  
	
				else{
					console.log("entra nell'ultima condizione");
					console.log(n);
					$(".prev").css({
					   marginLeft: "100%",
					   left: "0px"
					});	
					$( "#gallery-"+(n-2) ).removeClass( "prev" );
					$( "#gallery-"+(n-1) ).addClass( "prev" );
					$( "#gallery-"+(n-1) ).removeClass( "current" );
					$( "#gallery-"+n ).addClass( "current" );
					$( "#gallery-"+n ).removeClass( "next" );
					$( "#gallery-0").addClass( "next" );

				}  
			  }
			}
		
		if ($("#gallery-0").hasClass( "prev" )){
			$( ".prev" ).animate({
				marginLeft: "-200%",
				left: "0"
				}, time, function() {
				// Animation complete.
			});
		}		
		
		
		else{
			 $( ".prev" ).animate({
				 marginLeft: "-100%",
				 left: "0"
				 }, time, function() {
				 // Animation complete.
			 });
			 
			 	
		}
			
		 $( ".current" ).animate({
			 marginLeft: "0",
			 left: "-30px"
			 }, time, function() {
			 // Animation complete.
		 });
		 
		 $( ".next" ).animate({
			 left: "-95px"
			 }, time, function() {
			 // Animation complete.
		 });
				  
	});










	
	$( "#next-arr" ).hover(
	  function() {
		$( ".next" ).animate({
			 left: "-95px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "-30px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "20px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }, function() {
		$( ".next" ).animate({
			 left: "-55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "0px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "00px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }
	);
	
	
	$( "#start-wrapper" ).hover(
	  function() {
		$( ".next" ).stop().animate({
			 left: "-95px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).stop().animate({
			 left: "-30px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }, function() {
		$( ".next" ).stop().animate({
			 left: "-55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).stop().animate({
			 left: "0px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }
	);
	
	$( "#start-wrapper" ).click(function(event) {
		n=1
		console.log("START!");
		$( "#gallery-0").addClass( "prev" );
		$( "#gallery-0").removeClass( "current" );
		$( "#gallery-1").addClass( "current" );
		$( "#gallery-1").removeClass( "next" );
		$( "#gallery-2").addClass( "next" );

		
		$( "#prev-arr" ).show();	
			
		 if ($("#gallery-0").hasClass( "prev" )){
			$( ".prev" ).animate({
				marginLeft: "-200%",
				left: "0"
				}, time, function() {
				// Animation complete.
			});
		}
		 console.log("move gallery 1");
		  $( "#gallery-1" ).animate({
			 marginLeft: "0px",
			 left: "0px"
			 }, time, function() {
			 // Animation complete.
		 });
		 console.log("moved gallery 1");
		 $( ".next" ).animate({
			 left: "-55px"
			 }, time, function() {
			 // Animation complete.
		 });
				  
	});
	
	$( "#prev-arr" ).click(function() {
		
		
		
		if(n==0){
			n=13;
		}
		
		else{
			if(n>0 && n!=totSlide){
			n=n-1;
			 }
			else{
			n=n-1;
			}
		}
		
		$( ".next" ).animate({
			 left: "15px"
			 }, time/2, function() {
			 // Animation complete.
		 });
		
		if(n==0){
			$( "#prev-arr" ).hide();
		}
		
		if(n<totSlide){
			$( "#next-arr" ).show();
		}

		if(n==0){
			 $( "#gallery-"+totSlide).addClass( "prev" );
			 $( "#gallery-0").addClass( "current" );
			 $( "#gallery-0").removeClass( "prev" );
			 $( "#gallery-1").removeClass( "current" );
			 $( "#gallery-1").addClass( "next" );
			 $( "#gallery-2").removeClass( "next" );

		 }
		
		
		
		 else{
		 
		 
		 
			 if(n>0 && n!=totSlide){	
				 
				 $( "#gallery-"+(n-1) ).addClass( "prev" );
				 $( "#gallery-"+(n) ).removeClass( "prev" );
				 $( "#gallery-"+(n) ).addClass( "current" );
				 $( "#gallery-"+(n+1) ).removeClass( "current" );
				 $( "#gallery-"+(n+1) ).addClass( "next" );
				 $( "#gallery-"+(n+2) ).removeClass( "next" );
				 
			 }		  
	
			 if(n==12){	
			 	 $( "#gallery-"+(totSlide-2)).addClass( "prev" );
				 $( "#gallery-"+(totSlide-1)).removeClass( "prev" );
				 $( "#gallery-"+(totSlide-1)).addClass( "current" );
				 $( "#gallery-"+totSlide).removeClass( "current" );
				 $( "#gallery-"+totSlide).addClass( "next" );
				 $( "#gallery-0").removeClass( "next" );
			 }
	
			/*
			 if(n==13){	
			 				
				 $( "#gallery-12").addClass( "prev" );
				 $( "#gallery-13").removeClass( "prev" );
				 $( "#gallery-13").addClass( "current" );
				 $( "#gallery-0").removeClass( "current" );
				 $( "#gallery-0").addClass( "next" );
				 $( "#gallery-1").removeClass( "next" );
			 }*/  
		   }
	  	
	  	$( ".current" ).animate({
			 marginLeft: "0",
			 left: "30px"
			 }, time, function() {
			 // Animation complete.
		 });
		 
		 $( ".next" ).animate({
			 marginLeft: "100%",
			 left: "-15px"
			 }, time, function() {
			 // Animation complete.
		 });
		 $( ".prev" ).animate({
			 left: "55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  
	});
	
	$( "#prev-arr" ).hover(
	  function() {
		$( ".prev" ).animate({
			 left: "55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		$( ".next" ).animate({
			 left: "-15px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "30px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "-20px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }, function() {
	  	$( ".prev" ).animate({
			 left: "0px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		$( ".next" ).animate({
			 left: "-55px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".current" ).animate({
			 left: "0px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
		 $( ".dida" ).animate({
			 left: "00px"
			 }, time/1.5, function() {
			 // Animation complete.
		 });
	  }
	);
	

});

$( window ).resize(function() {
	$("#credits").height($( window ).height());
	$(".img-gallery").height($( window ).height());
	$(".dida").css( "margin-top", (($( window ).height() - $(".dida").height())/2));
	$(".arrow").height($( window ).height());
});