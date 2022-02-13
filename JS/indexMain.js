import { Producto } from "./producto.js";

import { Carrito } from "./carrito.js";

const jsonDataA = "db/data.json";

const carrito = new Carrito();

const containerLi = document.getElementById("container_list");

fetch(jsonDataA)
.then( response => response.json() )
.then( data => {

  for (const producto of data) {

    // ----------------Js Vanilla --------------------------------
    let itemList = document.createElement("div");
    itemList.setAttribute("id", "container_list-juegos");
    itemList.className = "container";
    itemList.className = "flexbox-container";
  
    //Definimos el innerHTML del elemento con una plantilla de texto, no se como vincular esto a mis cards ya generadas.
   itemList.innerHTML = `  <div class="flex-item" data-aos="zoom-out-up">
                            <h4 class="card-header">${producto.nombre}</h4>
                            <h2 class="title-Card">$${producto.precio}</h2>
                            <img src="${producto.thumbnailUrl}"</img>`;
  
    containerLi.appendChild(itemList);

    // ----------------Js Vanilla --------------------------------

    itemList.addEventListener("click", function () {
      Swal.fire({
        title: "Estas por agregar " + `${producto.nombre}`,
        text: "Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, agregar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${producto.nombre}` + " agregado al carro",
            text: "Precio: $" + `${producto.precio}`,
            icon: "success",
          });
          console.log(producto.nombre);
          carrito.createItem(producto);

        }
      });
    });
  }
  console.log(data);
})


