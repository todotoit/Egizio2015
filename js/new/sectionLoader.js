(function (parent, $) {
	'use strict';

	function sectionLoader (sections) {
		$.holdReady(true);

		var count = 0;
		var dots = $('.nav-list li');

		function doLoad(){
			var s = sections[count];
			$(s.name).load(s.url, function (data) {

				$(dots[count+1]).transition({opacity:1}, 200)
				if(window.sr) window.sr.init();

				count++;
				if(count>=sections.length){
					$.holdReady(false);
				}else{
					doLoad();

					if(count == 3){ // hide loader after second loaded fragment
						$('#dvLoading').transition({y:-2000}, 750);
					}
				}
			});
		}

		doLoad();
	}

	parent.sectionLoader = sectionLoader;

})(window.Egizio, jQuery); 
