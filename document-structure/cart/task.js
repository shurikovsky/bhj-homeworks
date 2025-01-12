const product = [... document.querySelectorAll('.product')];

product.forEach((element) => {
    const productDec = element.querySelector('.product__quantity-control_dec');
    const productInc = element.querySelector('.product__quantity-control_inc');
    const productCount = element.querySelector('.product__quantity-value');
    const productAdd= element.querySelector('.product__add');
    productDec.addEventListener('click', () => {
       if (+ productCount.textContent > 1) {
        productCount.textContent --;
       } 
    })
    productInc.addEventListener('click', () => {
        productCount.textContent ++;
    })
    productAdd.addEventListener('click', () => {
      const productsInCart = document.querySelector('.cart__products');
      const productPicture = element.querySelector('img');
      const newProductInCart = document.createElement('div');
      const productFind = [... productsInCart.querySelectorAll('.cart__product')].find((item) => {
        item.getAttribute('data-id') === element.getAttribute('data-id');  
 //не могу понять, почему не работает((
        });
      if (productFind) {
        productFind.querySelector('.cart__product-count').textContent = +productFind.querySelector('.cart__product-count').textContent + parseInt(productCount.textContent);
      } else {
        newProductInCart.innerHTML = 
          `<div class="cart__product" data-id="${element.getAttribute('data-id')}">` +
                '<img class="cart__product-image" src=' + productPicture.src + '>' +
               '<div class="cart__product-count">'+ productCount.textContent + '<div>'
          '</div>';
        productsInCart.append(newProductInCart); 
      }
    })
})