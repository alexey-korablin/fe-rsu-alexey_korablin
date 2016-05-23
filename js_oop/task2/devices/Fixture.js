function Fixture(name, watt, plug) {
	'use strict';
	this.name = name;
	Device.call(this, name, watt, plug);
}

Fixture.prototype = Object.create(Device.prototype);