//the alarm will be the Magic School bus theme song. Selected this song because it gets kids excited about school.

var magicTheme = new Audio(src="/Sound/msb.mp3");

var h2 = document.getElementById("inner"); //enables current time to display in the h2 div

// display current time by the second. I have set to military time for simplicity
var time = setInterval(function(){
	var date = new Date(); //JS function that retrieves the current date and time 
	
	var h = date.getHours(); //retrieves the current hour
	var m = date.getMinutes(); //retrieves the current minute
	var s = date.getSeconds(); //retrieves the current second

	h2.textContent = addZero(h) + ":" + addZero(m) + ":" + addZero(s); //addZero element ensures that time always has 2 digits ex. 1 -> 01
	
},1000); //note time set to milliseconds; 1 sec is 1000 milliseconds 


// below functions to display current hour, minutes, and seconds
function addZero(time) {
		return (time < 10) ? "0" + time : time;
}

function hrInput(){

	var hours = document.getElementById("ch");
	var hrs = 24 //set to military time

	for (i=1; i <= hrs; i++) {
		hours.options[hours.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hrInput(); //places hours in the alarm box

function minInput(){

	var minutes = document.getElementById("cm");
	var min = 59;

	for (i=0; i <= min; i++) {
		minutes.options[minutes.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minInput(); //places minutes in the alarm box

function secInput(){

	var seconds = document.getElementById("cs");
	var sec = 59;

	for (i=0; i <= sec; i++) {
		seconds.options[seconds.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secInput(); //places secondss in the alarm box


function setAlarm() {

	var hr = document.getElementById("ch"); //connects selected hour to be in line with clock hour
	var min = document.getElementById("cm"); //connects selected minute to be in line with clock minute
	var sec = document.getElementById("cs"); //connects selected second to be in line with clock second
	
    var setHour = hr.options[hr.selectedIndex].value; //.options returns the value out whatever hour is selected  
    var setMin = min.options[min.selectedIndex].value;
    var setSec = sec.options[sec.selectedIndex].value;

    var selectedTime = addZero(setHour) + ":" + addZero(setMin) + ":" + addZero(setSec);
    console.log("alarmTime" + selectedTime);

    document.getElementById("ch").disabled = true; //.disabled disables the alarm hours until the alarm has been cleared
	document.getElementById("cm").disabled = true;
	document.getElementById("cs").disabled = true;


//when alarmtime is equal to currenttime then play the theme song
	var h2 = document.getElementById("inner");

//Place the digital clock function into the alarm function so that when they are the same, the theme song will go off
    setInterval(function(){
	    var date = new Date();

	    var hours = date.getHours();
	    var minutes = date.getMinutes();
	    var seconds = date.getSeconds();
	
	    var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
	

	if (selectedTime == currentTime) {
		magicTheme.play();
		}
},1000); //note time set to milliseconds; 1 sec is 1000 milliseconds 
}

//function to clear the alarm when the "End Alarm" button is pushed
function clearAlarm() {

	document.getElementById("ch").disabled = false; //.disabled = false enables the alarm hours to be reset
	document.getElementById("cm").disabled = false;
	document.getElementById("cs").disabled = false;
	magicTheme.pause(); //pause theme song when "End Alarm" button clicked
}

