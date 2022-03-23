/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado)
	{
		case "Ushuaia":
			mensaje = "Sur";
			break;

		case "Mar del plata":
			mensaje = "Este";
			break;

		case "Bariloche":
			mensaje = "Oeste";
			break;

		default:
		mensaje = "Norte";
		break;
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN