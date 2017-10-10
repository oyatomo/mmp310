var submit = document.getElementById("submit");

submit.onclick = function () {
    'use strict';
    var nounOne = document.getElementById("nounOne").value;
    var nounTwo = document.getElementById("nounTwo").value;
    var nounThree = document.getElementById("nounThree").value;
    var nounFour = document.getElementById("nounFour").value;
    var nounFive = document.getElementById("nounFive").value;
    
    var pronounOne = document.getElementById("pronounOne").value;
    var pronounTwo = document.getElementById("pronounTwo").value;
    
    var verb = document.getElementById("verb").value;
    var event = document.getElementById("event").value;
    
    document.getElementById("message").innerHTML = "Today. Today... At the " + nounOne + " of our hope, at the end of our " + nounTwo + ", we have chosen not only to believe in " + pronounOne + ", but in " + pronounTwo + ". Today there is not a " + nounThree + " nor " + nounFour + " in here that shall stand alone. Not today. Today we face the "  + nounFive + " that are at our door and bring the fight to them! Today, we are " + verb +  " " + event + "!";  
};