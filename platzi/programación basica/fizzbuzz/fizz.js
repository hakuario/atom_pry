var numero = 100;
var divisible;
for(var i = 1; i<=numero;i++){
	divisible = false;
	//if(i%3==0){
	if(esDivisible(i,3)){
		document.write( "Fizz");
		divisible = true;
	}
	
	//if(i%5==0){
	if(esDivisible(i,5)){
		document.write( "Buzz");
		divisible = true;
	}
	
	//if (!divisible) {
	//if (i%3!=0 && i%5!=0) {
	if(!esDivisible(i,3) && !esDivisible(i,5)){
		document.write(i);
	}
	document.write("<br/>");
}

function esDivisible(num, divisor){
	if (num%divisor==0){
		return true;
	}else{
		return false;
	}
}