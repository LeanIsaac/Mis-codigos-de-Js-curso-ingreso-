/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let i;
	let acumulador;
	let numeroIngresado;

	i = 0; //primer caso
	acumulador=0; //acumulador

	while(i < 5) //2do paso condición 
	{
		numeroIngresado = prompt("ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		//3er paso modifico la variable de control
		i++ ; //incremento
	}
	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}