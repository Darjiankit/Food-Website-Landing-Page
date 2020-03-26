

var firebaseConfig = {
    apiKey: "AIzaSyCx1hrZu5Ljjouc0e-LpWID3AOoSIaph6k",
    authDomain: "globalfruitstore-1c3c7.firebaseapp.com",
    databaseURL: "https://globalfruitstore-1c3c7.firebaseio.com",
    projectId: "globalfruitstore-1c3c7",
    storageBucket: "globalfruitstore-1c3c7.appspot.com",
    messagingSenderId: "166406122184",
    appId: "1:166406122184:web:5b29b123c7bb0094"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Global
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
//Divs
var fruitDiv = document.getElementById("fruitDIV");
var juiceDiv = document.getElementById("juiceDIV");
var saladDiv = document.getElementById("SaladDIV");

//Information
var FRUIT = [
    { name: "Apple", price: 1 },
    { name: "Orange", price: 1 },
    { name: "Cherry", price: 1 },
    { name: "Strawberry", price: 1 },
    { name: "Kiwi", price: 1 },
    { name: "Banana", price: 1 },
];
var JUICE = [
    { name: "Juice #1", price: 10 },
    { name: "Juice #2", price: 11 },
    { name: "Juice #3", price: 12 }
];
var SALAD = [
    { name: "Salad #1", price: 11 },
    { name: "Salad #2", price: 12 },
    { name: "Salad #3", price: 15 }
];

render()
//HTML
function HTMLfruitProduct(con) {
    let URL = `./images/Fruit/fruit${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" alt="Card image cap" class="card-img-top" style="height:16rem;">
    <div class="card-body">
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <p class="card-text">${FRUIT[con - 1].name}</p>
        <p class="card-text">Price:${FRUIT[con - 1].price}.00</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${FRUIT[con - 1].name}', '${FRUIT[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                <button id="${btn}"type="button" onclick="cart('${FRUIT[con - 1].name}', '${FRUIT[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted text-right">Free Shipping</small>
        </div>
    </div>
</div>
</div>
    `
}
function HTMLjuiceProduct(con) {
    let URL = `./images/JUICE/juice${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" alt="Card image cap" class="card-img-top" style="height:16rem;">
    <div class="card-body">
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <p class="card-text">${JUICE[con - 1].name}</p>
        <p class="card-text">Price:${JUICE[con - 1].price}.00</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${JUICE[con - 1].name}', '${JUICE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                <button id="${btn}"type="button" onclick="cart('${JUICE[con - 1].name}', '${JUICE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted text-right">Free Shipping</small>
        </div>
    </div>
</div>
</div>
    `
}
function HTMLsaladProduct(con) {
    let URL = `./images/SALAD/salad${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" alt="Card image cap" class="card-img-top" style="height:16rem;">
    <div class="card-body">
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <i style="color:orange;" class="fa fa-star" ></i>
        <p class="card-text">${SALAD[con - 1].name}</p>
        <p class="card-text">Price:${SALAD[con - 1].price}.00</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${SALAD[con - 1].name}', '${SALAD[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                <button id="${btn}"type="button" onclick="cart('${SALAD[con - 1].name}', '${SALAD[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted text-right">Free Shipping</small>
        </div>
    </div>
</div>
</div>
    `
}
// Animation
function animation() {
    // const toast = swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 1000
    // });
    // toast({
    //     type: 'success',
    //     title: 'Added to shoping cart'
    // });
    alert("Item Successfully added to cart");
}

// CART FUNCTION
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
        document.getElementById(btncart).style.display = "none";
        animation();
    }
}
//RENDER
function render() {
    for (let index = 1; index <= 6; index++) {
        fruitDiv.innerHTML += `${HTMLfruitProduct(index)}`
    }
    for (let index = 1; index <= 3; index++) {
        juiceDiv.innerHTML += `${HTMLjuiceProduct(index)}`
        saladDiv.innerHTML += `${HTMLsaladProduct(index)}`
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
}


