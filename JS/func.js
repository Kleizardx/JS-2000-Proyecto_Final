function subValue() {

  let result = +document.getElementById('importe1').value;

  tax65 = result * 1.65;

  tax65a = parseInt(tax65);

  if ( result == "" ) {
    
    Swal.fire(
      'ERROR',
      'Por favor ingresa los datos nuevamente',
      'error'
    )
  } else {

    Swal.fire({
      title: 'Valor total incluye 65% imp',
      text: 'Total: $'+ `${tax65a}`, 
      icon: 'success',
    });
  
  }

};
