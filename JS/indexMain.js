import { Producto } from "./producto.js";

import { productos } from "./data.js";

import { Carrito } from "./carrito.js";

// ----------------- //

const carrito = new Carrito();

//Funcion para escribir en el HTMl mediante mi lista en data.js
// const listaContainer = document.getElementById("ul-product-list");

for (const item of productos) {
  // const itemList = document.createElement("li");

  // itemList.innerText = item.nombre;

  // listaContainer.appendChild(itemList);

  const img01 = document.getElementById("img-Apex") || document.getElementById("img-Blasphemous") ;

  // 01 - Mediante addEventListener + function.
  img01.addEventListener("click", function () {

    console.log( item.nombre );

    carrito.createItem( item );

  });

};
