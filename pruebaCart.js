

//DEBE contener las funcionalidades del carrito de compras.
const productContainer = document.getElementById("cart-products");
const quantityContainer = document.getElementById("quantity");
const priceElement = document.getElementById("price");
const totalContainer = document.getElementById("cart-total");

//agregados en el carrito contando con LOCALSTORAGE
function agregarAlCarrito(){
    productContainer.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("kamakura"));
    if (productos && productos.lenght > 0) {
        productos.forEach((products) => {
            const newKamura = document.createElement("div");
            newKamura.classList = "tarjeta-producto";
            newKamura.innerHTML = `
             <div class="product-container">
               <h3>${item.name}</h3>
               <p>${item.description}</p>
                 <div class="price-container">
                 <h5>${item.price}€</h5>
                 <button class="add-button">Añadir</button>
                 </div>
             </div>
             `;
              productContainer.appendChild(newKamura);
              newKamura
              .getElementsByTagName("add-buton")[0]
              .addEventListener("click", (e) => {
                const quantityContainer = e.target.parentElement.getElementsByClassName("quantity")[0];
                quantityContainer.innerText = restarAlCarrito(products);
                agregarAlCarrito();
                actualizarTotales();
              });
              
        });
    }
    actualizarTotales();
}
agregarAlCarrito();

   //actualiza el total del precio y unidades dentro carrito
   function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("Kamakura"));
  let quantity = 0;
  let price = 0;
  if (productos && productos.length > 0) {
    productos.forEach((products) => {
      quantity += products.quantity;
      price += products.price * products.quantity;
    });
  }
  quantityContainer.innerText = quantity;
  priceElement = price;
  if(price === 0) {
    reiniciarCarrito();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  productContainer.innerHTML = "";
  reiniciarCarrito();
  })