function Device(name, watt, plug) {
	'use strict';
	this.name = name;
	this.watt = watt;
	this.plug = plug;
}

Device.prototype.getName = function() {
	'use strict';
	return this.name;
};

Device.prototype.getWattage = function() {
	'use strict';
	if (this.plug == true) {
		return this.watt;
	} else {
		return 0;
	}
};

Device.prototype.getPlug = function() {
	'use strict';
	if (this.plug == true) {
		return this.name;
	} else {
		return null;
	}
};

Device.prototype.findeDevice = function(what) {
	'use strict';
	if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
		console.info(what + 'has been found in ' + this.getName());
	}
};
