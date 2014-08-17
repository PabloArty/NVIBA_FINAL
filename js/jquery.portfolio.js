$(document).ready(function(){

/***** Resize section to viewport height *****/

function viewportHeight(section) {
	var viewportHeight = $(window).height();
	section.css({'height': viewportHeight});
}

$(window).resize(function(){
	viewportHeight($('.section1'));
});
$(window).trigger('resize');


/***** Logo hover *****/

$('#logo').hover(function(){

	$('#logo').stop().animate({'width': 167}, 330, 'easeInOutExpo', function(){
		$('#logoLarge').stop().fadeIn(100);
	});

}, function(){

	$('#logoLarge').stop().fadeOut(100, function(){
		$('#logo').stop().animate({'width': 50}, 330, 'easeInOutExpo');
	});
	
});



/***** Project expansion *****/

$('.contentButton').click(function(){
	
	var contentHeight = 660;
	var projectClicked = $(this).parents('.singleProject').attr('id');
	var contentToOpen = '#' + projectClicked + 'Content';
	var contentToFade = '#' + projectClicked + 'Content > div';
	var arrowsMore = '#' + projectClicked + ' .readMore';
	var arrowsLess = '#' + projectClicked + ' .readLess';
	
	if(!$(contentToOpen).hasClass('open')) {
		$(contentToOpen).addClass('open');
		$(contentToOpen).animate({'height': contentHeight}, 650, 'easeInOutExpo', function(){
			s.refresh();										// reload skrollr to adapt to new sizes
			$(contentToFade).fadeIn(400);
			slider.reloadSlider();					// reload bxslider to adapt to new sizes
		});
		$(arrowsMore).fadeOut(300, function(){
			$(arrowsLess).fadeIn(300);
		});
	} else {
		$(contentToOpen).removeClass('open');
		$(contentToFade).fadeOut(400, function(){
			$(contentToOpen).animate({'height': 0}, 650, 'easeInOutExpo', function(){
				s.refresh();									// reload skrollr to adapt to new sizes
			});
		});
		$(arrowsLess).fadeOut(300, function(){
			$(arrowsMore).fadeIn(300);
		});
	}
	
});




/***** Tabs *****/


$('ul.tabs').each(function(){
	var $active, $content, $links = $(this).find('a');
	
	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.parent('li').addClass('active');
	$content = $($active.attr('href'));
	
	$links.not($active).each(function () {
		$($(this).attr('href')).hide();
	});
	
	$(this).on('click', 'a', function(e){
		e.stopPropagation();
		$active.parent('li').removeClass('active');
		$content.hide();
		
		$active = $(this);
		$content = $($(this).attr('href'));
		
		$active.parent('li').addClass('active');
		$content.show();
		
		e.preventDefault();
	});
});
	
}); // close document ready






$(window).load(function(){

/***** fauxIconCol, to get around 2d transform + fixed position bug *****/

var textColPos = $('#textCol').offset();

//$('#fauxIconCol').css({
	//'top': textColPos.top,
	//'height': $('#textCol').outerHeight(),
	//'display': 'block'
//});

}); // close window load
