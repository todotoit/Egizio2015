$(window).on('breakpoint-change', function(e, breakpoint) {
	console.log('breakpoint-change to ' + breakpoint);
});

$(document).on('ready', function () {

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
				top:44
				}, "slow");	
			$( "#logo-bot" ).stop().animate({
				opacity: 1,
				top:43
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
				top:29
				}, "slow");	
			$( "#logo-bot" ).stop().animate({
				opacity: 0,
				top:28
				}, "slow");	
    });

	shareMenu();

	// activate menu for changing language
	languageChangeMenu();


});

function shareMenu () {
	$(window).on('navigation:open', function () {
		// $('.social').delay(400).show();
		$('.social').addClass('in');
	});
	$(window).on('navigation:close', function () {
		// $('.social').hide();
		$('.social').hide();
		setTimeout(function () {
			$('.social').removeClass('in').show()
		}, 200)
	});
}

function languageChangeMenu () {
	// on button click
	$('#lang .language-change').on('click', function (event) {
		// get lang from attribute
		var lang = $(event.target).attr('data-language');
		// set new language
		window.Egizio.L10n.setLanguage(lang);
	});
	// react to language-change event
	$(window).on('language-change', function (event, lang) {
		// remove selected class to everyone
		$('#lang .language-change').removeClass('lan-sel');
		// add to correct button
		$('#lang .language-change[data-language="'+lang+'"]').addClass('lan-sel');
	});
}

function goBack (event) {
		event = event || window.event
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		var search = window.location.search || '?lang=it';
		var host = window.location.host;
		var sectionTag = "#section3"
		var parentUrl = 'http://' + host + '/' + search;
		if(document.referrer.indexOf(host) === -1){
			window.location.href = parentUrl;
		}
		else{
			window.location.href = parentUrl + sectionTag;
		}
		return false;
	}
