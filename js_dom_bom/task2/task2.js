function task2() {
	var clickTimes = 0;
	var body = document.getElementsByTagName('body');

	var container = document.createElement('div');
	var head = document.createElement('div');
	var menu_wrap = document.createElement('div');
	var ul = document.createElement('ul');
	var menu_item1 = document.createElement('li');
	var menu_item2 = document.createElement('li');
	var menu_item3 = document.createElement('li');
	var menu_item4 = document.createElement('li');
	var menu_item5 = document.createElement('li');
	var menu_top = document.createElement('div');

	var menu_item = [menu_item1, menu_item2, menu_item3, menu_item4, menu_item5];

	container.className = 'container';
	head.className = 'head';
	menu_wrap.className = 'menu_wrap';
	menu_item1.className = 'menu_item menu_item1';
	menu_item2.className = 'menu_item menu_item2';
	menu_item3.className = 'menu_item menu_item3';
	menu_item4.className = 'menu_item menu_item4';
	menu_item5.className = 'menu_item menu_item5';
	menu_top.className = 'menu_top';

	container.innerHTML = '';
	head.innerHTML = '';
	menu_wrap.innerHTML = '';
	ul.innerHTML = '';
	menu_item1.innerHTML = 'Menu 1';
	menu_item2.innerHTML = 'Menu 2';
	menu_item3.innerHTML = 'Menu 3';
	menu_item4.innerHTML = 'Menu 4';
	menu_item5.innerHTML = 'Menu 5';
	menu_top.innerHTML = 'Top menu';

	body[0].appendChild(container);
	container.appendChild(head);
	container.appendChild(menu_wrap);
	menu_wrap.appendChild(ul);
	ul.appendChild(menu_item1);
	ul.appendChild(menu_item2);
	ul.appendChild(menu_item3);
	ul.appendChild(menu_item4);
	ul.appendChild(menu_item5);
	menu_wrap.appendChild(menu_top);

	container.style.cssText = 'width: 220px; margin: 0 auto; color: white; position: relative; z-index: 1; top: 20px;';
	head.style.cssText = 'width: 100%; height: 10px; background-color: #ccc; border-top: 2px solid #bbb; border-bottom: 2px solid #bbb;';
	menu_wrap.style.cssText = 'width: 200px; margin: 0 auto; background-color: #a7d200; position: absolute; top: 10px; left: 10px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; z-index: -1;';
	menu_top.style.cssText = 'width: 200px; height: 50px; background-color: #a7d200; line-height: 50px; text-align: center; font-size: 1.6em; border: 2px solid rgba(21,143,0,0.1); border-top: 2px solid #bbb; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; transition: box-shadow 230ms linear; box-sizing: border-box;';
	ul.style.cssText = 'list-style: none; margin: 0; padding: 0; display: none';

	for(var i = 0; i < menu_item.length; i++) {
		menu_item[i].style.cssText = 'cursor: pointer; font-size: 1.4em; padding: 4px 0 0 64px;';
	}

	menu_top.onmouseover = function() {
		menu_top.style.cursor = 'pointer';
		menu_top.style.boxShadow = '0px 4px 5px 4px rgba(167,210,0,0.3)';
	};

	menu_top.onmouseout = function() {
		menu_top.style.cursor = 'none';
		menu_top.style.boxShadow = 'none';
	};

	function itemHover() {
		for(var i = 0; i < menu_item.length; i++) {
			menu_item[i].onmouseover = function() {
				this.style.backgroundColor = 'rgba(21,143,0,0.1)';
			};
			menu_item[i].onmouseout = function() {
				this.style.backgroundColor = '#a7d200';
			};
		}
	}

	menu_top.onclick = function() {
		clickTimes += 1;
		if(clickTimes % 2 !== 0) {
			ul.style.display = 'block';
			itemHover();
		} else {ul.style.display = 'none';}
	};

}

window.onload = function() {
	task2();
};