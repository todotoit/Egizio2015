if(bowser.ios || bowser.tablet){
	$('head').append('<style>[data-sr] { visibility: visible; }</style>')
}else{
	window.sr = new scrollReveal({vFactor:0.5});
}


$(document).on('ready', function () {

	$(document).on('keydown',function (e){
		if ( e.which == 27 ) {
			$('.video_wrap').trigger('click');
		}
	});

	// video overlay
	$('.video_button').on('click', function(event) {
		event.preventDefault();
		var videoId = '#' + $(this).attr('video-name');
		var videoWrap = '#' + $(this).attr('video-name') + '_wrap';
		$(videoId)[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		$(videoWrap).fadeIn( "slow", function() {	
		});
	});

	// use delegate syntax because video will be loaded in deferred mode
	$('body').on('click', '.video_wrap', function(event) {
		event.preventDefault();
		var wrapId = "#" + $(this.firstElementChild)[0].id + "_wrap";
		console.log('closing ' + wrapId);
		$(this.firstElementChild)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$(wrapId).fadeOut( "slow", function() {
		});
	});

});
