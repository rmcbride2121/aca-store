//stuff


function listProduct(products) {
    let productDivs = "";
    let productCategory = "";

    for(let i=0; i < products.length; i++) {
        let product = products[i];
        productDivs += `<div class="item card">`
        productDivs += `<div class="img-div">`
        productDivs += `<img class="card-img-top" src="${product.imgUrl}" alt="Card image">`
        productDivs += `</div>`
        productDivs += `<div class="card-body">`
        productDivs += `<h4 class="card-title">${product.name}</h4>`
        productDivs += `<div class="card-text">${product.price}</div>`
        productDivs += `<div class="card-text">Rating: ${product.rating}</div>`
        productDivs += `<div class="card-text">Reviews: ${product.reviewsNum}</div>`
        productDivs += `<button class="btn btn-primary">Add to Cart</button> `
        productDivs += `<div class="dropdown">
                            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
                            Dropdown button
                            </button>
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
                        </div>`
        productDivs += `</div>`
        productDivs += `</div>`
        

        productCategory += `<option class="dropdown-item">${product.category}</option>`
    }
    $('#list').html(productDivs);
    $('#categoryList').html(productCategory);
    
}
listProduct(products);

function search() {
    console.log('function works');

    let searchWord = document.getElementById('input').value;
    //let searchWord = input.toUpperCase();
    let filteredProducts = products.filter(p=>p.name.includes(searchWord));
    listProduct(filteredProducts);

    console.log(filteredProducts);
    console.log('logic works');
}


