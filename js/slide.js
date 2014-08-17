// JavaScript Document


$(document).ready(function() {
	
    $('#open').click(function(){
		$("div#panel").slideDown("slow");	
	});
	
	$('#close').click(function(){
		$("div#panel").slideUp("slow");	
	});
	
	$('#toggle a').click(function(){
		$("#toggle a").toggle();	
	});
	

var $root = $('html, body');

$('a[href^="#"]').bind('click', function (e) { 
e.preventDefault();

var target = this.hash;
$target = $(target);
$root.stop().animate({
	'scrollTop': $target.offset().top
}, 500, 'swing', function () {
	window.location.hash = target;
	

		});

	});
	
$(window).scroll(function(){
	
	var h = $('#contenidos').height();
	var y = $(window).scrollTop();
	if( y > (h*.05) && y < (h* .75)
	){
		$("#top").fadeIn("slow");
} else {
		$("#top").fadeOut("slow");
}
		
});
	
	
});


