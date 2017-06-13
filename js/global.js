var w = $(window),
	body = $('body'),
	popup = $('#popup'),
	popupContainer = ('#popup .container'),
	popupClose = $('#popup .close'),
	popupForm = $('#popup .form'),
	popupMessage = $('#popup .message'),
	speed = 400;

$('.caret > li > a').click(function() {
	$(this).removeAttr('href');
	var ul = $(this).siblings('ul');
	ul.slideToggle(400);
});

$('button#sticks').click(function() {
	$(this).toggleClass('close');
});


$('input[name=tel]').mask("+7 (999) 999-99-99");

$('input[name=name]').on('keyup keypress', function(e) {
    var lettersNew = lettersRU + lettersEN + " ";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

$('input[name=email]').on('keyup keypress', function(e) {
    var lettersNew = lettersEN + "@-._";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.callback').click(function() {
	abs(popup);
});

popupClose.click(function() {
	popup.fadeOut(speed);
});

popupForm.find('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});