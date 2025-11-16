let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price, img) {
cart.push({name, price, img});
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}


function updateCartCount() {
let count = cart.length;
document.getElementById("cart-count").textContent = count;
}


function displayCart() {
let container = document.getElementById("cart-items");
let total = 0;


cart.forEach(item => {
total += item.price;
container.innerHTML += `
<div class='cart-item'>
<img src="${item.img}">
<p>${item.name} - $${item.price}</p>
</div>
`;
});


document.getElementById("cart-total").textContent = "Total: $" + total;
}


if (window.location.pathname.includes("cart.html")) {
displayCart();
}


updateCartCount();