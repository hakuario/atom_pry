// class billete
// {
//   constructor(v, c)
//   {
//     this.valor = v;
//     this.cantidad = c;
//   }
// }
class billete
{
	constructor(v, c)
	{
	this.valor = v;
	this.cantidad = c;
	}
}

var caja=[];
var entregado=[];
caja.push(new billete(100, 5));
caja.push(new billete(50, 10));
caja.push(new billete(20, 5));
caja.push(new billete(10, 10));
caja.push(new billete(5, 5));

var dinero = 0;
var dif = 0;
var div = 0;
var papel = 0;

var b = document.getElementById('retirar');
b.addEventListener("click",entregaDinero);

var resultado = document.getElementById('resultado');

function entregaDinero()
{
	
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);

	for (bi of caja){
		if (dinero>0){
			div = Math.floor(dinero/bi.valor);
			
			if (div > bi.cantidad){
				papel = bi.cantidad;
			}else{
				papel = div;
			}
			
			entregado.push(new billete(bi.valor, papel));
			
			dinero = dinero - (bi.valor * papel);
			
		}
	}
	
	if (dinero>0){
		//document.write("No se cuenta con suficiente dinero");v
		resultado.innerHTML  = "No se cuenta con suficiente dinero";
	}else{
		for(e of entregado){
			if (e.cantidad > 0) {
				//document.write(e.cantidad + " billetes de $" + e.valor + "<br/>");
				resultado.innerHTML  +=  (e.cantidad + " billetes de $" + e.valor + "<br/>") ;
			}
		}
	}
}