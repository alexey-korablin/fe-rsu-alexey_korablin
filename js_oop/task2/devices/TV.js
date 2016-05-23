function TV(name, watt, plug) {
    'use strict';
    Device.call(this, name, watt, plug);
}

TV.prototype = Object.create(Device.prototype);