function getAmountProductCart() {
    let cartLocal = JSON.parse(localStorage.getItem('cart'))
    if (!cartLocal || cartLocal.length === 0) {
      document.getElementById('amountProductCart').innerHTML = 0
    } else {
      document.getElementById('amountProductCart').innerHTML = cartLocal.length
    }
    
  }
  getAmountProductCart()