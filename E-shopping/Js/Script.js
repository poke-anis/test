var names = ["Meth", "Blue Meth", "Weed", "Cocaine", "LSD","Shrooms"];
var prices = [10, 15, 10, 50, 20, 10];
var produits = [];
var out = "";
var cart = [];
var productsCheckoutHtml = "";
var qnt = "";

for (let index = 0; index < names.length; index++) {
  const name = names[index];
  const price = prices[index];
  var produit = {
    id: index,
    name: name,
    price: price,
    quantity: 0,
  };
  produits.push(produit);
  out += `<div class="col-4">
  <div class="card mb-4" style="width: 18rem;">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${price}</p>
        <button onclick="addtocart(${index})" type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Add to cart</button>
    </div>
</div>
</div>`;
}
document.getElementById("products").innerHTML = out;


const addtocart = (index) => {
    var productsCheckoutHtml = document.getElementById("cartItems").innerHTML;
    var currentProduct = produits[index]
    const found = cart.find(element => element.id == currentProduct.id);
    if (found) {
        cart.forEach(element => {
            if (element.id == found.id) {
                element.quantity++
                document.getElementById("prod-"+element.id).innerHTML = element.quantity
            }
        });
    } else {
        currentProduct.quantity++
        cart.push(currentProduct)
        productsCheckoutHtml += `
                            <tr  id="item-${currentProduct.id}">
                                <th scope="row">${currentProduct.id}</th>
                                <td>${currentProduct.name}</td>
                                <td>${currentProduct.price}</td>
                                
                                <td class="btnqnt"><button type="button" onclick="add(${currentProduct.id})" class="btn btn-success">+</button><p id="prod-${currentProduct.id}">${currentProduct.quantity}</p><button onclick="del(${currentProduct.id})" type="button" class="btn btn-success">-</button>
                                </td>
                                <td>
                                    <div onclick="removefrcart(${currentProduct.id})" class="btn btn-danger">Delete</div>
                                </td>
                            </tr>`

        document.getElementById("number").innerHTML = cart.length;
        document.getElementById("cartItems").innerHTML = productsCheckoutHtml;
        
    }

}

const removefrcart = (a) => {
    document.getElementById("item-"+a).remove()
    cart = cart.filter( element => element.id !== a )
}

const add = (a) => {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == a) {
            cart[index].quantity += 1
            document.getElementById("prod-"+cart[index].id).innerHTML = cart[index].quantity
        }
            }
}


const del = (a) => {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == a) {
            cart[index].quantity -= 1
            document.getElementById("prod-"+cart[index].id).innerHTML = cart[index].quantity
        }
            }
}

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    }

