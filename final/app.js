var min = 5;
var max = 10;
var key = "73b14a85cecb42fc399420641d10f5dabe0cabe9be42ca241";
var url = "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=" +min +"&maxLength=" + max +"&limit=1&api_key=";
// https://stackoverflow.com/questions/26622708/how-to-get-random-word-using-wordnik-api-in-javascript
// https://www.wordnik.com/users/edit

var act = document.getElementById("action");
var wordOne = document.getElementById("wordOne");
var wordTwo = document.getElementById("wordTwo");
var count = 60;
var score = 0;
var scoreP = document.getElementById("scoreP");
var timeP = document.getElementById("timeP");

    var countdown = function(){
    
    if (count == 0) clearInterval(countdownInterval);
        {
            console.log(count);
        }
    timeP.innerHTML = count;
	count--;
    
};
    

function nextWord() {
  wordOne.textContent = "1 point added to total score!";
   $.getJSON(url + key, function(data) {
      wordOne.textContent = data[0].word;
   });
    score ++;
    scoreP.innerHTML = score;
    console.log(score);
    var countdownInterval = setInterval(countdown, 500);
    countdown();
}

wordTwo.addEventListener('input', function() {
  if (wordOne.textContent == wordTwo.value) {
    wordTwo.value = "";
    nextWord();
  }
});

action.onclick = nextWord;
