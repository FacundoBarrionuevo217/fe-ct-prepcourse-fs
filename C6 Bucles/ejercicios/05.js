function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:

// Manera mas corta de hacer el If
// return valor === true ? "Soy verdadero" : "Soy falso"

  if ( valor === true){
    return "Soy verdadero"
  }else{
    return "Soy falso"
  }

}

module.exports = esVerdadero;
