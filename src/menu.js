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




import {filters} from "../assets/data/data.js"

//DEBE imprimir en pantalla la información de filtros.

/* 
PRIMERA PRUEBA (Sale pero horrible)
let newArray = filters.map(myFilters);

document.getElementById("filters").innerHTML = newArray;

function myFilters(filter) {
    return `${filter}`;
} 
*/
    
    // Selecciona el botón 
    let filterButton = document.querySelector('.filter');
    
    //Poner bonito el texto
    let capitalizedFilters = filters.map(filter => filter.charAt(0).toUpperCase() + filter.slice(1)); // Poner la primera en mayúscula :)
    filterButton.textContent = capitalizedFilters[0]; // Para que se muestre el texto 'Todos' en lugar de Filtros
    
    // Evento para que al hacer click que se muestren los filtros
    filterButton.addEventListener('click', () => {
    
        let showFilters = capitalizedFilters.map(filter => `${filter} `).join('');
        // Para que se muestren en formato lista sería `<li>${filter}</li>`

        
    // Actualizar el contenido del HTML
    document.getElementById('filters').innerHTML = `${showFilters}`;
});

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.