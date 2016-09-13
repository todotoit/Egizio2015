var time=500;

$( document ).ready(function() {
		
	/* APERTURA DEL CAPITOLO */
	
	$( "#cover" ).fadeOut( "slow", function() {
		// Animation complete
		});
	$( "#ambiente_4" ).fadeIn( "slow", function() {
		// Animation complete
		});
	$( "#ambiente_4" ).addClass( "current" );
	
	$( "#ambiente_4 .resizable" ).animate({
			width: ($( window ).width())/2,
		 }, 3000, function() {
		   // Animation complete.
		 });
	
	
	/* VISUALIZZAZIONE DEI SINGOLI AMBIENTI */
	
	$( "#ambiente-1" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#ex_sala_delle_mummie" ).fadeIn( "slow", function() {
			// Animation complete
			});
		
		$( "#ex_sala_delle_mummie .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });	
		
		$('#sdm-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#sdm-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });	
		
		$( "#ex_sala_delle_mummie" ).addClass( "current" );
	});
	
	$( "#ambiente-2" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#sala_delle_steli" ).fadeIn( "slow", function() {
			// Animation complete
			});
		
		$( "#sala_delle_steli .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });	
		
		$('#sds-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#sds-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#sala_delle_steli" ).addClass( "current" );
	});
	
	$( "#ambiente-3" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#sala_schiaparelli" ).fadeIn( "slow", function() {
			// Animation complete
			});
		
		$( "#sala_schiaparelli .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });	
			 
		$('#ss-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#ss-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#sala_schiaparelli" ).addClass( "current" );
	});
	
	$( "#ambiente-4" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#ambiente_4" ).fadeIn( "slow", function() {
			// Animation complete
			});
			
		$( "#ambiente_4 .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });
			
		$('#gs-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#gs-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#ambiente_4" ).addClass( "current" );
	});

	$( "#ambiente-5" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#ambiente_5" ).fadeIn( "slow", function() {
			// Animation complete
			});
			
		$( "#ambiente_5 .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });
			
		$('#a5-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#a5-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#ambiente_5" ).addClass( "current" );
	});

	$( "#ambiente-6" ).click(function() {
		$( "#menu-stanze div h3" ).removeClass( "stanza-sel" );
		$( this ).addClass( "stanza-sel" );
		$( ".current" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#ambiente_6" ).fadeIn( "slow", function() {
			// Animation complete
			});
			
		$( "#ambiente_6 .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });
			
		$('#a6-year-2014').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#a6-year-2015').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#ambiente_6" ).addClass( "current" );
	});
	
	
	
	$(".detail-on.detail-old-room" )
        .hover(function() {
            $('.background-lmnt .year-img').stop().animate({ "background-color":"rgba(38, 38, 38, 1);"}, 'slow');
        }, function() {
            $('.background-lmnt .year-img').stop().animate({"background-color":"rgba(38, 38, 38, 0.2);"}, 'slow');
    });
	
	$(".detail-on.detail-new-room" )
        .hover(function() {
            $('.img-front .year-img').stop().animate({ "background-color":"rgba(38, 38, 38,1);"}, 'slow');
        }, function() {
            $('.img-front .year-img').stop().animate({"background-color":"rgba(38, 38, 38, 0.2);"}, 'slow');
    });
	
	
	
	/* DIMENSIONAMENTO DEGLI ELEMENTI ----- */
	
	
	$("#grid").height($( window ).height());
	$("#cover").height($( window ).height());
	$(".lightbox").height($( window ).height());
	$(".container").height($( window ).height());
	$(".background-lmnt").height($( window ).height());
	$(".img-front").width($( window ).width());
	$(".img-front").height($( window ).height());
	
	$(".ambiente-wrapper").width($( window ).width());
	$(".ambiente-wrapper").height($( window ).height());
	
	$("#img-back").width($( window ).width());
/*	$("#img-back").height($( window ).height());*/
	
	$(".resizable").css({
      "max-width": $( window ).width()-193,
    });
	
	console.log($( window ).height());
	if ($( window ).height() > 700){
		$(".detail-open").css( "top", (($( window ).height() - ($(".detail-open").height()+45))/2));

	}
	
	if ($( window ).height() > 820){
		$(".year-img").css( "top", (((($( window ).height()-550)/2)-31)/2));

	}
	
	$("#cursore").css( "left", ($( window ).width()/2)-24);
	$("#cursore").css( "top", (($( window ).height() - ($("#cursore").height()+45))/2));
	
	/* ------------------------------------ */
	

});

$( window ).resize(function() {

	/* DIMENSIONAMENTO DEGLI ELEMENTI ----- */
	/* AL VARIARE DELLA FINESTRA ---------- */
	$("#dvLoading").height($( window ).height());

	$("#grid").height($( window ).height());
	$("#cover").height($( window ).height());
	$("#lightbox").height($( window ).height());
	$(".container").height($( window ).height());
	$(".background-lmnt").height($( window ).height());
	$(".img-front").width($( window ).width());
	$(".img-front").height($( window ).height());
	
	$(".ambiente-wrapper").width($( window ).width());
	$(".ambiente-wrapper").height($( window ).height());
	
	$("#img-back").width($( window ).width());
	/*$("#img-back").height($( window ).height());*/
	
	$(".resizable").css({
      "max-width": $( window ).width()-193,
    });
	
	if ($( window ).height() > 700){
		$(".detail-open").css( "top", (($( window ).height() - ($(".detail-open").height()+45))/2));
	}
	else{
		$(".detail-open").css( "top", "52px");
	}
	
	if ($( window ).height() > 820){
		$(".year-img").css( "top", (((($( window ).height()-550)/2)-31)/2));
	}
	else{
		$(".year-img").css( "top", "52px");
	}
	
	$("#cursore").css( "top", (($( window ).height() - ($("#cursore").height()+45))/2));
	
	/* ------------------------------------ */
});
