document.addEventListener("DOMContentLoaded", function () {
    updateCartCounter();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = {
                id: this.getAttribute("data-id"),
                name: this.getAttribute("data-name"),
                image: this.closest(".product").querySelector("img").src,
                price: parseFloat(this.getAttribute("data-price")),
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the product already exists
            let existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(product);
            }

            // Save updated cart
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update Cart Counter
            updateCartCounter();
            alert(`${product.name} added to cart!`);
        });
    });
});

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let counter = document.getElementById('cart-counter');

    if (totalItems > 0) {
        counter.style.display = "inline";
        counter.innerText = totalItems;
    } else {
        counter.style.display = "none";
    }
}

function goToCart() {
    window.location.href = "cart.html";
}





    function startCountdown() {
        let time = 3600;
        setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            document.getElementById("countdown").innerText = `${minutes}:${seconds}`;
            time--;
        }, 1000);
    }
    startCountdown();


function openModal(title, img, price) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-price").innerText = price;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}