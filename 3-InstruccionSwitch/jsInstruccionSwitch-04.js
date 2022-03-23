/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;
	
	 mes =document.getElementById("txtIdMes").value;

	 switch(mes)
	 {
	 	case "Febrero":
	 		mensaje = "tiene 28 días";
	 		break;

	 	case "Enero":
	 	case "Marzo":
	 	case "Mayo":
	 	case "Julio":
	 	case "Agosto":
	 	case "Octubre":
	 	case "Diciembre":
	 		mensaje = "tiene 31 días";
	 		break;

	 	case "Abril":
	 	case "Junio":
	 	case "Septiembre":
	 	case "Noviembre":
	 		mensaje = "Tiene 30 días";
	 		break;
	 }

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
// Tienen 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre
// Tienen 30 días: Abril, junio, septiembre y noviembre.