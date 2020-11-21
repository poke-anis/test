var sbtn = document.getElementById("submitbtn");
var input = document.getElementById("input").value;

var addPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      title:input,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
};

sbtn
  .addEventListener("click", addPost)


