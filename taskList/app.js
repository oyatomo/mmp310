var add = document.getElementById("add");

add.onclick = function () {
    var txt = document.getElementById("txt").value;
    var tasks = document.getElementById("tasks")
    var task =document.createElement("li");
    
    task.innerHTML = txt;
    tasks.append(task);
};