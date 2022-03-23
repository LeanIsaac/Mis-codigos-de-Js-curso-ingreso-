/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares. ---> (% 2==0 algo asi)
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let acumuladorDeNegativos;
	let contadorDeNumeroPositivos;
	let contadosDeNumerosNegativos;

	acumuladorDePositivos = 0;
	acumuladorDeNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;

	respuesta = "si"; // inicializo la variable de control

	while( respuesta == "si") // condición para entrar en el while
	{
		//pedir numeros
		numero = prompt("Ingrese Un numero");
		numero = parseInt(numero);

		//suma de negativos
		if(numero < 0)
		{
			sumaNegativos = numero;
			acumuladorDeNegativos = acumuladorDeNegativos + sumaNegativos;

		}
		else
		{
			if(numero > 0) // suma de positivos
			{
				sumaPositivos = numero;
				acumuladorDePositivos = acumuladorDePositivos + sumaPositivos;
			}
		}




		respuesta=prompt("desea continuar?"); //modifico la variable de control, para salir del bloque

	}	//fin del while

		// saco el promedio de los positivos



		// Promedios de negativos.
	document.write("la suma de negativos es :"+ acumuladorDeNegativos);
	document.write("<br>la suma de Positivos es :"+ acumuladorDePositivos);

}