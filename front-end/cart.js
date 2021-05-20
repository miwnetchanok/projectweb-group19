function getProductLocalStorage() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    for (let item of cart){
        document.getElementById('productsCart').innerHTML +=
        `<div class="product-item">
        <div class="product-hover">
        <img class="product-img" src="${item.img}" alt="" >
        <button class="addcart" type="button" onclick='Checkout("")'>Checkout</button>
        <div/>
        <div class="product-inside">
        <div class="product-name">${item.name}</div>

        <div class="product-price">฿${item.price}</div>
        <div class="product-price">${item.quantity}</div>
        <div/>
        </div>`
      }
}
getProductLocalStorage()

function Checkout(){
    let cart=JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    let userid = localStorage.getItem('userID')

    axios.post('http://localhost:3000/checkout/order',{cart,userid})
    .then((response)=>{
        console.log(response)
        alert(response.data.message)
        localStorage.removeItem('cart')
        window.location = '/front-end/home.html'
    })
}