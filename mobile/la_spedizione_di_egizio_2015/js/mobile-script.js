$( window ).load(function() {
	$("#swipe1").width(($( window ).width())-27);
	$("#swipe1").height(($( window ).width())-88);
	$("#swipe2").width(($( window ).width())-27);
	$("#swipe2").height(($( window ).width())-88);
	$("#swipe3").width(($( window ).width())-27);
	$("#swipe3").height(($( window ).width())-88);
	$("#swipe4").width(($( window ).width())-27);
	$("#swipe4").height(($( window ).width())-88);
	$("#swipe5").width(($( window ).width())-27);
	$("#swipe5").height(($( window ).width())-88);
	$(".swiper-slide").width(($( window ).width())-75);

	/*$("#cover-c3").height( ($( window ).height()/4)*3 );
	$("#veil").height( ($( window ).height()/4)*3 );*/

  var mySwiper1 = new Swiper('#swipe1',{
    pagination: '.pagination',
    paginationClickable: true,
    slidesPerView: 'auto'
  })
  var mySwiper2 = new Swiper('#swipe2',{
    pagination: '.pagination',
    paginationClickable: true,
    slidesPerView: 'auto'
  })
  var mySwiper3 = new Swiper('#swipe3',{
    pagination: '.pagination',
    paginationClickable: true,
    slidesPerView: 'auto'
  })
  var mySwiper4 = new Swiper('#swipe4',{
    pagination: '.pagination',
    paginationClickable: true,
    slidesPerView: 'auto'
  })
  var mySwiper5 = new Swiper('#swipe5',{
    pagination: '.pagination',
    paginationClickable: true,
    slidesPerView: 'auto'
  })

// 	  var mySwiper = new Swiper('.swiper-container',{
// 		pagination: '.pagination',
// 		loop:true,
// 		grabCursor: true,
// 		paginationClickable: true
// 	  })
	  
	function reinitSwiper(mySwiper) {
	  setTimeout(function () {
	   mySwiper.reInit();
	  }, 500);
	}
	  
	 //  $('.arrow-left').on('click', function(e){
		// e.preventDefault()
		// mySwiper.swipePrev()
	 //  })
	 //  $('.arrow-right').on('click', function(e){
		// e.preventDefault()
		// mySwiper.swipeNext()
	 //  })

	var counter_t1 = 0;
	var counter_t2 = 0;
	var counter_t3 = 0;
	var counter_t4 = 0;
	var counter_t5 = 0;

	// ambiente1
	$( ".menu-t1" ).click(function() {
		reinitSwiper(mySwiper1);
		if (counter_t1 == 0){
			$( ".tappe" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			$( "#tappa1" ).slideDown( "slow", function() {
			  // Animation complete.
			});
			
	
			setTimeout(function() {		
				$('body').scrollTo($( "#align-box-1" ),1000, {'axis':'y'});
			}, 600);
			
			// setTimeout(function() {		
// 				 $( 'body').animate({
// 					top: -( $( window ).height() - $( window ).scrollTop() - 50)
// 				 }, 500, function() {
// 				 // Animation complete.
// 				 });
// 			}, 600);
			
			counter_t1 = 1;
			}
			
		else{
			$( "#tappa1" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			counter_t1 = 0;
			}
	});
	
	$( ".menu-t2" ).click(function() {
		reinitSwiper(mySwiper2);
		if (counter_t2 == 0){
			counter_t1 = 0;
			counter_t2 = 0;
			counter_t3 = 0;
			counter_t4 = 0;
			counter_t5 = 0;
			$( ".tappe" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			$( "#tappa2" ).slideDown( "slow", function() {
			  // Animation complete.
			});
	
			setTimeout(function() {		
				$('body').scrollTo($( "#align-box-2" ),1000, {'axis':'y'});
			}, 600);
			
			// setTimeout(function() {		
// 				 $( 'body').animate({
// 					top: -( $( window ).height() - $( window ).scrollTop())
// 				 }, 500, function() {
// 				 // Animation complete.
// 				 });
// 			}, 600);
		
			counter_t2 = 1;
			}
			
		else{
			$( "#tappa2" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			counter_t2 = 0;
			}
	});
	
	$( ".menu-t3" ).click(function()  {
		reinitSwiper(mySwiper3);
		if (counter_t3 == 0){
			counter_t1 = 0;
			counter_t2 = 0;
			counter_t3 = 0;
			counter_t4 = 0;
			counter_t5 = 0;
			$( ".tappe" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			$( "#tappa3" ).slideDown( "slow", function() {
			  // Animation complete.
			});
	
			setTimeout(function() {		
				$('body').scrollTo($( "#align-box-3" ),1000, {'axis':'y'});
			}, 600);
			// setTimeout(function() {		
// 				 $( 'body').animate({
// 					top: -( $( window ).height() - $( window ).scrollTop() - 50)
// 				 }, 500, function() {
// 				 // Animation complete.
// 				 });
// 			}, 600);
		
			counter_t3 = 1;
			}
			
		else{
			$( "#tappa3" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			counter_t3 = 0;
			}
	});
	
	$( ".menu-t4" ).click(function()  {
		reinitSwiper(mySwiper4);
		if (counter_t4 == 0){
			counter_t1 = 0;
			counter_t2 = 0;
			counter_t3 = 0;
			counter_t4 = 0;
			counter_t5 = 0;
			$( ".tappe" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			$( "#tappa4" ).slideDown( "slow", function() {
			  // Animation complete.
			});
	
			setTimeout(function() {		
				$('body').scrollTo($( "#align-box-4" ),1000, {'axis':'y'});
			}, 600);
			// setTimeout(function() {		
// 				 $( 'body').animate({
// 					top: -( $( window ).height() - $( window ).scrollTop() - 50)
// 				 }, 500, function() {
// 				 // Animation complete.
// 				 });
// 			}, 600);
		
			counter_t4 = 1;
			}
			
		else{
			$( "#tappa4" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			counter_t4 = 0;
			}
	});
	
	$( ".menu-t5" ).click(function()  {
		reinitSwiper(mySwiper5);
		if (counter_t5 == 0){
			counter_t1 = 0;
			counter_t2 = 0;
			counter_t3 = 0;
			counter_t4 = 0;
			counter_t5 = 0;
			$( ".tappe" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			$( "#tappa5" ).slideDown( "slow", function() {
			  // Animation complete.
			});
	
			setTimeout(function() {		
				$('body').scrollTo($( "#align-box-5" ),1000, {'axis':'y'});
			}, 600);
			
			
// 			$.scrollTo(SELECTOR, 800, {
//     'axis':'y'
// });
			// setTimeout(function() {		
// 				 $( 'body').animate({
// 					top: -( $( window ).height() - $( window ).scrollTop() - 50)
// 				 }, 500, function() {
// 				 // Animation complete.
// 				 });
// 			}, 600);
		
			counter_t5 = 1;
			}
			
		else{
			$( "#tappa5" ).slideUp( "slow", function() {
			  // Animation complete.
			});
			counter_t5 = 0;
			}
	});

	
	
	

});
	

		
	