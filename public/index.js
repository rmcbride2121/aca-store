//variables
let cart = [];
let totalPrice = [];


//functions
window.onload = function() {
    listProduct(products);
}

//function that lists out all the products from the products object
function listProduct(products) {
    let productDivs = "";

    for(let i=0; i < products.length; i++) {
        let product = products[i];
        productDivs += `<div class="item card">
                        <div class="img-div">
                        <img class="card-img-top" src="${product.imgUrl}" alt="Card image">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${product.name}</h4>
                            <div class="card-text">${product.price}</div>
                            <div class="card-text">Rating: ${product.rating}</div>
                            <div class="card-text">Reviews: ${product.reviewsNum}</div>
                            <div class="card-text">"${product.description}"</div>
                            <button id="cartButton${product.id}" class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button> 
                            <div class="dropdown">
                                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">Amount</button>
                                <div class="dropdown-menu">
                                    <option class="dropdown-item" value="1">1</option>
                                    <option class="dropdown-item" value="2">2</option>
                                    <option class="dropdown-item" value="3">3</option>
                                    <option class="dropdown-item" value="4">4</option>
                                    <option class="dropdown-item" value="5">5</option>
                                    <option class="dropdown-item" value="6">6</option>
                                    <option class="dropdown-item" value="7">7</option>
                                    <option class="dropdown-item" value="8">8</option>
                                    <option class="dropdown-item" value="9">9</option>
                                    <option class="dropdown-item" value="10">10</option>
                                    </div>
                                </div>
                            </div>
                        </div>`
    }
    $('#list').html(productDivs);
}


//function that adds selected items to the users cart

function addToCart(id) {
    let cartItems = "";
    let productId = products.find(function(product) {
        return product.id == id;
    });
    cartItems += `<a href="#">${productId.name}</a>`
    
    document.getElementById("shoppingCart").innerHTML = cartItems;
}

//function called when category is changed via dropdown menu on homepage

function filterCategory(cat){
    //if all is selected, displays all products
    if (cat === 'all'){
        listProduct(products);
    }
    //filters products depending on category selected
    else{
        let filteredProducts = products.filter(prod => 
            prod.category === cat);
        listProduct(filteredProducts);
    }
}

//search function

function search() {
    console.log('function works');

    let searchWord = document.getElementById('input').value.toLowerCase();
    let filteredProducts = products.filter(p=>p.name.toLowerCase().includes(searchWord));
    listProduct(filteredProducts);

    console.log(filteredProducts);
    console.log('logic works');
}


