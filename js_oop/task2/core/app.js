function Application() {
    'use strict';
}

Application.prototype.start = function () {
    'use strict';
    var flat = new House();
    flat.runFlat();
    flat.searchDevicesInRooms();
};