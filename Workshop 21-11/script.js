var get = document.getElementById('get')
var clear = document.getElementById('clear')
var post = document.getElementById('post')
get.addEventListener('click',function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var arr = JSON.parse(this.responseText);
            showPosts(arr)
        }};
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();
    })

var showPosts = (arr) => {
    var out = "";
    arr.forEach(element => {
        out += `<div class="container-fluid card mb-3">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.body}</p>
            </div>
        </div>`
    });
    document.getElementById("main").innerHTML += out;
}

clear.addEventListener('click',function(){
    document.getElementById('printb').innerHTML = '';

})