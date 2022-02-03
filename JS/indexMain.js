import { Producto } from "./producto.js";

import { productos } from "./data.js";

import { Carrito } from "./carrito.js";

// ----------------- //

 const carrito = new Carrito();

const containerLi = document.getElementById("containerList");

for (const producto of productos) { 

//-----------Inicio Jquery--------------------------------
/*   $("#containerList").append(`<h3> Titulo: ${producto.nombre}</h3>
                              <b> $ ${producto.precio}</b>
                              <p> ID: ${producto.id}</p>`); */
//-----------Fin Jquery--------------------------------

// ----------------Js Vanilla --------------------------------

  let itemList = document.createElement("div");

  //Definimos el innerHTML del elemento con una plantilla de texto, no se como vincular esto a mis cards ya generadas.
  itemList.innerHTML = `<h3> Titulo: ${producto.nombre}</h3>
                          <b> $ ${producto.precio}</b>
                          <p> ID: ${producto.id}</p>`;
  containerLi.appendChild(itemList);

  itemList.addEventListener("click", function () {

    console.log (producto.nombre);
    carrito.createItem( producto );

    Swal.fire({
      title: `${producto.nombre}` + ' agregado al carro',
      text: 'Total: $'+ `${producto.precio}`, 
      icon: 'success',
    });

  })

}; 
