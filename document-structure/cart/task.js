const cart = document.querySelector('.cart__products');
let element = document.createElement('div');
element.className = 'cart__product';
element.setAttribute = 'data-id';

let img = document.createElement('img');
img.setAttribute = 'src';
let quantity = document.createElement('div');
quantity.className = 'cart__product-count';
element.appendChild(img);
element.appendChild(quantity);



const btnPlus = document.querySelectorAll('.product__quantity-control_inc');

const btnMns = document.querySelectorAll('.product__quantity-control_dec');

const add = document.querySelectorAll('.product__add');

btnPlus.forEach(btn => { 
    btn.addEventListener('click', () => {
let a = Number(btn.parentNode.children[1].textContent);
    a ++;
    btn.parentNode.children[1].textContent = a;
    });
});

btnMns.forEach(btn => { 
    btn.addEventListener('click', () => {
let a = Number(btn.parentNode.children[1].textContent);
if (a > 1) {
    a --;
    btn.parentNode.children[1].textContent = a;
} 
   });
});

add.forEach(a => {
    
    const image = a.parentNode.parentNode.parentNode.children[1];
    const productTitle = a.parentNode.parentNode.parentNode.children[0].textContent;
    const qty = a.parentNode.parentNode.children[0].children[1].children[1];
    const attribute = a.parentNode.parentNode.parentNode.getAttribute('data-id');
    a.addEventListener('click', () => {
        cart.appendChild(element);
           // element.setAttribute('data-id', attribute);
            element.appendChild(image);
            quantity.textContent = qty.textContent;
            element.appendChild(quantity);  
            console.log(cart);      
        
    });
});