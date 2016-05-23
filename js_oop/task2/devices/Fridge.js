function Fridge(name, watt, plug) {
    'use strict';
    this.name = name;
    Device.call(this, name, watt, plug);
}

Fridge.prototype = Object.create(Device.prototype);