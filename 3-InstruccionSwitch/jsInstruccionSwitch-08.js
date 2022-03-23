/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	 destinoIngresado =document.getElementById("txtIdDestino").value;

	 switch(destinoIngresado)
	 {
	 	case "Ushuaia":
			mensaje = "Hace Frio";
			break;

		case "Mar del plata":
			mensaje = "Hace Calor";
			break;

		case "Bariloche":
			mensaje = "Hace Frio";
			break;

		default:
		mensaje = "Hace Calor";
		break;
	 }


	alert(mensaje);

}//FIN DE LA FUNCIÓN