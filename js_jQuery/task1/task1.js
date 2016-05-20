$(document).ready(function() {
	'use strict';
	
  $('body').append('<div class="outer_block"> </div>');
  $('.outer_block').append('<div class="inner_block"> </div>');
  $('.inner_block').append('<div class="inner_block_header"> </div>');
  $('.inner_block_header').append('<div class="after"></div>');
  $('.inner_block_header').append('<h1>Header</h1>');
  $('.inner_block').append('<div class="inner_block_mainContent"></div>');
  $('.inner_block_mainContent').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut expedita voluptatibus fugit doloremque, similique deleniti inventore possimus maxime, ex alias eos quo aspernatur, natus qui magnam accusantium minus labore?</p>');

  $('body').css({
  	'padding': '0',
		'margin': '0',
		'font-family': 'Arial, "Helvetica Neue", Helvetica, sans-serif'
  });

  $('.outer_block').css({
  	'max-width': '1600px',
		'height': '200px',
		'margin': '1em 1em',
		'box-sizing': 'border-box',
		'border': '2px solid #8c43ac',
		'border-radius': '10px',
		'background-color': '#9c59b8'
  });

  $('.inner_block').css({
  	'max-width': '1576px',
		'height': '170px',
		'margin': '10px',
		'background': '#fff',
		'border': '2px solid #8c43ac',
		'position': 'relative',
		'overflow': 'hidden'
  });

  $('.inner_block_header').css({
  	'width': '100%',
		'height': '40px',
		'position': 'absolute',
		'background-color': '#f59c00'
  });

  $('.after').css({
  	'content': '""',
		'position': 'absolute',
		'top': '40px',
		'left': '10px',
		'border': '15px solid transparent',
		'border-top-width': '13px',
		'border-bottom-width': '8px',
		'border-top-color': '#f59c00',
		'width': '0',
		'height': '0'
  });

  $('h1').css({
  	'margin': '6px 10px',
		'font-size': '1.6em',
		'font-weight': '400'
  });

  $('.inner_block_mainContent').css({
  	'position': 'absolute',
		'top': '40px',
		'left': '0',
		'overflow': 'hidden'
  });

  $('p').css({
  	'margin': '15px 12px',
		'font-size': '0.9em',
		'color': '#9c59b8'
  });
});