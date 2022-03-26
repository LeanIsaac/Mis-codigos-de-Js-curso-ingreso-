//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar()
{
	var num;
	var contadorDivisores =0;

	num = parseInt(prompt("Ingrese su número"));
	while(isNaN(num)){
		num = parseInt(prompt("Eso no es un númuero, Ingrese su número"));
	}
	for(var i = 1 ; i <= num ; i++){
		if(num % i == 0){
			contadorDivisores++;
		}
	}
	if(contadorDivisores == 2){
		alert(num + " es primo");
	}
	else
	{
		alert(num + " no es primo");
	}
}