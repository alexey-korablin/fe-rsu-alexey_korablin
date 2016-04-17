//Task 1 'Current day and time'
var dateAndTime = function(){
	console.log("Task 1 'Current day and time'");
	var currentDate = function(){ 
		var nowDate = new Date(); 
		var nowDay = nowDate.getDay(); 
		var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
		var currentDay = week[nowDay]; 
		console.log("Today is: " + currentDay); 
	}(); 


	var currentTime = function(){ 
		var nowDate = new Date(); 
		var nowHour = nowDate.getHours(); 
		var nowMinute = nowDate.getMinutes(); 
		console.log("Right now is: " + nowHour + " hours " + nowMinute + " minutes"); 
	}();
}();

//Task 3. 1st January is Sunday between 2014 and 2050
var getSunday = function(){
	console.log('Task 3. 1st January is Sunday between 2014 and 2050')
  var startYear = 2014; var endYear = 2050;
  for(i = startYear; i<=endYear; i++){
    var ownDate = new Date(i, 0, 01);
    if (ownDate.getDay() == 0) console.log("Sunday is a first day of the Year "+ownDate.getFullYear());
  }
}();
//Task 4. Days left until next New Year
var daysLeft = function(){
	console.log("Task 4. Days left until next New Year");
	var newYear = new Date(2017, 0, 1);
	var currentDate = new Date();
	var daysCount = newYear - currentDate;
	var msPerDay = 24*60*60*1000;
	var dayLeft = Math.round(daysCount/msPerDay)
	console.log("Until next New Year left "+dayLeft+" days");
}();
/*
var newYear = new Date(2017, 0, 1);
console.log(newYear);
var currentDate = new Date();
console.log(currentDate);
var days = newYear - currentDate;
console.log(days);
var daysLeft = new Date(days);
console.log(Math.round(daysLeft/msPerDay));
var msPerDay = 24*60*60*1000;
*/