/*
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

function mostrar()
{
	var respuesta = "si";
	var edadIngresada;
	var vacuna;
	var dosis;
	var genero;
	var nombre;


	var contadorVacunaChina =0;
	var contadorVacunaRusa =0;
	var contadorVacunaAmericana =0;
	var edadVacunaChina;
	var promedioEdadVacunaChina;

	var banderaDelMasculinoMasJoven =0;
	var nombreDelMasculinoMasJoven;
	var vacunaDelmasculinoMasJoven;
	var masculinoMasJoven;

	var contadorVacunaAmericanaMenorEdad =0;
	var contadorPrimeraDosis =0;

	var vacunaMasInoculada;


	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el Nombre");

		edad = prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad <12)
		{
			edad = prompt("Error, Ingrese la edad");
			edad=parseInt(edad);
		}
		if(edad >= 12 && edad <=17 ){

			vacuna=prompt("ingrese la vacuna americana");
			while(vacuna != "americana"){
        	vacuna=prompt("Error, ingrese la vacuna americana");
        	}
		}
		else{
			vacuna=prompt("ingrese la vacuna(rusa - china - americana)");
		while(vacuna!="rusa" && vacuna!="china" && vacuna != "americana")
       		{
        	vacuna=prompt("Error, ingrese la vacuna(rusa - china - americana)");
        	}
		}
        dosis = prompt("ingrese la dosis, P si es la primera, S, si el la segunda");
		while (dosis != 'p' && dosis != 's'){

			dosis = prompt("Error, vuelva a ingresar la dosis, P si es la primera, S si el la segunda");
		}

		//d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
		if(dosis == "p"){
			contadorPrimeraDosis++;
		}

        genero = prompt("ingrese el genero f ó m ");
		while (genero != 'f' && genero != 'm'){

			genero = prompt("Error, vuelva a ingresar el genero");
		}
		//a- Promedio de edad de los que se vacunaron con la china.
		switch(vacuna){

		case "china":
			contadorVacunaChina++;
			edadVacunaChina = edad;
		break;

		case "rusa":
			contadorVacunaRusa++;
		break;

		case "americana":
			contadorVacunaAmericana++;
			//c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
			if(edad <18){
				contadorVacunaAmericanaMenorEdad++;
			}
		break;
	}
	if(genero == "m"){
		//b- Nombre y vacuna del masculino más joven.
		if( edad < masculinoMasJoven || banderaDelMasculinoMasJoven == 0){

			masculinoMasJoven = edad;
			nombreDelMasculinoMasJoven = nombre;
			vacunaDelmasculinoMasJoven = vacuna;
			banderaDelMasculinoMasJoven = 1;
		}
	}
	//e- Vacuna más inoculada, compare con contadores, 
	if(contadorVacunaRusa > contadorVacunaChina && contadorVacunaRusa > contadorVacunaAmericana){

		vacunaMasInoculada = "Rusa";
	}else{

		if(contadorVacunaChina > contadorVacunaAmericana){
			vacunaMasInoculada = "China";
		}
		else
		{
			vacunaMasInoculada = "Americana";	
		}	

	}

        respuesta = prompt("Desea seguir? si-no");//cambio la variable de control
	}

	promedioEdadVacunaChina = edadVacunaChina/contadorVacunaChina;

	if(contadorVacunaChina >0){
		//a- Promedio de edad de los que se vacunaron con la china.
		document.write("Promedio de edad de los que se vacunaron con la china: "+ promedioEdadVacunaChina + "<br>");
	}

	//b- Nombre y vacuna del masculino más joven.
	document.write("Nombre y vacuna del masculino más joven :"+ nombreDelMasculinoMasJoven +", "+ vacunaDelmasculinoMasJoven + "<br>");

	if(contadorVacunaAmericana >0){
	//c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
	document.write("De las personas que recibieron la vacuna americana "+ contadorVacunaAmericanaMenorEdad + " Son menores de edad"+ "<br>");
	}

	//d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
	document.write("El Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados son: "+ contadorPrimeraDosis +"<br>");

	//e- Vacuna más inoculada
	document.write("Vacuna más inoculada :"+ vacunaMasInoculada +"<br>");
}


