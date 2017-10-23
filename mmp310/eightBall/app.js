var enter = document.getElementById("enter");

enter.onclick = function () {
    
    var quest = document.getElementById("quest").value;
    /*document.getElementById("demo").innerHTML = quest;*/
    var answers = ["For sure", "No doubt", "Sure", "Yeah", "I am not telling", "Maybe", "This is non of my business", "YIKES", "Do not quit your day job", "Nah playa"];
    
    var output = answers[Math.floor(Math.random() * answers.length)];
    /*answers[Math.floor(Math.random() * a.length)];*/
    /*alert(Math.floor(Math.random() * a.length));*/
    /*alert(answers);*/
    
    document.getElementById("quest2").innerHTML = "Q: " + quest;
    document.getElementById("answer").innerHTML = "A: " + output;
};