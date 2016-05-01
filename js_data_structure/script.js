/*global document, window, alert, console, require*/
//Task 1 'Current day and time'
"use strict";
var dateAndTime = (function () {
  console.log("Task 1 'Current day and time'");
    var currentDate = (function () {
        var nowDate = new Date();
        var nowDay = nowDate.getDay();
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var currentDay = week[nowDay];
        console.log("Today is: " + currentDay);
    }());

    var currentTime = (function () {
        var nowDate = new Date();
        var nowHour = nowDate.getHours();
        var nowMinute = nowDate.getMinutes();
        console.log("Right now is: " + nowHour + " hours " + nowMinute + " minutes");
    }());
}());

//Task2.
var nowDate = (function () {
  console.log('Task2');
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var dateNow = date.getDate();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var twelveMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    minutes < 10 ? minutes='0'+ minutes : minutes;
    console.log(dateNow+' '+weekDays[day]+' '+twelveMonths[month]+' '+year+' '+hours+':'+minutes);
}());

//Task 3. 1st January is Sunday between 2014 and 2050
var getSunday = function () {
    console.log('Task 3. 1st January is Sunday between 2014 and 2050');
    var startYear = 2014; var endYear = 2050;
    for(var i = startYear; i<=endYear; i++){
        var ownDate = new Date(i, 0, 1);
        if (ownDate.getDay() === 0) console.log("Sunday is a first day of the Year "+ownDate.getFullYear());
    }
}();

//Task 4. Days left until next New Year
var daysLeft = (function () {
    console.log("Task 4. Days left until next New Year");
    var newYear = new Date(2017, 0, 1);
    var currentDate = new Date();
    var daysCount = newYear - currentDate;
    var msPerDay = 24 * 60 * 60 * 1000;
    var dayLeft = Math.round(daysCount / msPerDay);
    console.log("Until next New Year left " + dayLeft + " days");
}());

//Task5. "Check" is array
console.log('Task5. "Check" is array');
var is_array = function (item) {
    return (item instanceof Array);
};
console.log(is_array("qwe"));
console.log(is_array([1, 2, 4, 0]));

//Task6. Clone an array
var cloneArray = (function () {
    console.log("Task6. Clone an array");
    var arr1 = [1, 2 , 34, 'we'];
    var arr2 = [];
    for(var i=0; i<arr1.length; i++){
        arr2[i] = arr1[i];
    }
    console.log("Source array: " + arr1);
    console.log("Cloned array: " + arr2);
}());
//Task7. Find the most frequent item 
console.log("Task7.Find the most frequent item");
var mostFrequentItem = (function () {
    console.log("Find the most frequent item");
    var str = "The difference between school and life?";
    var arr = str.split('');
    var count = 0; var maxNum = 0;
    var curCh; var finCh;
    for(var i=0; i<arr.length; i++){
    count = 0;
    for(var j=0;j<arr.length;j++){
        if(arr[i] == arr[j]){
        count++;
        }
    }
    curCh = arr[i];
    if(count>maxNum){
        if(curCh == ' '){
            finCh = 'space';
        }else{finCh = curCh;}
        maxNum = count;
    }
    }
console.log("Most frequent item is: '" + finCh + "' item repeated " + maxNum + " times");
}());
//Task8. Inverting of the string
var invertStr = (function () {
    console.log("Task8. Inverting of the string");
    var str = "In life, you’re given a test that teaches you a lesson";
    var arr = [];
    var newArr = [];
    var result;
    arr = str.split('');
    for(var i=arr.length-1, j=0; i>=0; i--, j++){
      newArr[j] = arr[i];
      result = newArr.join('');
    }
    console.log(result);
    console.log("***Inverse inverting of the string***");
    function reverseStr(str) {
        return str.split("").reverse().join("");
    }
    console.log(reverseStr(result));
}());
//Task9. Remove duplicate items
var remDup = (function () {
    console.log("Task9. Remove duplicate items");
    var str = "diFferEnce234453";
    str = str.toLowerCase();
    var arr = str.split('');
    var count = 0;
    for(var i=0; i<arr.length; i++){
    count = 0;
        for(var j=0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
                if (count >= 2){
                    delete arr[j];
                }
            }
        }
    }
    str = arr.join('');
    console.log(str);
}());
//Task10. Shuffle the array
var shuffleArr = (function () {
  console.log("Task9. Remix array");
  var arr = 'rezultat';
  arr = arr.split('');
  arr.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(arr);
}());
//Task11. Deleting 'null', '0', '""', 'false', 'undefined' and 'NaN'
var clearArr = (function () {
    console.log("Task11. Deleting 'null', '0', '\"\"', 'false', 'undefined' and 'NaN'");
    var arrDirt = ['null', '0', 1, '""', 'false', 0, 'undefined', 'NaN'];
    for(var i=0; i<arrDirt.length; i++){
        switch(arrDirt[i]) {
            case 'null':
                delete arrDirt[i];
                break;
            case '0':
                delete arrDirt[i];
                break;
            case 0:
                delete arrDirt[i];
                break;
            case '""':
                delete arrDirt[i];
                break;
            case 'false':
                delete arrDirt[i];
                break;
            case 'undefined':
                delete arrDirt[i];
                break;
            case 'NaN':
                delete arrDirt[i];
                break;
            default:
                break;
        }
    }
    console.log(arrDirt);
}());
//Task12. Sort the array of objects by title 
var compareItems = (function () {
    console.log("Task12. Sort the array of objects by title");
    var library = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    library.sort(function compareTitle(title1, title2){return (title1.title > title2.title) - 0.5;});
    for(var i = 0; i<library.length; i++){
    console.log(library[i]);
    }
}());
//Task13. Merge two arrays and removes all duplicates elements
var mergeArr = (function () {
    console.log("Merge two arrays and removes all duplicates elements");
    var arr1 = ["m", "o", "r", "e"];
    var arr2 = ["s", "o", "r", "t", "i", "n", "g"];
    var arr3 = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                arr2.splice(j, 1);
            }
        }
    }
    arr3 = arr3.concat(arr1, arr2);
    console.log(arr1, arr2, arr3);
}());
//Task14. Removing a specific element from an array
var remElement = (function () {
    console.log("Task14. Removing a specific element from an array");
    var arr = ["That", "would", "work", "in", "and", "all", "the", "browsers", "I", "know", "of,", "but", "it", "would", "be", "dependent", "on", "an", "implementation", "quirk,", "and", "could", "break", "at", "any", "time."];
    arr.forEach(function (e, i, a) {
        if (e === "an") {
            a.splice(i, 1);
        }
    });
    console.log(arr);
}());
//Task15. Getting a random item from an array
var randItem = (function () {
    console.log("Task15. Getting a random item from an array");
    var arr = ["a", "s", "s", "u", "m", "p", "t", "i", "o", "n", "s"];
    var min = 0;
    var max = arr.length - 1;
    var rand;
    rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(arr[rand]);
}());
//Task16. Move an array element from one position to another
var moveItem = (function (a, b) {
    console.log("Task16. Move an array element from one position to another");
    var arr = ["t", "e", "e", "n", "a", "g", "e", "r", "s"];
    var itemA = arr[a];
    var itemB = arr[b];
    arr[a] = itemB;
    arr[b] = itemA;
    console.log(arr);
}(0, 1));
//Task17. Difference between two dates in days
var dateDifference = (function () {
    console.log("Task17. Difference between two dates in days");
    var dateOne = new Date(2010, 4, 10);
    var dayOne = dateOne.getDate();
    var monthOne = dateOne.getMonth();
    var yearOne = dateOne.getFullYear();
    var dateTwo = new Date(2016, 4, 9);
    var dayTwo = dateTwo.getDate();
    var monthTwo = dateTwo.getMonth();
    var yearTwo = dateTwo.getFullYear();
    var diffDate = dateOne - dateTwo;
    var msPerDay = 24 * 60 * 60 * 1000;
    if (diffDate < 0) {
        diffDate *= -1;
    }
    diffDate = Math.floor(diffDate / msPerDay);
    console.log("The Difference between date " + dayOne + " " + monthOne + " " + yearOne + " and date " + dayTwo + " " + monthTwo + " " + yearTwo + " is " + diffDate + " days");
}());
//Task18. Get the maximum date from an array of dates
console.log("Task18. Get the maximum date from an array of dates");
var maxDate = function(date) {
    var dateOne;
    var dateTwo;
    var dateThree;
    var arrWhole = [dateOne, dateTwo, dateThree];
    for(var i=0; i<arrWhole.length; i++){
        arrWhole[i] = (new Date(date[i].slice(0,4), date[i].slice(5,7), date[i].slice(8))) * 1;
    }
    arrWhole.sort(function compare_date (date1, date2) {return (date1 < date2);});
    var response = new Date(arrWhole[0]);
    return response.getFullYear() + "/0" + response.getMonth() + "/0" + response.getDate();
};
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
//Task19. Split a string and convert it into an array of words
var splitStr = (function () {
    console.log("Task19. Split a string and convert it into an array of words");
    var str = "They had been learning programming as a part of their school curriculum.";
    var arrWords = str.split(" ");
    console.log(arrWords);
}());
//Task20. Capitalize the first letter of a string
var capitalizeFirst = (function () {
    console.log("Task20. Capitalize the first letter of a string");
    var str = "i had looked into learning Javascript, but was too intimidated to start.";
    var strCap = str[0].toUpperCase() + str.slice(1);
    console.log(strCap);
}());
//Task21. Convert a string into camel case
console.log("Task21. Convert a string into camel case");
function camelize(str) {
    return str[0].toUpperCase() + str.replace(/\W([a-z])/gi, function (b) {
        return b.toUpperCase();
    }).slice(1);
}
console.log(camelize("Java Script"));
console.log(camelize("java-script"));
console.log(camelize("Java Script Exercises"));
//Task22. Find the highest value in an array
var highestInArray = (function () {
    console.log("Task22. Find the highest value in an array");
    var arr = [1, 5, 6];
    var highestValue = function (arr) {
        arr.sort(function (a, b) {
            return (a < b) - 0.5;
        });
        return arr[0];
    };
    console.log("The highest value in the array " + arr + " is " + highestValue(arr));
}());
//Task23. Find the lowest value in an array
var lowestInArray = (function () {
    console.log("Task23. Find the lowest value in an array");
    var arr = [6, 4, 6];
    var lowestValue = function (arr) {
        arr.sort(function (a, b) {
            return (a > b) - 0.5;
        });
        return arr[0];
    };
    console.log("The lowest value in the array " + arr + " is " + lowestValue(arr));
}());
//Task24. Check whether a variable is numeric or not
var isNumeric = (function(){
    console.log("Task24. Check whether a variable is numeric or not");
    var bool = undefined;
    var str = {firstName : "Jon", lastName : "Doe"};
    var num = false;
    var obj = 3;
    var arr = "asus";
    var regExp = undefined;
    var variablesArr = [bool, str, num, obj, arr, regExp];
    for(var i = 0; i<variablesArr.length; i++){
        if (typeof variablesArr[i] == "number"){
            console.log(variablesArr[i] + " is a numeric ");
        }else{console.log(variablesArr[i] + " isn't a numeric");}
    }
}());
//Task25. Calculate the sum of values in an array
var sumArrItems = (function(){
    console.log("Task25. Calculate the sum of values in an array");
    var arr = [];
    var sum = 0;
    for(var i = 0; i<3; i++){
        arr[i] = Math.floor(Math.random() * 200000 + 900);
    }
    for(i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log("The sum array items " + arr + " is " + sum);
}());
//Task26. Get the length of a JavaScript object
var objectLength = (function () {
    console.log("Task26. Get the length of a JavaScript object");
    var someObject = {genre: "drama",
            author: "noname",
            name: "blah-blah text",
            year: 1912};
    var otherObject = Object.keys(someObject).length;
    console.log("The object length is " + otherObject);
}());
//Task27. List the properties of a JavaScript object
var objectLength = (function () {
    console.log("//Task27. List the properties of a JavaScript object");
    var someObject = {genre: "drama",
            author: "noname",
            name: "blah-blah text",
            year: 1912};
    var otherObject = Object.keys(someObject);
    var propList = [];
    for(var i = 0; i<otherObject.length; i++){
        propList[i] = someObject[otherObject[i]];
    }
    console.log("The list of object keys properties is: " + propList);
}());

//Task27. List the properties of a JavaScript object (for in loop)
var objectLength = (function () {
    console.log("//Task27. List the properties of a JavaScript object (for in loop)");
    var someObject = {genre: "drama",
            author: "noname",
            name: "blah-blah text",
            year: 1912};
    var propList = [];
    for(var key in someObject){
        propList.push(someObject[key]);
    }
    console.log("The list of object keys properties is: " + propList);
}());