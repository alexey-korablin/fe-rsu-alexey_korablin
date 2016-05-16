var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
var array1 = ['T', 'h', 'i', 's'], array2 = ['w', 'i', 'l', 'l'];
var result = 0;
var writer = { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264};

var wrap = (function () {

	function test (task) {
		switch (task) {
			case 'task1':
				return function isArray (val) {
				  if(Array.isArray(val)) {
				    return true;
				  } else {return false;}
				};
				break;
			case 'task2':
				return function deepCloneArr (arr) {
					var clonedArr = [];
					if(Array.isArray(arr)) {
						clonedArr = arr.slice(0);
						for (var i = 0; i < arr.length; i++) {
							clonedArr[i] = deepCloneArr(clonedArr[i]);
						}
						return clonedArr;
					}else{ return arr; }
				};
				break;
			case 'task3':
				return function mostFrequent (arr) {
					var itemObj = {};
					var repeatItem;
					var maxRepeated = 0;
					for (var i = 0; i < arr.length; i++) {
						itemObj[arr[i]] = (itemObj[arr[i]] || 0) + 1;
						if (itemObj[arr[i]] > maxRepeated) {
							maxRepeated = itemObj[arr[i]];
							repeatItem = arr[i];
						}
					}
					return repeatItem;
				};
			case 'task4':
				return function remDuplicate (arr) {
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
				};
			case 'task5':
				return function shuffleArr(arr) {
			    for (var i = arr.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = arr[i];
		        arr[i] = arr[j];
		        arr[j] = temp;
				    }
				    return arr;
				};
			case 'task6':
				return function sortArrOfObj(obj) {  
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
				  };
				  var result = '';
				  for (var i = 0; i < obj.length; i++) {
				    result += ' Author: ' + obj[i].author + ', Title: ' + obj[i].title + ', LibraryID: ' + obj[i].libraryID + ' ***** ';
				  }
				  return result;
				};
			case 'task7':
				return function mergeArr (arr1, arr2) {
					var arr3 = arr1.concat(arr2.filter(function (item){ return arr1.indexOf(item) < 0; }));
						return arr3;
				};
			case 'task8':
				return function removeSpecific (arr, element) {
				  var index = arr.indexOf(element);
				  if (index > 0) {
				    arr.splice(index, 1);
				  }
				  return arr;
				};
			case 'task9':
				return function RandElem (arr) {
				  var rand = Math.floor(Math.random() * arr.length);
				  return arr[rand];
				};
			case 'task10':
				return function MoveElem (arr, fromIndex, toIndex) {
					var element = arr[fromIndex];
					arr.splice(fromIndex, 1);
					arr.splice(toIndex, 0, element);
					return arr;
				};
			case 'task11': 
				return function strToArr (str) {
				  return str = str.trim().split(' ');
				};
			case 'task12':
				return function capsFirst (str) {
				  return str = str.charAt(0).toUpperCase() + str.slice(1);
				};
			case 'task13':
				return function camelize (str) {
				  return str[0].toUpperCase() + str.replace(/\W+(.)/g, function (m, ch) {return ch.toUpperCase();}).slice(1);
				};
			case 'task14':
				return function sumArrEl (arr, func) {
				  for (var i = 0; i < arr.length; i++) {
				    func(arr[i]);
				  }
				};
			case 'task15':
				return function getLengthObj (obj) {
				  var length = 0;
				  for(var key in obj) {
				    if (obj.hasOwnProperty(key)) {
				      length += 1;
				    }
				  }
				  return length;
				};
			default:
				console.log('No data');
		}
	};
	return {
		test: test
	};
}());

var test1 = wrap.test('task1');
var test2 = wrap.test('task2');
var test3 = wrap.test('task3');
var test4 = wrap.test('task4');
var test5 = wrap.test('task5');
var test6 = wrap.test('task6');
var test7 = wrap.test('task7');
var test8 = wrap.test('task8');
var test9 = wrap.test('task9');
var test10 = wrap.test('task10');
var test11 = wrap.test('task11');
var test12 = wrap.test('task12');
var test13 = wrap.test('task13');
var test14 = wrap.test('task14');
var test15 = wrap.test('task15');

console.log(test1('qwe'), test1([1, 2, 4, 0]));
console.log(test2([[1, 3, 4], [5, 6, 7]]));
console.log(test3(['b', 'e', 'a', 's', 't', 'i', 'f', 't']));
console.log(test4(['A','c','a','C']));
console.log(test5(['e', 'x', 'c', 'l', 'u', 's', 'i', 'o', 'n']));
console.log(test6(library));
console.log(test7(array1, array2));
console.log(test8(['e', 'r', 'g', 'm', 'e'], 'g'));
console.log(test9(['e', 'r', 'g', 'm', 'e']));
console.log('Source array: ' + ['e', 'r', 'g', 'm', 'e'] + '; modified array: ' + test10(['e', 'r', 'g', 'm', 'e'], 1, 2));
console.log(test11(' Now, before I begin, why am I doing this lesson? '));
console.log(test12('they\'re all white'));
console.log(test13('Java Script') + ' ' + test13('java-script') + ' ' + test13('Java Script Exercises'));
test14([2,4,1,2,4], function(el){
		result += el;
});
console.log(result);
console.log(test15(writer));
