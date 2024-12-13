import { products } from '../assets/data/data.js';

const productContainer = document.getElementById("products");
productContainer.innerHTML = products.map(getFullProducts).join("");

export function getFullProducts(item) {
    return `
        <div class="product-container">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-container">
                <h5>${item.price}€</h5>
                <button class="add-button">Añadir</button>
            </div>
        </div>
    `;
}



