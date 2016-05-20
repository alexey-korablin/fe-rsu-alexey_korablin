$(document).ready(function() {
	var count = 0;

	$('body').append('<div class="container"></div>');
	$('.container').append('<div class="head"></div>');
	$('.container').append('<div class="menu_wrap"></div>');
	$('.menu_wrap').append('<ul></ul>');
	$('ul').append('<li class="menu_item menu_item1">Menu 1</li>');
	$('ul').append('<li class="menu_item menu_item2">Menu 2</li>');
	$('ul').append('<li class="menu_item menu_item3">Menu 3</li>');
	$('ul').append('<li class="menu_item menu_item4">Menu 4</li>');
	$('ul').append('<li class="menu_item menu_item5">Menu 5</li>');
	$('.menu_wrap').append('<div class="menu_top">Top menu</div>');

	$('body').css({
		'margin': '0'
	});

	$('.container').css({
		'width': '220px',
		'margin': '0 auto',
		'color': 'white',
		'position': 'relative',
		'z-index': '1',
		'top': '20px'
	});

	$('.head').css({
		'width': '100%',
		'height': '10px',
		'background-color': '#ccc',
		'border-top': '2px solid #bbb',
		'border-bottom': '2px solid #bbb'
	});

	$('.menu_wrap').css({
		'width': '200px',
		'margin': '0 auto',
		'background-color': '#a7d200',
		'position': 'absolute',
		'top': '10px',
		'left': '10px',
		'border-bottom-left-radius': '20px',
		'border-bottom-right-radius': '20px',
		'z-index': '-1'
	});

	$('.menu_top').css({
		'width': '200px',
		'height': '50px',
		'background-color': '#a7d200',
		'line-height': '50px',
		'text-align': 'center',
		'font-size': '1.6em',
		'border': '2px solid rgba(21,143,0,0.1)',
		'border-top': '2px solid #bbb',
		'border-bottom-left-radius': '20px',
		'border-bottom-right-radius': '20px',
		'transition': 'box-shadow 1.2s linear',
		'box-sizing': 'border-box'
	});

	$('ul').css({
		'list-style': 'none',
		'margin': '0',
		'padding': '0',
		'display': 'none'
	});

	$('.menu_item').css({
		'font-size': '1.4em',
		'padding': '4px 0 0 64px'
	});

	$('.menu_wrap').mouseover(
		function() {
			$(this).css({'cursor': 'pointer'});
		});

	$('.menu_item').hover(
		function() {
			$(this).css({'background-color': 'rgba(21,143,0,0.1)'});
		},
		function() {
			$(this).css({'background-color': '#a7d200'});
		});

	$('.menu_top').click(function() {
		count += 1;
		if(count % 2 !== 0){
			$('ul').css({'display': 'block'});
		} else {$('ul').css({'display': 'none'});}
	});

});

