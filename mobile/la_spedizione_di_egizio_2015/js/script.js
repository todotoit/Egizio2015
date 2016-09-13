var time=500;

$( document ).ready(function() {
	
	$( "#veil" ).click(function() {
		 $(this).fadeOut(1000, function() {
		 // Animation complete.
		 });
		 $("#cover h1").fadeOut( 500, function() {
		 // Animation complete.
		 });
		 $("#quote").fadeOut( 500, function() {
		 // Animation complete.
		 });
	});
	
	
	$('.menu-1')
        .hover(function() {
            $('.menu-1').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-2 div h3').stop().animate({ color:"#b08d64"}, 'slow');          
            $('.menu-1 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-1 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-1').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-2 div h3').stop().animate({ color:"#fff"}, 'slow');
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
            $('.menu-2 div h3').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-2 .img-over').stop().animate({ opacity:1}, 'slow');
			$('.menu-2 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-2').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-2 div h3').stop().animate({ color:"#fff"}, 'slow');
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
            $('.menu-2 div h3').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-3 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-3 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-3').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-2 div h3').stop().animate({ color:"#fff"}, 'slow');
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
            $('.menu-2 div h3').stop().animate({ color:"#b08d64"}, 'slow');
            $('.menu-4 .img-over').stop().animate({ opacity:1}, 'slow');
            $('.menu-4 .img-back').stop().animate({ opacity:0}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: 0,
				}, "slow", function() {
				// Animation complete.
			});
        }, function() {
            $('.menu-4').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-2 div h3').stop().animate({ color:"#fff"}, 'slow');
            $('.menu-4 .img-over').stop().animate({ opacity:0}, 'slow');
            $('.menu-4 .img-back').stop().animate({ opacity:1}, 'slow');
            $( "#menu-hid" ).stop().animate({
				top: -380,
				}, "slow", function() {
				// Animation complete.
			});
    });
	
	
	
	
	
	$(".detail-on.detail-old-room" )
        .hover(function() {
            $('.background-lmnt .year-img').stop().animate({ "background-color":"rgba(38, 38, 38, 1);"}, 'slow');
        }, function() {
            $('.background-lmnt .year-img').stop().animate({"background-color":"rgba(38, 38, 38, 0.2);"}, 'slow');
    });
	
	/* APERTURA DEL CAPITOLO */
	
	$( "#cta-enter" ).click(function() {
		$( "#cover" ).fadeOut( "slow", function() {
			// Animation complete
			});
		$( "#ex_sala_delle_mummie" ).fadeIn( "slow", function() {
			// Animation complete
			});
		$( "#ex_sala_delle_mummie" ).addClass( "current" );
		
		$( "#ex_sala_delle_mummie .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		
		 
		
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
		
		$('#sdm-year-2006').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#sdm-year-2014').animate({
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
		
		$('#sds-year-2006').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#sds-year-2014').animate({
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
			 
		$('#ss-year-2006').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#ss-year-2014').animate({
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
		$( "#ex_galleria_sabauda" ).fadeIn( "slow", function() {
			// Animation complete
			});
			
		$( "#ex_galleria_sabauda .resizable" ).animate({
				width: ($( window ).width())/2,
			 }, 3000, function() {
			   // Animation complete.
			 });
			
		$('#gs-year-2006').animate({
				marginRight: "50%",
				right: "20px"
			 }, 3000, function() {
			   // Animation complete.
			 });
			 
		$('#gs-year-2014').animate({
				marginRight: "50%",
				right: "-90px"
			 }, 3000, function() {
			   // Animation complete.
			 });
		
		$( "#ex_galleria_sabauda" ).addClass( "current" );
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
	
	
	$( "#ex_sala_delle_mummie .detail-on.detail-old-room" ).click(function() {
		$('#sdm-year-2006').addClass( "year-sel" );
	});
	
	$( "#ex_sala_delle_mummie .detail-on.detail-new-room" ).click(function() {
		$('#sdm-year-2014').addClass( "year-sel" );
	});
	
	$( "#sala_delle_steli .detail-on.detail-old-room" ).click(function() {
		$('#sds-year-2006').addClass( "year-sel" );
	});
	
	$( "#sala_delle_steli .detail-on.detail-new-room" ).click(function() {
		$('#sds-year-2014').addClass( "year-sel" );
	});
	
	$( "#sala_schiaparelli .detail-on.detail-old-room" ).click(function() {
		$('#ss-year-2006').addClass( "year-sel" );
	});
	
	$( "#sala_schiaparelli .detail-on.detail-new-room" ).click(function() {
		$('#ss-year-2014').addClass( "year-sel" );
	});
	
	$( "#ex_galleria_sabauda .detail-on.detail-old-room" ).click(function() {
		$('#gs-year-2006').addClass( "year-sel" );
	});
	
	$( "#ex_galleria_sabauda .detail-on.detail-new-room" ).click(function() {
		$('#gs-year-2014').addClass( "year-sel" );
	});
	
	/* DETTAGLI VISITATI*/


	$( ".detail" ).click(function() {
		$(this).addClass( "detail-visited" );
	});
	
	/* APERTURA GENERICA */
	
	$( ".detail-on" ).click(function() {
		 $( ".lightbox" ).fadeIn( "slow", function() {
		 // Animation complete
		 });
	});
	
	/* CHIUSURA DETTAGLI */
	
	$( ".close-detail" ).click(function() {
		$( ".detail-open" ).fadeOut( "slow", function() {
		 // Animation complete
		 });
		 $( ".lightbox" ).fadeOut( "slow", function() {
		 // Animation complete
		 });
		 $('.year-img').stop().animate({"background-color":"rgba(38, 38, 38, 0.2);"}, 'slow');
		 $( ".year-img" ).removeClass( "year-sel" );
	});
	
	$( ".lightbox" ).click(function() {
		$( ".detail-open" ).fadeOut( "slow", function() {
		 // Animation complete
		 });
		 $( ".lightbox" ).fadeOut( "slow", function() {
		 // Animation complete
		 });
		 $('.year-img').stop().animate({"background-color":"rgba(38, 38, 38, 0.2);"}, 'slow');
		 $( ".year-img" ).removeClass( "year-sel" );
	});
	
	
	/* - POSIIONAMENTO DEI DETTAGLI ------- */


	

	
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