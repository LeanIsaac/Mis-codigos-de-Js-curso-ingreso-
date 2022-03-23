/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;

	var banderaMaximaTemperatura = 0;
	var temperaturaAlta;
	var nombreMaximaTemperatura

	var contadorViudo=0;
	var contadorMayorEdadViudo=0;
	var contadorSoltero=0;

	var totalHombreSolteroViudo;
	var contadorMayorEdadConFiebre=0;

	var acumuladorEdadSoltero=0;
	var Promedio;

	var respuesta;


	do{

		nombre = prompt("ingrese su nombre");

		edad = prompt("ingrese su edad");
		edad = parseInt(edad);

		sexo = prompt("ingrese el sexo, (f, m) ");
		while(sexo != "f" && sexo != "m"){

			sexo = prompt("Error, vuelva a ingresar el sexo");
		}

			estadoCivil = prompt("ingrese el estadoCivil, soltero, casado o viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){

			estadoCivil = prompt("Error, vuelva a ingresar el estadoCivil, soltero, casado o viudo");
		}
			temperatura = prompt("ingrese su termperatura, entre 32-42")
			temperatura = parseInt(temperatura);

		while (temperatura <32 || temperatura > 42){

			temperatura = prompt("Error, vulva a ingresar su temperatura, entre 32-42")
			temperatura = parseInt(temperatura);
		}

		//a) El nombre de la persona con mas temperatura.
		if(temperatura > temperaturaAlta || banderaMaximaTemperatura == 0){

			temperaturaAlta = temperatura;
			nombreMaximaTemperatura = nombre;
			banderaMaximaTemperatura = 1;
		}

		//b) Cuantos mayores de edad estan viudos
		switch(estadoCivil){
			case "viudo":
				contadorViudo++;

				if(edad> 60){

					contadorMayorEdadViudo++;
				}

			break;

			case "soltero":

				contadorSoltero++;
				acumuladorEdadSoltero += edad;

			break;

			case "casado":

			break;
		}

		respuesta=prompt("Desea seguir?").toLowerCase();

	}while(respuesta == "si");

		//c) La cantidad de hombres que hay solteros o viudos.
		totalHombreSolteroViudo = contadorSoltero + contadorViudo;

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edad > 60 && temperatura >38){

			contadorMayorEdadConFiebre++;
		}

		//e) El promedio de edad entre los hombres solteros.
		Promedio = acumuladorEdadSoltero/contadorSoltero;

		//a) El nombre de la persona con mas temperatura.
		document.write( "nombre de la persona con mas temperatura: "+ nombreMaximaTemperatura+"<br>");

		//b) Cuantos mayores de edad estan viudos
		document.write("Cuantos mayores de edad estan viudos " + contadorMayorEdadViudo+"<br>");

		//c) La cantidad de hombres que hay solteros o viudos.
		document.write("cantidad de hombres que hay solteros o viudos: " + totalHombreSolteroViudo +"<br>");

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		document.write(contadorMayorEdadConFiebre+ " personas mayores de edad, con fiebre (mas de 38°C)" +"<br>");

		//e) El promedio de edad entre los hombres solteros.
		document.write("promedio de edad entre los hombres solteros: "+Promedio  +"<br>");
}
