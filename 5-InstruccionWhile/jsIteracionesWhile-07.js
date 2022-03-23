/*
	Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera,

*/
function mostrar()
{

	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;
	var respuesta;

	
	var contadorConFiebre = 0;
	var contadorSinFiebre = 0;

	var contadorF = 0;
	var contadorM = 0;
	var contadorNB = 0;

	var contadorEdadFemenino = 0;
	var acumuladorEdadMasculino = 0;
	var acumuladorEdadNoBinario = 0;
	var acumuladorEdadFemenino = 0;

	var promedioEdadFemenino;
	var promedioEdadMasculino;
	var promedioEdadNoBinario;

	var nombreDelPrimerAprobado;
	var banderaDelPrimerAprobado = 0;

	var maximaTemperatura;
	var nombreMaximaTemperatura;
	var edadMaximaTemperatura;
	var banderaMaximaTemperatura = 0;
	
	var alturaNoBinarioMasJoven;
	var edadNoBinarioMasJoven;
	var	notaNoBinarioMasJoven;

	var FMasAlta;
	var nombreFmasAlta;
	var banderaFmasAlta = 0;

	var banderaMPrimerDesaprobado = 0;
	var nombreMPrimerDesaprobado ;

	var contadorDesaprobados = 0;
	var porcentajeDesaprobados;
	var cantidadTotalDeAlumnos =0;
			
	respuesta = "si";

	while(respuesta == "si")
	{
		altura = prompt("ingrese su altura, entre 0 y 250");
		altura = parseInt(altura);

		while(altura <0 || altura >250){

			altura = prompt("Error, vuelva a ingresar su altura, entre 0 y 250");
			altura = parseInt(altura);
		}
			edad = prompt("ingrese su edad, entre 18-100");
			edad = parseInt(edad);

		while(edad <18 || edad >100){

			edad = prompt("Error, vuelva a ingresar su edad, entre 18-100");
			edad = parseInt(edad);
		}

			temperatura = prompt("ingrese su termperatura")
			temperatura = parseInt(temperatura);

		while (temperatura <32 || temperatura > 42){

			temperatura = prompt("Error, vulva a ingresar su temperatura")
			temperatura = parseInt(temperatura);
		}

			sexo = prompt("ingrese el sexo, (f, m o nb) ");

		while(sexo != "f" && sexo != "m" && sexo != "nb"){

			sexo = prompt("Error, vuelva a ingresar el sexo");
		}

			nota = prompt("Ingrese su nota entre 0-10");
			nota = parseInt(nota);

		while(nota <0 || nota > 10){

			nota = prompt("Erro, vuelva a Ingresar su nota entre 0-10");
			nota = parseInt(nota);
		}

			nombre = prompt("Ingrese su nombre");

		//b)Cuántos con fiebre y cuantos sin fiebre.

		if(temperatura > 37){

			contadorConFiebre++;
		}
		else
		{
			contadorSinFiebre++;
		}

		//a)Cuántas mujeres hay .
		switch(sexo) {

			case "f":
				contadorF++;
				acumuladorEdadFemenino += edad;

				//g)el nombre de la mujer más alta de las que aprobó
				if(nota>=6){
					if(altura > FMasAlta || banderaFmasAlta == 0){

						FMasAlta = altura;
						nombreFmasAlta = nombre;
						banderaFmasAlta = 1;
					}
				}

			break;

			case "m":
				contadorM++;
				acumuladorEdadMasculino += edad;

				//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

				if(nota <6 ){

					if(banderaMPrimerDesaprobado == 0 && altura < 160){

						nombreMPrimerDesaprobado = nombre;
						banderaMPrimerDesaprobado = 1;
					}
				}

			break;

			case "nb":
				contadorNB++;
				acumuladorEdadNoBinario += edad;

				//f)la altura y nota  del no binario mas joven
				if( contadorNB == 1 || edad > edadNoBinarioMasJoven ){

					edadNoBinarioMasJoven = edad;
					alturaNoBinarioMasJoven = altura;
					notaNoBinarioMasJoven = nota;
				}
			break;
		}
		
		//d)el primer alumno aprobado
		if(nota >= 6 || banderaDelPrimerAprobado == 0){

			nombreDelPrimerAprobado = nombre;
			banderaDelPrimerAprobado = 1;
		}
		else{

			contadorDesaprobados++;
		}

		//e)el nombre y edad de la máxima temperatura registrada
		if(temperatura > maximaTemperatura || banderaMaximaTemperatura == 0  ){

			maximaTemperatura = temperatura;
			nombreMaximaTemperatura = nombre;
			edadMaximaTemperatura = edad;
			banderaMaximaTemperatura = 1;
		}

		cantidadTotalDeAlumnos++;

		respuesta = prompt("Quiere continuar ?");

	}

		  
	//c)el promedio de edad por sexo.

		if(contadorM > 0)
		{
			promedioEdadMasculino = acumuladorEdadMasculino/contadorM;
		}
		if (contadorF > 0)
		{
			promedioEdadFemenino = acumuladorEdadFemenino/contadorF;
		}
		if(contadorNB > 0)
		{
			promedioEdadNoBinario = acumuladorEdadNoBinario/contadorNB;
		}

		//h)el porcentaje de  personas que desaprobaron sobre el total
		porcentajeDesaprobados = (contadorDesaprobados*100) /cantidadTotalDeAlumnos;

	//a)Cuántas mujeres hay
	document.write(contadorF+ "Mujeres en total"+"<br>");

	//b)Cuántos con fiebre y cuantos sin fiebre.
	document.write(contadorSinFiebre + " Alumnos sin fiebre");
	document.write("<br> "+ contadorConFiebre + " Alumnos Con fiebre");

	//c)el promedio de edad por sexo.
	document.write("<br>"+ "Promedio de edad, Mujeres " + promedioEdadFemenino);
	document.write("<br>"+ "Promedio de edad, Hombres " + promedioEdadMasculino);
	document.write("<br>"+ "Promedio de edad, No Binario " + promedioEdadNoBinario);

	//d)el primer alumno aprobado
	document.write("<br> "+ nombreDelPrimerAprobado+ " Es el primer aprobado");

	//e)el nombre y edad de la máxima temperatura registrada
	document.write("<br>"+ " Nombre "+ nombreMaximaTemperatura+ " y edad "+ edadMaximaTemperatura+ " Temperatura maxima  "+ maximaTemperatura );

	//f)la altura y nota  del no binario mas joven
	document.write("<br> "+ " Altura Del No Binario Mas Joven " +alturaNoBinarioMasJoven+ " y Nota "+ notaNoBinarioMasJoven);

	//g)el nombre de la mujer más alta de las que aprobó
	document.write("<br> "+ "nombre de la mujer mas alta de las que aprobo "+ nombreFmasAlta);

	//h)el porcentaje de  personas que desaprobaron sobre el total
	document.write("<br> "+ " porcentaje de desaprobados sobre el total "+ porcentajeDesaprobados);

	//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
	document.write("<br> "+ nombreMPrimerDesaprobado+ " El primer hombre que mide menos de 160 y esta desaprobado:");


}























































/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

{
	let respuesta;
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;
	

	
	do{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado ;
		contador++;
		console.log(contador);


		respuesta = prompt("si quiere continuar Ingrese la letra 's' ");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == 's');

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}
*/