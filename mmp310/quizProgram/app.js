/*
If the answer is correct display a positve message. esle display answer explanation.
If all answer are correct display massage saying 100%
*/

var finish = document.getElementById("finish");
var score = 0;

finish.onclick = function () {
    'use strict';
    
    var screen = document.getElementById("screen");
    if (screen.value === "16:9") {
        document.getElementById("demo").innerHTML = "O";
        score = score + 1;
    } else {
        document.getElementById("demo").innerHTML = "X";
    }
/////////////////////////////////////////////////////////// 
    var drive = document.getElementById("drive");
    if (drive.value === "Solid State") {
        document.getElementById("test").innerHTML = "O";
        score = score + 1;
    } else {
        document.getElementById("test").innerHTML = "X";
    }
/////////////////////////////////////////////////////////// 
    var boot = document.getElementById("boot");
    if (boot.value === "Computer manual") {
        document.getElementById("test2").innerHTML = "O";
        score = score + 1;
    } else {
        document.getElementById("test2").innerHTML = "X";
    }
/////////////////////////////////////////////////////////// 
    var ip = document.getElementById("ip");
    if (ip.value === "NETSTAT") {
        document.getElementById("test3").innerHTML = "O";
        score = score + 1;
    } else {
        document.getElementById("test3").innerHTML = "X";
    }
///////////////////////////////////////////////////////////
    if (score === 4) {
        alert("100%");
    } else if (score === 3) {
        alert("75%");
    } else if (score === 2) {
        alert("50%");
    } else if (score === 1) {
        alert("25%");
    } else if (score === 0) {
        alert("You did not get any correct");
    }
};
