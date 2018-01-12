
var vp = document.getElementById('villaPlatzi');
var papel = vp.getContext("2d");
var cantidad = aleatorio(5,15);
console.log('cantidad de vacas -> '+ cantidad);
//var mapa = "tile.png";

//var fondo = new Image();
//fondo.src = mapa;
//fondo.addEventListener("load",cargarFondo);

var fondo = {
  url:'tile.png',
  cargaOk:false
}

 var vaca = {
   url:'vaca.png',
   cargaOk:false
 }

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk){
    papel.drawImage(fondo.imagen,0,0);
  }
  var x, y;
  if (vaca.cargaOk){
    for (i=0;i<cantidad;i++) {
      x = aleatorio(0,420);
      y = aleatorio(0,420);
      papel.drawImage(vaca.imagen,x,y);
    }
  }
}

// var vaca = new Image();
// fondo.src = 'vaca.png';
//
// var cerdo = new Image();
// fondo.src = 'cerdo.png';
//
// var pollo = new Image();
// fondo.src = 'pollo.png';
//
// vaca.addEventListener("load",cargarVaca);
// cerdo.addEventListener("load",cargarCerdo);
// pollo.addEventListener("load",cargarPollo);

function aleatorio(min, max) {
var resultado;
resultado= Math.floor(Math.random() * (max-min+1)) + min;
return resultado;
}

// function cargarFondo() {
//   papel.drawImage(fondo, 0, 0);
// }
//
// function cargarVaca() {
//   papel.drawImage(vaca, 10, 10);
// }
//
// function cargarCerdo() {
//   papel.drawImage(cerdo, 10, 300);
// }
//
// function cargarPollo() {
//   papel.drawImage(pollo, 300, 150);
// }
