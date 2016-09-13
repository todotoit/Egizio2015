$( document ).ready(function() {

	// ambiente1
	$( "#a1-d1" ).click(function() {

		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
		$( "#detail-a1-1" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {		
			$('body').scrollTo($( "#detail-a1-1" ),1000);
		}, 600);
	});
	
	
	$( "#detail-a1-1 .c2-close" ).click(function() {

		$( "#detail-a1-1" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#detail-a1-2" ),600);
	
	});
		
		
		
	$( "#a1-d2" ).click(function() {
		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
		$( "#detail-a1-2" ).slideDown( "slow", function() {
		  // Animation complete.
		});

		setTimeout(function() {
			$('body').scrollTo($( "#detail-a1-2" ),600);
		}, 600);	

	});
	
	
	$( "#detail-a1-2 .c2-close" ).click(function() {

		$( "#detail-a1-2" ).slideUp( "slow", function() {
			  // Animation complete.
			});

		$('body').scrollTo($( "#wrapper" ),1000);

	});

	// ambiente2
	$( "#a2-d1" ).click(function() {
		
		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
		$( "#detail-a2-1" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {	
			('body').scrollTo($( "#detail-a2-1" ),1000);
		}, 600);
	});
	
	
	$( "#detail-a2-1 .c2-close" ).click(function() {

		$( "#detail-a2-1" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#to_a2" ),1000);
	});
		
		
		
	$( "#a2-d2" ).click(function() {
		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
		$( "#detail-a2-2" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {	
			$('body').scrollTo($( "#detail-a2-2" ),1000);
		}, 600);
	});

	
	$( "#detail-a2-2 .c2-close" ).click(function() {

		$( "#detail-a2-2" ).slideUp( "slow", function() {
			  // Animation complete.
			});

		$('body').scrollTo($( "#to_a2" ),1000);

	});
		
		
	// ambiente3
	$( "#a3-d1" ).click(function() {
		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
		$( "#detail-a3-1" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {		
			$('body').scrollTo($( "#detail-a3-1" ),1000);
		}, 600);
	});

	
	$( "#detail-a3-1 .c2-close" ).click(function() {

		$( "#detail-a3-1" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#to_a3" ),1000);
	});
		
		
		
	$( "#a3-d2" ).click(function() {
	
		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});
	
		$( "#detail-a3-2" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {			
			$('body').scrollTo($( "#detail-a3-2" ),1000);
		}, 600);	
	});
	
	
	$( "#detail-a3-2 .c2-close" ).click(function() {


		$( "#detail-a3-2" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#to_a3" ),1000);
	});
		
		
	// ambiente4
	$( "#a4-d1" ).click(function() {

		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$( "#detail-a4-1" ).slideDown( "slow", function() {
		  // Animation complete.
		});
	
		setTimeout(function() {			
			$('body').scrollTo($( "#detail-a4-1" ),1000);
		}, 600);	
	});
	
	
	$( "#detail-a4-1 .c2-close" ).click(function() {


		$( "#detail-a4-1" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#to_a4" ),1000);
	});
		
		
		
	$( "#a4-d2" ).click(function() {

		$( ".detail-c2" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$( "#detail-a4-2" ).slideDown( "slow", function() {
		  // Animation complete.
		});
		
		setTimeout(function() {			
			$('body').scrollTo($( "#detail-a4-1" ),1000);
		}, 600);
	
	});
	
	
	$( "#detail-a4-2 .c2-close" ).click(function() {

		$( "#detail-a4-2" ).slideUp( "slow", function() {
		  // Animation complete.
		});

		$('body').scrollTo($( "#to_a4" ),1000);
	});
});