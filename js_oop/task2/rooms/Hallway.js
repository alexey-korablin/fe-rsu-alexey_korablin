function Hallway() {
    'use strict';
     var fixture = new Fixture('Cascade', 25, true);
    Room.call(this, 'Hallway', [fixture]);
}

Hallway.prototype = Object.create(Room.prototype);