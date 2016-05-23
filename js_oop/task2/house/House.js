function House() {
    'use strict';
}

House.prototype = Object.create(Flat.prototype);

House.prototype.runFlat = function () {
    'use strict';
    var bedroom = new Bedroom();
    bedroom.showWattage();
    bedroom.showDevicesInTheRoom();
    bedroom.showPlugedDevices();
    var kitchen = new Kitchen();
    kitchen.showWattage();
    kitchen.showDevicesInTheRoom();
    kitchen.showPlugedDevices();
    var hall = new Hall();
    hall.showWattage();
    hall.showDevicesInTheRoom();
    hall.showPlugedDevices();
    Flat.call(this, [bedroom, kitchen, hall]);
}
