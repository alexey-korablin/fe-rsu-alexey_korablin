function Room(name, devices) {     'use strict';     this.name = name;
this.devices = devices;     Device.call(this, name); }

Room.prototype = Object.create(Device.prototype);

Room.prototype.getRoomName = function() {
	'use strict';
    return this.name;
};

Room.prototype.showRoomName = function() {
	'use strict';
    console.info(this.getRoomName());
};

Room.prototype.getWattage = function () {
    'use strict';
    var totalWattage = 0;
    for (var i = 0; i < this.devices.length; i++) {
        totalWattage += this.devices[i].getWattage();
    }
    return totalWattage;
};

Room.prototype.getNames = function () {
    'use strict';
    var allDevices = [];
    for (var i = 0; i < this.devices.length; i += 1) {
        allDevices.push(this.devices[i].getName());
    }
    return allDevices;
};

Room.prototype.showWattage = function () {
    'use strict';
    console.info('Wattage of ' + this.getName() + ' is ' + this.getWattage());
};

Room.prototype.search = function (what) {
    'use strict';
    this.findDevice(what);

    this.devices.forEach(function (device) {
        device.findDevice(what);
    });
};

Room.prototype.getPlugedDevices = function () {
    'use strict';
    var plugedDevices = [];
    for (var i = 0; i < this.devices.length; i++) {
        plugedDevices.push(this.devices[i].getPlug());
    }
    return plugedDevices;
};

Room.prototype.showDevicesInTheRoom = function () {
    'use strict';
    console.info('Devices in the ' + this.getName() + ' are ' + this.getNames().join(', '));//toString());
};

Room.prototype.showPlugedDevices = function () {
    'use strict';
    var str = '';
    for (var i = 0; i < this.getPlugedDevices().length; i += 1) {
        if (this.getPlugedDevices()[i] === null) {
            str += '';
        } else {
            str += this.getPlugedDevices()[i] + ' ';
        }
        
    }
    str = str.slice(0, -1);
    console.info('Pluged devices in the ' + this.getName() + ' are ' + str + '.');
};
