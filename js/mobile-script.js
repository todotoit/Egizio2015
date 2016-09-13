var status = 0;

$( document ).ready(function() {
	
	
	
	$( "#menu-but" ).click(function() {
		console.log("click");
		console.log(status);
		if (status==0){
			console.log("apri");
			
			
			
			$( "nav" ).stop().animate({
				top: 52,
				}, "slow", function() {
				// Animation complete.
			});
			
			$("#menu-but").stop().animate({
				backgroundColor: "#262626",
				}, "slow", function() {
				// Animation complete.
			});
			
			status=1;
		}
		
		else{
		
			$("#menu-but").stop().animate({
				backgroundColor: "#b08d64",
				}, "slow", function() {
				// Animation complete.
			});
		
			$( "nav" ).stop().animate({
				top: -208,
				}, "slow", function() {
				// Animation complete.
			});
		
			status=0;
		}
	});
	
	


});