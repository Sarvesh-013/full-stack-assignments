// Add event listener to the cart button
document.getElementById('cart-btn').addEventListener('click', function() {
    
    window.location.href = 'cart.html'; // Redirect to the cart page
});

// Add event listeners to all buy buttons
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const price = this.previousElementSibling.textContent;
        alert(`Price: ${price}`);
        addToCart(price); // Add the item to the cart
    });
});

// Function to add item to the cart
function addToCart(price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart');
}

// Get the login dialog and close button elements
const loginBtn = document.getElementById('login-btn');
const loginDialog = document.getElementById('login-dialog');
const closeBtn = document.querySelector('.close-btn');

// Open the login dialog
loginBtn.onclick = function() {
    loginDialog.style.display = 'block';
}

// Close the login dialog when the user clicks the close button
closeBtn.onclick = function() {
    loginDialog.style.display = 'none';
}

// Close the login dialog when the user clicks outside the dialog
window.onclick = function(event) {
    if (event.target == loginDialog) {
        loginDialog.style.display = 'none';
    }
}

// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    // Assuming successful login, redirect to dashboard
    window.location.href = 'dashboard.html';
}
