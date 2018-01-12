var teclas = {
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keydown",dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;

// dibujarLinea("red",100,100,200,200,papel);
dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xInicial, xFinal, yInicial, yFinal,lienzo){
  lienzo.beginPath()
  lienzo.strokeStyle= color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial,xFinal);
  lienzo.lineTo(yInicial,yFinal);
  //lienzo.stroke();
  //lienzo.lineTo(yInicial + 100,yFinal - 100);
  //lienzo.stroke();
  //lienzo.lineTo(yInicial - 100,yFinal - 100);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  // 38 = arriba
  // 40 = abajo
  // 37 = izquierda
  // 39 = derecha

  var colorcito ="blue";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,(y-movimiento),papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,(y+movimiento),papel);
      y = y + movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,(x+movimiento),y,papel);
      x = x + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,(x-movimiento),y,papel);
      x = x - movimiento;
      break;
    default:

  }

}
