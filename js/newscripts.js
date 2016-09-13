// d3.selectAll(".nav-label")
// 	.on("mouseenter", mouseEnter)
// 	.on("mouseleave", mouseLeave);


		
// function mouseEnter() {
// 	d3.select(this).style("opacity", 1);
// }

// function mouseLeave() {
// 	d3.select(this).style("opacity", 0);
// }

// scrollPosition = $("body").scrollTop();
// sectionPosition = $( "#section2" ).position().top;


// if (scrollPosition>sectionPosition){

// }

var app = angular.module('newEgizioApp', []);


// $('#section4').on('show', function() {
//       console.log('#foo is now visible');
// });

$(document).ready(function(){
	console.log('ready')
	$('ng-include').waypoint(function(direction) {
	  alert('Top of notify element hit top of viewport.');
	},{offset: '0'});
});	
// $(document).ready(function(){
// 		$('section').waypoint(function(direction) {
// 		  thisId = $(this).attr('id');
// 		  $('ul li').each(function(){
// 		    var secondaryID = $(this).attr('class');
// 		    if  ( secondaryID == thisId )
// 		        {
// 		        	$('ul li').removeClass('active');
// 		            $(this).addClass('active');
// 		        }
// 			});
// 	},{offset: '0'});	
// });	
