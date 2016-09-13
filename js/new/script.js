function addBowser(b){
	$('body').addClass(b);
}
if(bowser.firefox) addBowser('firefox')
if(bowser.safari) addBowser('safari')
if(bowser.chrome) addBowser('chrome')
if(bowser.msie) addBowser('msie')

console.log(bowser.version);

if(bowser.msie && bowser.version < 10){
	$('#ie_alert').css('display', 'block');
}

var sections = [
	//{ name:"#section1",  url:"newmodules/head.html" },
	{ name:"#section2",  url:"newmodules/compagnia.html" },
	{ name:"#section3",  url:"newmodules/concept.html" },
	{ name:"#section4",  url:"newmodules/museo.html" },
	{ name:"#section5",  url:"newmodules/nuovo_museo.html" },
	{ name:"#section6",  url:"newmodules/clessidra.html" },
	{ name:"#section7",  url:"newmodules/affissioni.html" },
	{ name:"#section8",  url:"newmodules/teca.html" },
	{ name:"#section9",  url:"newmodules/soffio.html" },
	{ name:"#section10", url:"newmodules/utenti.html" },
	{ name:"#section11", url:"newmodules/backstage.html" },
	{ name:"#section12", url:"newmodules/footer.html" }
];

window.Egizio.sectionLoader(sections);

$(window).on('breakpoint-change', function(e, breakpoint) {
	console.log('breakpoint-change to ' + breakpoint);

	if (breakpoint === 'smartphone') {
		$('#head video').remove();
	}
});


window.Egizio._init = function(){
	var __vars = {};
	if (window.location.href.indexOf('?') !== -1) {
		var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		var param;
		for(var i = 0; i < params.length; i++) {
			param = params[i].split('=');
			__vars[param[0]] = decodeURI(param[1]);
		}
	}
	var langs = (__vars.lang) ? __vars.lang.split('#') : ['it'];
	if(langs[0] == 'en'){
		$('#claim2').addClass('l10n-hide').css('opacity', 1);
		$('#head_txt_1').text('#egizio2015: discover the project and the communication campaign');
		$('#head_txt_2').text('Play the campaign\'s video');
		$('#head_txt_3').text('Also thanks to the support offered by Compagnia di San Paolo, in April 2015 Turin\'s Museo Egizio has reopened bigger and more modern than ever.');
	}else{
		$('#claim1').addClass('l10n-hide').css('opacity', 1);
	}
}

window.Egizio._init();





$.get('newasset/all_icons.svg',
	function(svgDoc){
		var importedSVGRootElement = document.importNode(svgDoc.documentElement,true);
		$('body').append(importedSVGRootElement);
	}, "xml");










$(document).on('ready', function () {

	console.info('READY')

	$('#nav').mouseenter(function(){
		$('#bgdNav').css({opacity:0, display:'block'})
		$('#bgdNav').transition({opacity:1}, 250)
		$('.nav-list li span').addClass('tempActive')
		$('.social').transition({opacity:1}, 250)
	});

	$('#nav').mouseleave(function(){
		$('#bgdNav').transition({opacity:0}, 250, function(){
			$('#bgdNav').css({display:'none'})
		})
		$('.nav-list li span').removeClass('tempActive')
		$('.social').transition({opacity:0}, 250)
	});

	$('[video-name="video_1_en"]').show();
		

	//$('#backstage-video-container').fitVids();

	// documento ok
	$(".icon_start_sections").on('click', function() {
		console.log("hey");
	});


	// scroll waypoint
	var sections = $('section').get().reverse();
	$(sections).waypoint(function(direction) {
		var thisId = $(this.element).attr('id');
		if (thisId !== 'section1') {
			var u = new Url();
			u.hash = thisId;
			history.replaceState({}, '', u.toString());			
		}
		$('.nav-item').each(function(){
			var secondaryID = $(this).attr('nav-section-name');
			if  ( secondaryID == thisId )
			{
				$('.nav-item').removeClass('active');
				$(this).addClass('active');
				if(secondaryID == 'section8'){
					if($('#userInner')[0].innerText == ''){
						$('#userInner').load('newmodules/users.html', function(){
							window.Egizio.L10n.consolidateLanguage();
						});
					}
				}
			}
		});
	}, {offset: '0'});

	// click nav
	$(".nav-item").click(function() {
		var lastScrollTop = 0;
		var target = $(this).attr('nav-section-name');
		console.info('click', target)
		var position_target = $("#" + target).position().top;
		var actual_position = $(window).scrollTop();
		var data_direction;
		if (position_target > actual_position) {
			// down
			data_direction = 1;
		} else {
			// up
			data_direction = 0;
		}
		// if we are targeting section1 and direction is up, we should offset scroll by -1px
		if (target === 'section1' && data_direction === 0) {
			data_direction = -1;
		}
		$('html,body').animate({
			scrollTop: $("#" + target).offset().top + data_direction
		}, 500);
	});

	$("#logo").click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});

	if (window.location.hash) {
		var thisId = window.location.hash.substring(1);
		$('.nav-item').each(function(){
			var secondaryID = $(this).attr('nav-section-name');
			console.log(secondaryID)
			if  (secondaryID == thisId) {
				$('.nav-item').removeClass('active');
				$(this).addClass('active');
			}
		});
	}
	

	$('#logo')
	.hover(function() {

		$('#nav').transition({opacity:0}, 200);

		$( "#logo-top" ).stop().animate({
			opacity: 1
		}, "normal", function() {
				// Animation complete.
			});	
		$( ".logo-bot" ).stop().animate({
			opacity: 1,
			top:0
		}, "slow", function() {
				// Animation complete.
			});	
		
	}, function() {          

		$('#nav').transition({opacity:1}, 200);

		$( "#logo-top" ).stop().animate({
			opacity: 0
		}, "slow", function() {
				// Animation complete.
			});	
		$( ".logo-bot" ).stop().animate({
			opacity: 0,
			top:-20
		}, "normal", function() {
				// Animation complete.
			});	
	});

	$( ".nav-item" ).hover(
		function() {
			$('.nav').removeClass('active_green');
			$(this).addClass('active_green');
			}, function() {
			$(this).removeClass('active_green');
		});


	$('#theSocial').load('newmodules/socials.html');
	$('#defer_videos').load('newmodules/youtubes_overlay.html');

	$('#lang').addClass('animated fadeInUp')

	//mainNavigation();

	//shareMenu();

	// activate menu for changing language
	languageChangeMenu();

	facebookMetatagChange();

	// add cookie banner
	loadCookieBanner();

	FastClick.attach(document.body);

});


function facebookMetatagChange () {
	$(window).on('language-change', function (event, lang) {
		if (lang === 'it') {
			$('meta[property="og:locale"]').attr('content', 'it_IT');
			$('meta[property="og:locale:alternate"]').attr('content', 'en_US');
			$('meta[property="og:title"]').attr('content', 'Scopri #egizio2015');
			$('meta[property="og:description"]').attr('content', 'Il progetto e la campagna che hanno portato al Nuovo Museo Egizio di Torino.');
		}
		else {
			$('meta[property="og:locale"]').attr('content', 'en_US');
			$('meta[property="og:locale:alternate"]').attr('content', 'it_IT');
			$('meta[property="og:title"]').attr('content', 'Discover #egizio2015');
			$('meta[property="og:description"]').attr('content', 'The project and campaign leading to Turin\'s New Museo Egizio.');
		}
	});
}





function mainNavigation () {
	$( ".nav" ).hover(function() {
		var $this = $(this);
		$(window).trigger('navigation:open');
		$this.addClass('open');
	}, function() {
		var $this = $(this);
		$(window).trigger('navigation:close');
		$this.removeClass('open');
	});
}

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

function loadCookieBanner () {
	$(window).on('language-ready', function(event, lang) {
		// pass options to cookie law script
		window.cookieLawOptions = {
			banner: {
				content: window.Egizio.L10n.getTranslation('cookie_banner'),
				moreLink: 'https://en.wikipedia.org/wiki/HTTP_cookie'
			}
		};

		$('#cookie-law').prependTo('body');
		$('body').css('margin-top', 0)
	});

	$(window).on('language-change', function (e, lang) {
		window.currentCookieBanner.content(window.Egizio.L10n.getTranslation('cookie_banner'), 'https://en.wikipedia.org/wiki/HTTP_cookie');
	});
}
