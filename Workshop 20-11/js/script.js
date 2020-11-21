var btn = document.getElementById("button");

btn.addEventListener("click", function (e) {
    e.preventDefault();
  var bform1 = document.getElementById("res1");
  var bform2 = document.getElementById("res2");
  var node = document.createElement('li');
  var todo = document.getElementById("todo")
  node.textContent = bform1.value +" "+ bform2.value;
  todo.appendChild(node)
  var btn2 = document.createElement('button');
  btn2.className = 'btn2'
  todo.appendChild(btn2)
    btn2.addEventListener("click", function (a) {
      a.preventDefault();
      todo.removeChild(node);
      todo.removeChild(btn2)
    });

});
