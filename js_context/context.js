//Calculator v1
function Calculator1(leftOperand) {
    'use strict';
    console.log('Calculator v1');
    this.myltiply = function (num) {
        return leftOperand * num;
    };
    this.add = function (num) {
        return leftOperand + num;
    };
    this.subtract = function (num) {
        return leftOperand - num;
    };
    this.divide = function (num) {
        return leftOperand / num;
    };
}

var calc1 = new Calculator1(12);

console.log(calc1.myltiply(2));
console.log(calc1.add(3));
console.log(calc1.subtract(1));
console.log(calc1.divide(2));

//Calculator v2
function Calculator2(leftOperand) {
    'use strict';
    var result = leftOperand;
    this.multiply = function (num) {
        result = result * num;
        return this;
    };
    this.add = function (num) {
        result = result + num;
        return result;
    };
}

var calc2 = new Calculator2(12);

alert('Calculator v2 result: ' + calc2.multiply(2).add(3));

//Calculator v3
function Calculator3(leftOperand) {
    'use strict';
    console.log('Calculator v3');
    this.multiply = function () {
        var result = [];
        result.push(leftOperand);
        for (var i = 0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }
        return result.reduce(function (a, b){
            return a * b;
        });
    };
    this.add = function () {
        var result = [];
        result.push(leftOperand);
        for (var i = 0; i < arguments.length; i++){
            result.push(arguments[i]);
        }
        return result.reduce(function (a, b) {
            return a + b;
        });
    };
    this.subtract = function () {
        var result = [];
        result.push(leftOperand);
        for (var i = 0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }
        return result.reduce(function (a, b) {
            return a - b;
        });
    };
    this.divide = function () {
        var result = [];
        result.push(leftOperand);
        for (var i = 0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }
        return result.reduce(function (a, b) {
            return a / b;
        });
    };
}

var calc3 = new Calculator3(12);

console.log(calc3.multiply(2, 2, 4, 5));
console.log(calc3.add(3, 1, 2));
console.log(calc3.subtract(1, 4, 2, 1));
console.log(calc3.divide(2, 6));


