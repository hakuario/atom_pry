var teclas = {
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:37
};

document.addEventListener("keydown",dibujarTeclado);

function dibujarTeclado(evento) {
  // 38 = arriba
  // 40 = abajo
  // 37 = izquierda
  // 39 = derecha

  switch (evento.keyCode) {
    case teclas.UP:
      console.log("arriba!");
      break;
    case teclas.DOWN:
      console.log("abajo!");
      break;
    case teclas.LEFT:

      break;
    case teclas.RIGHT:

      break;
    default:

  }

}
