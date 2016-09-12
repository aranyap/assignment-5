$(document).ready(start);

function start() {
	$('.readmore').click(showMore);
	$('.readless').click(showLess);
	$('.learnmore').click(showLearnMore);
}


function showMore(e) {
	e.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
}

function showLess(e) {
	e.preventDefault();
	$('#show-this-on-click').slideUp();
}

function showLearnMore(e) {
	e.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
}













      //   $('.nav-button').hover(becomeActive, stopBeingActive);
      //   $('.black-box').hover(becomeActive, stopBeingActive);
      // }

        //   $(this).addClass('active');
        // $(this).siblings().addClass('sodfj')