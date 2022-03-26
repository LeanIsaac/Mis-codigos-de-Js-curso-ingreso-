//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	var num;
	var contadorPares =0;

	num = parseInt(prompt("Ingrese su numero"));
	for(var i = 1 ; i <= num ; i++){
		if(i % 2 == 0){
			contadorPares++;
			console.log(i);
		}
	}
	console.log("pares encontrados " + contadorPares);
}