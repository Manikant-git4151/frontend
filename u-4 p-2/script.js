var text = document.getElementById("text");
var btn1 = document.getElementById("changeTextBtn");

btn1.addEventListener("click", function () {
  text.innerHTML = "Text is changed now";
});

var btn2 = document.getElementById("themeBtn");

btn2.addEventListener("click", function () {
  if (document.body.className == "dark") {
    document.body.className = "";
  } else {
    document.body.className = "dark";
  }
});

var addBtn = document.getElementById("addBtn");
var input = document.getElementById("itemInput");
var list = document.getElementById("list");

addBtn.addEventListener("click", function () {
  var value = input.value;

  if (value != "") {
    var li = document.createElement("li");
    li.innerHTML = value;

    li.onclick = function () {
      this.parentNode.removeChild(this);
    };

    list.appendChild(li);

    input.value = "";
  }
});
