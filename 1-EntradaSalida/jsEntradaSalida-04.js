/*
Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
	Zonas(CABA-BuenosAires-GBA)
	Nombre de Choferes
	Edad del chofer(mayor a 18 años)
	Clientes(McDonals-Rodicio-SigaALaVaca)
	CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio

*/

function mostrar()
{

	let respuesta;
	let zonas;
	let nombre;
	let edad;
	let clientes;
	let cantidadDeaceite;

	let contadorCabaMasVisitado = 0;
	let contadorBuenosAiresMasVisitado = 0;
	let contadorGbaMasVisitado = 0;
	let zonaMasVisitada;

	let choferMasJoven;
	let nombreChoferMasJoven;
	let banderaChoferMasJoven =0;

	let banderaRodicio = 0;
	let mayorCantidadAceiteRodicio =0;


	respuesta = "si";

	while(respuesta == "si"){

		zonas=prompt(" Ingrese una zona (CABA-BuenosAires-GBA)").toLowerCase();
		while(zonas != "caba" && zonas != "buenosaires" && zonas != "gba"){
			zonas=prompt("Error, Ingrese una zona (CABA-BuenosAires-GBA)").toLowerCase();
		}

		nombre = prompt("Ingrese el nombre del chofer").toLowerCase();

		edad = prompt("Ingrese la edad del chofer, (mayor a 18 años)");
		edad = parseInt(edad);
		while(edad<18){
			edad = prompt("Error, Ingrese la edad del chofer, (mayor a 18 años)");
			edad = parseInt(edad);
		}
		clientes = prompt("Clientes (McDonals - Rodicio - SigaALaVaca)").toLowerCase();
		while(clientes != "mcdonals" && clientes != "rodicio" && clientes != "sigaalavaca" ){
			clientes=prompt("Error, Clientes(McDonals - Rodicio - SigaALaVaca)").toLowerCase(); 
		}
		cantidadDeaceite=prompt("Cantidad De Aceite (entre 800 y 1500 Litros)");
		 cantidadDeaceite=parseInt(cantidadDeaceite);
		while(cantidadDeaceite < 800 || cantidadDeaceite > 1500){

			cantidadDeaceite=prompt("Error, Cantidad De Aceite (entre 800 y 1500 Litros)");
			cantidadDeaceite=parseInt(cantidadDeaceite);
		}

		//a)La zona mas visitada 
		switch(zonas){
			case "caba":
			contadorCabaMasVisitado++;
			break;

			case "buenosaires":
			contadorBuenosAiresMasVisitado++;
			break;

			case "gba":
			contadorGbaMasVisitado++;
			break;

		}

			if(contadorCabaMasVisitado > contadorBuenosAiresMasVisitado && contadorCabaMasVisitado > contadorGbaMasVisitado){

				zonaMasVisitada = "C.A.B.A";
			}
			else{
				if(contadorBuenosAiresMasVisitado > contadorGbaMasVisitado){
					zonaMasVisitada = "Buenos Aires";
				}
				else{
					zonaMasVisitada = "G.B.A";
				}
			}

		//B)El nombre del chofer mas joven
		if(edad < choferMasJoven || banderaChoferMasJoven == 0){
			
			choferMasJoven = edad;
			nombreChoferMasJoven = nombre;
			banderaChoferMasJoven = 1;
		}


		//C)La mayor cantidad de aceite recolectada en Rodicio
		if(clientes == "rodicio"){
			if(cantidadDeaceite > mayorCantidadAceiteRodicio || banderaRodicio == 0){

				mayorCantidadAceiteRodicio = cantidadDeaceite;

				banderaRodicio = 1;
			}
		}



		respuesta= prompt("Desea seguir?");
	}
		//informar
		//a)La zona mas visitada 
		document.write("La zona mas visitada es: "+ zonaMasVisitada +"<br>");

		//B)El nombre del chofer mas joven
		document.write("nombre del chofer mas joven: "+ nombreChoferMasJoven+"<br>");

		//C)La mayor cantidad de aceite recolectada en Rodicio
		document.write("mayor cantidad de aceite recolectada en Rodicio: "+ mayorCantidadAceiteRodicio);

}

 