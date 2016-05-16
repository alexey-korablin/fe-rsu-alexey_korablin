var result = 0;

var wrap = function (val){
	'use strict';
  var value = val;
  var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
  
  //Task1
  function isArray() {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
	}
  
  //Task2
  function deepCloneArrHelper() {
    return deepCloneArr(value);
  }
  
  function deepCloneArr(arr) {
    var clonedArr = [];
    if (Array.isArray(arr)) {
        clonedArr = arr.slice(0);
        for (var i = 0; i < arr.length; i++) {
            clonedArr[i] = deepCloneArr(clonedArr[i]);
        }
        return clonedArr;
    } else {
        return arr;
    }
	}
  
  //Task3
  function mostFrequent() {
    var itemObj = {};
    var repeatItem;
    var maxRepeated = 0;
    for (var i = 0; i < value.length; i++) {
        itemObj[value[i]] = (itemObj[value[i]] || 0) + 1;
			if (itemObj[value[i]] > maxRepeated) {
	    	maxRepeated = itemObj[value[i]];
	    	repeatItem = value[i];
			}
    }
    return repeatItem;
	}
  
  //Task4
  function remDuplicateHelper() {
    return remDuplicate(value);
  }
  
  function remDuplicate(arr) {
    var newArray = [];
    function compare(arr, uniqArr) {
        var repeat;
        for (var i = 0; i < arr.length; i++) {
            repeat = 0;
            for (var j = 0; j < uniqArr.length; j++) {
                if (arr[i].toLowerCase() === uniqArr[j].toLowerCase()) {
                    repeat = 1;
                    break;
                }
            }
            if (repeat === 0) {
                uniqArr.push(arr[i]);
            }
        }
        return uniqArr;
    }
    return compare(arr, newArray);
	}
  
  //Task5
  function shuffleArr() {
    for (var i = value.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = value[i];
        value[i] = value[j];
        value[j] = temp;
    }
    return value;
	}
  
  //Task6
  function sortArrOfObjHelper() {
    return sortArrOfObj(library);
	}
  
  function sortArrOfObj(obj) {
    obj.sort(titleSort);
    function titleSort (a, b) {
        var titleA = a.title.toLowerCase();
        var titleB = b.title.toLowerCase();
        if (titleA > titleB) {
            return 1;
        }
        if (titleA < titleB) {
            return -1;
        }
        return 0;
    }
    var result = '';
    for (var i = 0; i < obj.length; i++) {
      result += ' Author: ' + obj[i].author + ', Title: ' + obj[i].title + ', LibraryID: ' + obj[i].libraryID + ' ***** ';
    }
    return result;
	}
  
  //Task7
  function mergeArrHelper(arr) {
    var array = arr;
    return mergeArr(array, value);
  }
  
  function mergeArr(arr1, arr2) {
    var arr3 = arr1.concat(arr2.filter(function (item) {
        return arr1.indexOf(item) < 0;
    }));
    return arr3;
  }
  
  //Task8
  function removeSpecificHelper(element) {
    var elem = element;
    return removeSpecific(value, elem);
  }
  
  function removeSpecific(arr, element) {
	  var index = arr.indexOf(element);
		if (index > 0) {
		  arr.splice(index, 1);
	  }
		return arr;
  }
  
  //Task9
  function randElemHelper() {
    return randElem(value);
  }
  
  function randElem(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  
  //Task10
  function moveElemHelper(one, two) {
    var indexOne = one;
    var indexTwo = two;
    return moveElem (value, indexOne, indexTwo);
  }
  
  function moveElem(arr, fromIndex, toIndex) {
	  var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
		return arr;
	}
  
  //Task11
  function strToArrHelper() {
    return strToArr(value);
  }
  
  function strToArr(str) {
    return str.trim().split(' ');
	}
  
  //Task12
  function capsFirstHelper() {
    return capsFirst(value);
  }
  
  function capsFirst(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}

  //Task13
  function camelizeHelper() {
    return camelize(value);
  }
  
  function camelize(str) {
    return str[0].toUpperCase() + str.replace(/\W+(.)/g, function (m, ch) {
        return ch.toUpperCase();
    }).slice(1);
	}  

  //Task14
  function sumArrElHelper(funct) {
    var func = funct;
    return sumArrEl(value, func);
  }
  
  function sumArrEl(arr, func) {
	  for (var i = 0; i < arr.length; i++) {
		  func(arr[i]);
		}
  }
  
  //Task15
  function getLengthObjHelper () {
    return getLengthObj (library);
  }
  
  function getLengthObj (obj) {
	  var length = 0;
		for(var key in obj) {
		  if (obj.hasOwnProperty(key)) {
			  length += 1;
			}
		}
		return length;
  }
  
  return  {
    isArray: isArray,
    deepCloneArrHelper: deepCloneArrHelper,
    mostFrequent: mostFrequent,
    remDuplicateHelper: remDuplicateHelper,
    shuffleArr: shuffleArr,
    sortArrOfObjHelper: sortArrOfObjHelper,
    mergeArrHelper: mergeArrHelper,
    removeSpecificHelper: removeSpecificHelper,
    randElemHelper: randElemHelper,
    moveElemHelper: moveElemHelper,
    strToArrHelper: strToArrHelper,
    capsFirstHelper: capsFirstHelper,
    camelizeHelper: camelizeHelper,
    sumArrElHelper: sumArrElHelper,
    getLengthObjHelper: getLengthObjHelper
  }
  
};

var task1_0 = wrap('qwe');
var task1_1 = wrap([1, 2, 4, 0]);
var task2 = wrap([[1, 3, 4], [5, 6, 7]]);
var task3 = wrap([1, 323, 45, 656, 1, 1]);
var task4 = wrap(['b', 'e', 'a', 's', 't', 'i', 'f', 't']);
var task5 = task4;
var task6 = wrap();
var task7 = task3;
var task8 = task3;
var task9 = task4;
var task10 = wrap([1, 323, 45, 656, 1, 1]);
var task11 = wrap(' Now, before I begin, why am I doing this lesson? ');
var task12 = wrap('they\'re all white');
var task13_a = wrap('Java Script');
var task13_b = wrap('java-script');
var task13_c = wrap('Java Script Exercises');
var task14 = wrap([2,4,1,2,4]);
var task15 = wrap();

console.log(task1_0.isArray());
console.log(task1_1.isArray());
console.log(task2.deepCloneArrHelper());
console.log(task3.mostFrequent());
console.log(task4.remDuplicateHelper());
console.log(task5.shuffleArr());
console.log(task6.sortArrOfObjHelper());
console.log(task7.mergeArrHelper([1, 2]));
console.log(task8.removeSpecificHelper(45));
console.log(task9.randElemHelper());
console.log(task10.moveElemHelper(4, 0));
console.log(task11.strToArrHelper());
console.log(task12.capsFirstHelper());
console.log(task13_a.camelizeHelper());
console.log(task13_b.camelizeHelper());
console.log(task13_c.camelizeHelper());
console.log(task14.sumArrElHelper(function(el){result += el;}), result);
console.log(task15.getLengthObjHelper());