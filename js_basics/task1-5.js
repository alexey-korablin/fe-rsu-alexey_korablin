'use strict';
// Task 1
var a = 22;
var b = "Cisco";
alert(a); alert(b);
console.log(a, b);

///Task 2 Area of triangle
var s = function (basis, height) {
    return 0.5 * basis * height;
};
console.log("Area of triangle is " + s(prompt('Enter basis of triangle (cm): '), prompt('Enter heoght of triangle (cm): ')) + " centimeters");

//Task 3 Array reverse
var arr = [15, "a", "b"];

//Blok of "for" loop
console.log("Loop 'for'");
var reverseFor = function(arr){
  var newArr = [];
  for(var i = 0, j = arr.length-1; i<arr.length; i++, j--){
    newArr[i] = arr[j];
  }
  return newArr;
}
console.log(reverseFor(arr));

//Blok of "while" loop
console.log("Loop 'while'");
var newArr1 = [];
var reverseWhile = function (arr) {
  var i = 0;
  var j = arr.length - 1;
  while (i < arr.length) {
    newArr1[i] = arr[j];
    i++;
    j--;
  }
  return newArr1;
};
console.log(reverseWhile(arr));

//Blok of "do while" loop
console.log("Loop 'do while'");
var newArr2 = [];
var reverseDoWhile = function (arr) {
	var i = 0;
	var j = arr.length - 1;
	do{
		newArr2[i] = arr[j];
		i++; j--;
	}while (i < arr.length);
	return newArr2
}
console.log(reverseDoWhile(arr));

//Task4 Инкремент с посфиксной и прфексной записью
// Инкремент - увеличение значения переменной на единицу. Пример: "i++" или "++i". Существует две формы записи: префиксная (++i) 
// и постфиксная (i++). Ключевым различием является то, что при префиксной форме записи сначала уведичивается значение переменной, 
// а потом с ней производятся какие-либо действия, при посфиксной форме записи сначала производятся действия со значением переменной, 
// а потом происходит увеличение ее значения на единицу.
// Пример:
var a = 0;
var b = 0;
// префиксная запись
console.log("prefix");
b = ++a; console.log("b is " + b); console.log("a is " + a);
// постфиксная запись
console.log("postfix");
b = a++; console.log("b is " + b); console.log("a is " + a);

//Task5
console.log("Check arguments");
var argsList = [-4, 3, 1, 0, "a"];

var checkArgs = function (args) {
  var value;
  for(var i=0; i < args.length; i++){
    value = args[i];
    if (value > 0) {
      console.log(value + " is positive number");
    }else if(value === 0){
      console.log(value + " is zero");
    }else if(value < 0){
      console.log(value + " is negative number");
    }else{console.log(value + " not a number");}
}
};
console.log(checkArgs(argsList));