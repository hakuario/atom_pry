var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//console.log(imagenes);


//var cauchin = new Pakiman("Cauchin",100,30);
//var pokacho = new Pakiman("Pokacho",80,50);
//var tocinauro = new Pakiman("Tocinauro",120,40);

// console.log(cauchin, pokacho, tocinauro);
//cauchin.mostrar();
//pokacho.mostrar();
//tocinauro.mostrar();

var coleccion = [];
// coleccion.push(cauchin);
// coleccion.push(pokacho);
// coleccion.push(tocinauro);

coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

//console.log(coleccion);

// for (p in coleccion) { // muestra indice
for (var p of coleccion) { // muestra instancia
 // collecion[p]; // cuando es instancia
 p.mostrar(); // cuando es instancia
}