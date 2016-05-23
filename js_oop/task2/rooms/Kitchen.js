function Kitchen() {
	'use strict';
	var ariston = new Fridge('Ariston', 130, true);
	Room.call(this, 'Kitchen', [ariston])
}

Kitchen.prototype = Object.create(Room.prototype);