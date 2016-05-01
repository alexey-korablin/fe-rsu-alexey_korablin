"use strict";
//Task 6
console.log("Greating");
var greating = function (name) {
  alert("Hi, " + name + "!");
};
greating(prompt("What is your name? "));

//Task 7
console.log("Factorial calculate");
var factorial = function (num) {
  var result = num;
  for(var i=1; i < num; i++){
    result*=i;
  }return result;
};
console.log(factorial(6));