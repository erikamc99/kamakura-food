//Intenta separar los eventos en este archivo.

import {products} from '../assets/data/data.js'
import { getFullProducts } from './menu.js';

function init() {    

    getFullProducts(products);
}

init();
