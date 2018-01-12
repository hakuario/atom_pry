
class Pakiman {
	constructor(nombre, vida, ataque){
		this.imagen = new Image();
		this.nombre = nombre;
		this.vida = vida;
		this.ataque = ataque;
		this.tipo ="Tierra";
		
		this.imagen.src = imagenes[this.nombre];
	}
	
	hablar(){
		alert(this.nombre);
	}
	
	mostrar(){
		// document.write("<p>");
		//document.body.appendChild(this.image);
		// document.write("<img src='" + this.image + "'/>");
		// document.write(this.image);
		document.write("<br /><strong>" + this.nombre + "</strong><br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque + "<hr />");
		// document.write("</p>");
	}
}