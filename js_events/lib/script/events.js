function	addItem() {
	'use strict';

	var submit = document.getElementById('toDoSubmit');
	var confirm = document.getElementById('confirm');
	var todoItem = document.getElementById('todoItem');
	var toDoName = document.getElementById('toDoName');

	function clickEvent() {
		confirm.style.visibility = 'visible';
		todoItem.innerHTML = toDoName.value;
	}



	submit.addEventListener('click', clickEvent);
}

window.onload = function() {
	'use strict';
	addItem();
};