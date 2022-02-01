//Esta seria mi clase de productos.
export class Producto {

  constructor  (id, nombre, precio, categoria ) {

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;

  }

  getId ( ) {

    this.id;

  }

  getNombre( ) {
    
    return this.nombre;

  }

  getPrecio ( ) {

    return this.precio;

  }

  getCateg( ) {

  return this.categoria;

  }

  getIva65 () {

    return this.precio * 1.65;

  }

}
