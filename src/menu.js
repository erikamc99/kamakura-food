import {products} from '../assets/data/data.js'
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.



document.getElementById("products").innerHTML = products.map(getFullProducts);

function getFullProducts(item) {
    return [item.name, item.description, item.price].join(" ");
}


