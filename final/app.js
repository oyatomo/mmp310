var action = document.getElementById("action");
var obj = document.getElementById("objective");
var txt = ['JUMP', 'JIVE', 'JET', 'MATCH', 'SET', 'GAME'];
var countdown = 5;

window.setInterval(function() {
    if (countdown >= 0) {
    document.querySelector('#countdown').innerHTML = countdown;
    countdown--;
    } else {
        alert('done.');
    }
}, 1000);

action.onclick = function() {
    
    var txtRan = txt[Math.floor(Math.random() * txt.length)];
    obj.innerHTML = txtRan;
};