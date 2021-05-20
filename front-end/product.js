
// let productID;

// function Pageload() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const id = urlParams.get("id");
//   productID = id;
//   document.getElementById("product-id").innerHTML = id;
//   loadProductData(id);
// }

// async function loadProductData(id) {
//   const res = await axios.get("http://localhost:3000/product/1");
//   const data = await res.data;
//   setProductData(data);
// }

// function setProductData(data) {
 
//   let name = document.getElementById("product-name");
//   let price = document.getElementById("product-price");
//   name.innerHTML = data[0].name;
//   price.innerHTML = data[0].price;
// }

// async function addProduct() {
//   const userID = localStorage.getItem("userID");
//   const data = {
  //     productID: productID,
//     userID: userID,
//   };
//   const res = await axios.post("http://localhost:3000/cart/add-cart", data);
//   const _data = await res.data;
//   console.log(_data);
// }



function getAmountProductCart() {
  let cartLocal = JSON.parse(localStorage.getItem('cart'))
  if (!cartLocal || cartLocal.length === 0) {
    document.getElementById('amountProductCart').innerHTML = 0
  } else {
    document.getElementById('amountProductCart').innerHTML = cartLocal.length
  }
  
}
getAmountProductCart()
getProduct()
async function getProduct() {
  try {
    const products = await productService()
    console.log(products);
    
    for (let item of products.data){
      document.getElementById('products').innerHTML +=
      `<div class="product-item">
      <div class="product-hover">
      <img class="product-img" src="${item.img}" alt="" >
      <button class="addcart" type="button" onclick='addToCart("${item.idproducts}","${item.img}", "${item.nameproduct}","${item.priceproduct}")'>Add to cart</button>
      <div/>
      <div class="product-inside">
      <div class="product-name">${item.nameproduct}</div>
      <div class="product-detail">${item.detail}</div>
      <div class="product-price">฿${item.priceproduct}</div>
      <div/>
      </div>`
    }
  }catch (error){
    alert(error.response.data.message)
  }
}
function addToCart(id,img,name,price){

  console.log(id)
  console.log(img)
  console.log(name)

  let cartLocal = JSON.parse(localStorage.getItem('cart'))
  let dataArr = []
  if (!cartLocal || cartLocal.length === 0) {
    let dataObj = {
      id,
      img,
      name,
      price: parseInt(price),
      quantity: 1
    }
    dataArr.push(dataObj)
    localStorage.setItem('cart', JSON.stringify(dataArr))
  } else {
    console.log(cartLocal.some((x) => x.id === id));
    let isSameItem = cartLocal.some((x) => x.id === id)
    if (isSameItem) {
      let index = cartLocal.findIndex((x) => x.id === id)
      console.log(index);
      cartLocal[index].quantity++
      cartLocal[index].price += parseInt(price)
      localStorage.setItem('cart', JSON.stringify(cartLocal))
    } else {
      let dataObj = {
        id,
        img,
        name,
        price: parseInt(price),
        quantity: 1
      }
      cartLocal.push(dataObj)
      localStorage.setItem('cart', JSON.stringify(cartLocal))
    }
  }
  getAmountProductCart()
 
}
function productService() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('http://localhost:3000/product/all-product')
      return resolve(response)
    } catch (error) {
      return reject(error)
    }
  })
}
