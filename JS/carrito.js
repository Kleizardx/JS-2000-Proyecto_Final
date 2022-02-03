//Este sera el carro para nuestra pagina WEB.
//Esto se conoce como CRUD ( Create, Read, Update, Delete )

export class Carrito {

    constructor(  ) {

      this.lista = JSON.parse(localStorage.getItem("carrito")) || []; 
      // this.lista = lista;

    }

    listAllItems ( ) {

      //Muestra todo el listado de items cargados <> devolviendo this.lista
      return this.lista;

    }

    createItem ( item ) {


           //Si el item existe lo suma en +1

           this.lista.push ({
            item,
            cantidad: 1
          })

      //Agrega el item al carrito <> agregar item a this.lista
      this.lista.push( item ); //Le pasamos un push a this.lista para agregar nuestro item.
      localStorage.setItem( "carrito", JSON.stringify( this.lista )); //De esta forma se guardan los items del carrito en el local Storage.
      //Al utilizar el JSON con su metodo stringify, convierete todo mi obejto a un string, el cual nuestro localStorage, puede leer.

    }

    findOneItemById ( itemId ) {

      //Busca un item en la lista <> Encuentra un item en this.lista y lo muestra.
      //Solo devuelve el ID del item.

      const item = this.lista.find( element => element.id === itemId );

      if ( !item ) {
        throw new Error("El item no existe, id:" +itemId)
      }

      return item;

    }

    updateItemX ( itemId, nombre, precio, categoria ) {

      //Item + Item Actualizado, actualiza el valor de nuestro item.
      // Expliacion breve de lo que pasa aca
      // 01 buscamos el ID del item solicitado.
      // 02 con el ID encontrado dentro de la lista mediante el metodo 01 -
      // - buscamos el index del item (id)
      // 03 indicamos que lista[index] metodo nombre, sobrescriba el nombre dentro de nuestro objeto (array).
      // 04 same arriba, a diferencia que cambiamos el precio.
      // 05 same arriba a diferencia que cambiamos la categoria.
      
      const item = this.findOneItemById( itemId ); //01 

      const index = this.lista.indexOf ( item ); //02
      
      this.lista[index].nombre = nombre; //03 
 
      this.lista[index].precio = precio; //04

      this.lista[index].categoria = categoria; //05 

      localStorage.setItem( "carrito", JSON.stringify( this.lista ));

      //Tambien podemos agregar condicionales como if.
      // Este es el metodo correcto, de esta forma si se puede trabajar.

    }

    delItem ( itemId ) {

      //Borra el item. <> dentro de this.lista.

      const item = this.findOneItemById( itemId );

      const index = this.lista.indexOf ( item );

      this.lista.splice( index, 1);

      localStorage.setItem( "carrito", JSON.stringify( this.lista ));

    }

}


