function Bedroom() {
    'use strict';
    var iron = new Iron('Philips', 600, true);
    //Room.call(this, 'Bedroom', [iron]);
    var lamp = new Fixture('Super Light 5000', 50, true);
    Room.call(this, 'bedroom', [lamp, iron]);
}

Bedroom.prototype = Object.create(Room.prototype);