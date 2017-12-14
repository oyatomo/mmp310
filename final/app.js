
var act = document.getElementById("action");
var wordOne = document.getElementById("wordOne");
var list = ['jump','juke','jive'];
action.onclick = function() {
    var x = "world";
    var wordTwo = document.getElementById("wordTwo").value;
    //wordOne.innerHTML = "world";
    var ran = list [Math.floor(Math.random() * list.length)];
    wordOne.innerHTML = ran;
    if (wordOne.innerHTML == wordTwo){
        console.log("Howdy_Homie");
    };
};
