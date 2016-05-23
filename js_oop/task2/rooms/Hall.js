function Hall() {
    'use strict';
     var lg = new TV('LG', 190, true);
    Room.call(this, 'Hall', [lg]);
}

Hall.prototype = Object.create(Room.prototype);