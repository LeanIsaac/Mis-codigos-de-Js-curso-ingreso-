//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
function mostrar()
{
	var num;
	var contadorDivisores =0;

	num = parseInt(prompt("Ingrese su numero"));
	for(var i = 1 ; i <= num ; i++){
		if(num % i == 0){
			contadorDivisores++;
			console.log(i);
		}
	}
	console.log("divisores encontrados " + contadorDivisores);
}