var app = angular.module('c4app');

app.factory('modal', ['$timeout', function ($timeout) {

	var srv = {};
	srv.data;
	srv.closeable = false;

	var type = '';


	srv.content = 'state_night';
	$('#divModal').css({opacity:0, y:-1000})

	srv.show = function(content, _type, _obj){
		type = (_type) ? 'error' : '';
		srv.closeable = (type=='error') ? false : true;
		if(_obj){
			var lang_append = (_obj.lang == 'it') ? '' : '_en';
			var tw_text = (_obj.lang == 'it') ? 'I tesori ritrovati da #egizio2015' : 'The treasures discovered by #egizio2015';
			srv.data = {fb: "https://www.facebook.com/sharer/sharer.php?app_id=343924909127347&sdk=joey&u=http%3A%2F%2Fvideo.egizio2015.it%2Fvideo"+lang_append+"%2F"+_obj.id+"&display=popup&ref=plugin&src=share_button",
						tw: "https://twitter.com/intent/tweet?url=http%3A%2F%2Fvideo.egizio2015.it%2Fvideo"+lang_append+"%2F"+_obj.id+"&text="+encodeURIComponent(tw_text+" @MuseoEgizio @CSP_live")+"&via=MuseoEgizio&via=CSP_live&related=egizio2015&hashtags=egizio2015"
					};
		}
		srv.content = content;
		$('#divModal').css({opacity:0, y:50}).transition({opacity:1, y:0}, 1000);
	}
	//srv.show('state_night', true);

	srv.hide = function(){
		return $('#divModal').css({opacity:1, y:0}).transition({opacity:0, y:-50, complete:function(){
			$('#divModal').css({y:-1000});
			srv.closeable=false;
		}}, 350)
	}

	srv.selfhide = function(){
		if(type=='error') srv.hide();
	}


	return srv;

}])
