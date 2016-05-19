function task1() {
	'use strict';
	var outer_block = document.createElement('div');
	var body = document.getElementsByTagName('body');
	var inner_block = document.createElement('div');
	var inner_block_header = document.createElement('div');
	var header = document.createElement('h1');
	var inner_block_mainContent = document.createElement('div');
	var paragraph = document.createElement('p');
	var inner_block_header_pseudo = document.createElement('div');

	outer_block.className = 'outer_block';
	inner_block.className = 'inner_block';
	inner_block_header.className = 'inner_block_header';
	inner_block_mainContent.className = 'inner_block_mainContent';
	inner_block_header_pseudo.className = 'inner_block_header_pseudo';

	outer_block.innerHTML = '';
	inner_block.innerHTML = '';
	inner_block_header.innerHTML = '';
	header.innerHTML = 'Header';
	inner_block_mainContent.innerHTML = '';
	paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut expedita voluptatibus fugit doloremque, similique deleniti inventore possimus maxime, ex alias eos quo aspernatur, natus qui magnam accusantium minus labore?';
	inner_block_header_pseudo.innerHTML = '';

	body[0].appendChild(outer_block);
	outer_block.appendChild(inner_block);
	inner_block.appendChild(inner_block_header);
	inner_block_header.appendChild(header);
	inner_block.appendChild(inner_block_mainContent);
	inner_block_mainContent.appendChild(paragraph);
	inner_block_header.appendChild(inner_block_header_pseudo);

	body[0].style.cssText = 'padding: 0;	margin: 0; font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;';
	outer_block.style.cssText = 'max-width: 1600px; height: 200px; margin: 1em 1em;	box-sizing: border-box;	border: 2px solid #8c43ac; border-radius: 10px; background-color: #9c59b8;';
	inner_block.style.cssText = 'max-width: 1576px; height: 170px; margin: 10px; background: #fff; border: 2px solid #8c43ac;	position: relative;	overflow: hidden;';
	inner_block_header.style.cssText = 'width: 100%; height: 40px; position: absolute; background-color: #f59c00;';
	header.style.cssText = 'margin: 6px 10px;	font-size: 1.6em; font-weight: 400;';
	inner_block_mainContent.style.cssText = 'position: absolute; top: 40px;	left: 0; overflow: hidden;';
	paragraph.style.cssText = 'margin: 15px 12px;	font-size: 0.9em;	color: #9c59b8;';
	inner_block_header_pseudo.style.cssText = 'content: "";	position: absolute;	top: 40px;	left: 10px;	border: 15px solid transparent;	border-top-width: 13px;	border-bottom-width: 8px;	border-top-color: #f59c00;	width: 0;	height: 0;';
}

window.onload = function() {
	task1();
};