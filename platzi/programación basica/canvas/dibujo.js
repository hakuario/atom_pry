
var d=document.getElementById('dibujito');
var lienzo=d.getContext("2d");
var linea = 30;
var l=0;
var yi, xf;
var colorcito = "#AFA";
//console.log(lienzo);

//dibujarLinea("pink",10,300,220,10);
//dibujarLinea("yellow",300,10,10,220);

//dibujarLinea("green",0,0,10,300);
//dibujarLinea("green",0,10,20,300);
//dibujarLinea("green",0,20,30,300);

dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);

// for(l=0; l<linea; l++)
while(l<linea){
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(colorcito,0,yi,xf,300);
  l++;
}

dibujarLinea(colorcito,1,1,299,1);
dibujarLinea(colorcito,299,1,299,299);

l=0;
while(l<linea){
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(colorcito,yi,0, 300,xf);
  l++;
}

// xi = 300 ; xf= 0; yi = 0; yf=10
// xi = 290 ; xf= 0; yi = 0; yf=20

l=0;
while(l<linea){
  yi = 10 * (30 - l);
  xf = 10 * (l+1);
  dibujarLinea(colorcito,yi,0,0,xf);
  l++;
}

// xi = 0 ; xf= 300; yi = 300; yf=300
// xi = 10 ; xf= 300; yi = 300; yf=290

l=0;
while(l<linea){
  yi = 10 * l;
  xf = 10 * (30-l);
  dibujarLinea(colorcito,yi,300,300,xf);
  l++;
}

dibujarLinea(colorcito,0,0,300,300);
dibujarLinea(colorcito,0,300,300,0);
dibujarLinea(colorcito,0,150,300,150);
dibujarLinea(colorcito,150,0,150,300);

// lienzo.beginPath()
// lienzo.strokeStyle= "red";
// lienzo.moveTo(100,100);
// lienzo.lineTo(200,200);
// //lienzo.stroke();
// lienzo.lineTo(300,100);
// //lienzo.stroke();
// lienzo.lineTo(100,100);
// lienzo.stroke();
// lienzo.closePath();

//lienzo.beginPath()
//lienzo.strokeStyle= "purple";
//lienzo.moveTo(125,100);
//lienzo.lineTo(175,175);
//lienzo.stroke();
//lienzo.closePath();

function dibujarLinea(color, xInicial, xFinal, yInicial, yFinal){
  lienzo.beginPath()
  lienzo.strokeStyle= color;
  lienzo.moveTo(xInicial,xFinal);
  lienzo.lineTo(yInicial,yFinal);
  //lienzo.stroke();
  //lienzo.lineTo(yInicial + 100,yFinal - 100);
  //lienzo.stroke();
  //lienzo.lineTo(yInicial - 100,yFinal - 100);
  lienzo.stroke();
  lienzo.closePath();
}
