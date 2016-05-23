function Iron(name, watt, plug) {
    'use strict';
    this.name = name;
    Device.call(this, name, watt, plug);
}

Iron.prototype = Object.create(Device.prototype);