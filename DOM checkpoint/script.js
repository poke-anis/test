var btn1 = document.getElementById('btn+');
var btn2 = document.getElementById('btn-');
var i = 0
var cart = document.getElementById('cart')
var qnt = document.getElementById("qnt").value
var prix = document.getElementById('prix')
var incart = 0
var sign ="$"
btn1.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("qnt").value = ++i
    var price = i*5 + sign
    document.getElementById('prix').innerHTML = price
    
})

btn2.addEventListener('click',function(a){
    a.preventDefault();
    document.getElementById("qnt").value = --i
    if (i>0){
    var price = i*5 + sign}
    else { price = "0$"}
    document.getElementById('prix').innerHTML = price
    
})

cart.addEventListener('click',function(e){
    e.preventDefault();
    if (incart==0){
        cart.style.backgroundColor = 'green'
        incart+=1
    }
    else {
        cart.removeAttribute('style')
        incart-=1
    }
    
})

