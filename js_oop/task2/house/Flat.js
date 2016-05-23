function Flat(rooms) {
    'use strict';
    this.rooms = rooms;
}

Flat.prototype = Object.create(Room.prototype);

Flat.prototype.searchDevicesInRooms = function () {
    var searching = prompt('Search Device');
    var roomsCount = searching;
    var result = '';
    if (searching == null) {
        alert('Nothing was entered');
        console.info('Nothing was entered');
   } else {
        for (var i = 0; i < this.rooms.length; i++){
            for (var j = 0; j < this.rooms[i].devices.length; j++) {
                if(roomsCount.toLowerCase() === this.rooms[i].devices[j].getName().toLowerCase()) {
                    result += this.rooms[i].getRoomName();
                }
            }
        }
        if (result === '') {
            alert('The device not found ' + result);
            console.info('The device not found ', result);
        } else {
            console.info('This device is in the', result);
        }
    }
};