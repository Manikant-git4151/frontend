var input = document.getElementById("taskInput");
var btn = document.getElementById("addBtn");
var list = document.getElementById("list");

btn.addEventListener("click", function() {

    var task = input.value;

   
    if (task == "") {
        alert("Please enter something");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = task;


    li.onclick = function() {
        list.removeChild(li);
    };

    list.appendChild(li);

    input.value = "";
});