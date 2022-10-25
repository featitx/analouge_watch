
// ANALOUGE CLOCK JS PROGRAM

let hr = document.querySelector("#hr");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sc");

setInterval(() => {
    
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;  
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    console.log("Git Demo");
    
});

// _____________________________________________________________________________________________________

// DIGITAL CLOCK JS PROGRAM
let hours = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("am");


function show(){

// PREDEFINE PROPERTY OF DATE OBJECTS
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
// var session = "AM" ;


// TO SWITCH AM TO PM
let  AM= h>=12? "PM" : "AM";
console.log(AM)

// TO CONVERT CLOCK FROM 24HR TO 12HR
if(h>12){
    h = h-12;    
    }

// TO ADD 0 BEFORE EVERY DIGIT IF IT LESS THAN 10
h = (h<10)? "0"+ h : h;
s = (s<10)? "0"+ s : s;
m = (m<10)? "0"+ m : m;


// TO SHOW IT IN OR DOM
hour.innerHTML = h;
minute.innerHTML = m;
second.innerHTML = s;
ampm.innerHTML = AM;

// TO MAKE IT DYNAMIC AND REALTIME
setTimeout(show,1000)

}

show();




      



