var app = angular.module('c4app');

app.factory('mover', ['$timeout', function ($timeout) {

	var srv = {};

	var up = true;
	
	var valid = true;
	var isUp = true;

	var disabled = false;

	var arrow = angular.element('#el_scroll');
	arrow.css({rotate:180});

	srv.enable = function(){
		disabled = false;
		$('#el_scroll').css('display', 'block')
	}
	srv.disable = function(){
		/*
		disabled = true;
		$('#el_scroll').css('display', 'none')
		*/
	}

	var listen = true;

	window.addEventListener('DOMMouseScroll',handleScroll,false);
	window.addEventListener('mousewheel',handleScroll,false);

	function handleScroll(e){

		if(!listen) return;

		if($('.scrl')){
			if($('.scrl').scrollTop() > 0){
				return;
			}
		}

		var direction = (e.detail<0 || e.wheelDelta>0) ? 1 : -1;
	    if(direction == -1){
	    	if(up) srv.goDown();
	    }else{
	    	if(!up) srv.goUp();
	    }
	    $timeout(function(){
			listen=true;
		}, 1000);
		listen=false;
	};


	srv.toggle = function(){
		if(!valid) return;
		if(up){
			srv.goDown();
		}else{
			srv.goUp();
		}
	}

	srv.goDown = function(){
		if(!valid) return;
		if(disabled) return;
		valid=false;
		console.log('goDown');
		var h = $(window).height();
		//$('#el_scroll').transition({opacity: 0}, 300);
		$('#divTop').transition({y:h*-1+130}, 600)
		$('#divBottom').transition({y:h*-1+130, complete:done}, 600)
		$('#main_menu').css('display', 'none')
		//$('#el_scroll').attr('src', 'images/svg/arrow-top.svg');
		$('#scrollArr').transition({y:h*-1+130}, 600)
		$('#theRec').transition({x:-100, delay:400}, 400)
		$('#el_scroll').transition({rotate:0, delay:400}, 400, 'snap');
		isUp = false;
	}
	srv.goUp = function(){
		if(!valid) return;
		valid=false;
		console.log('goUp');
		//$('#el_scroll').transition({opacity: 0}, 300);
		$('#divTop').transition({y:0}, 600)
		$('#divBottom').transition({y:0, complete:done}, 600)
		$('#main_menu').css('display', 'block')
		//$('#el_scroll').attr('src', 'images/svg/arrow-bottom.svg');
		$('.scrl').scrollTop(0)
		$('#scrollArr').transition({y:0}, 600)
		$('#theRec').transition({x:0}, 300)
		$('#el_scroll').transition({rotate:180, delay:400}, 400, 'snap');
		isUp=true;
	}


	function done(){
		//console.log('done');
		valid=true;
		up = isUp;
	}


	return srv;

}])