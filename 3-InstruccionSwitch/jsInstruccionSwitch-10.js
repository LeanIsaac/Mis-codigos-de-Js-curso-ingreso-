/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()

{
	let estacion;
	let destino;
	let text;
	let viaja;

	//condiciono a la variable 0; despues lo sobreescribo
	viaja = 0;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
		if(destino == "Bariloche")
		{
			viaja = 1;
		}
			break;


		case "Verano":  	
	 	//si mi destino es mar del plata "o" cataratas se viaja.
		if(destino == "Mar del plata" || destino == "Cataratas")
		{
			viaja = 1;
		}
			break;


		case "Otoño":
			viaja = 1;
			break;


		case "Primavera":
		if(destino != "Bariloche")
		{
			viaja = 1;
		}
		break
	}

//si mi variable "viaja" es igual a 1, se viaja; si no, no se viaja.
	if(viaja == 1)
	{
		alert("Se Viaja");
	}
	else
	{
		alert("No se Viaja");
	}
}
