import { products } from '../assets/data/data.js';
import { filterProducts } from './searcher.js';
//DEBE imprimir en pantalla la información de filtros.
const filterContainer = document.getElementById('filters');
const productContainer = document.getElementById('products');
// Obtener solo 1 categoría
export function getFilterCategories(products) {
    const categories = products.map(product => product.category);
    return ['todos', ...new Set(categories)];
}
// Mostrar los filtros
export function getFilters() {
    const categories = getFilterCategories(products);
    const filterButtons = categories.map(category => `
        <button class="filter" data-category="${category}">${category}</button>
    `).join('');
    filterContainer.innerHTML = filterButtons;
    // Llamar a los botones por separado
    const filterButtonsElements = document.querySelectorAll('.filter');
    filterButtonsElements.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });
}
/*
// Función para filtrar productos por categoría
export function filterProducts(category) {
    const filteredProducts = category === 'todos'
        ? products
        : products.filter(product => product.category === category);
    productContainer.innerHTML = filteredProducts.map(getFullProducts).join('');
}
*/
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
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
// EVENTOS
getFilters();
filterProducts('todos');


