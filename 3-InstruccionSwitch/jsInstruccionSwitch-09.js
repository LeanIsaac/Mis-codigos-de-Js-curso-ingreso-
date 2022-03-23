/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacion;
	let destino;
	let precio;
	let precioFinal;
	let porcentaje;
	

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precio = 15000;
	porcentaje = 0;
	

	switch(estacion){
		case "Invierno":
		switch(destino){
			case "Bariloche":
				porcentaje = 20;
				break;
			case "Mar del plata":
				porcentaje = -20;
				break;
			default:
				porcentaje = -10;
				break;
		}
		break;

		case "Verano":
		switch(destino){
		case "Bariloche":
			porcentaje = -20;
			break;
		case "Mar del plata":
			porcentaje = 20;
			break;
			default:
			porcentaje = 10;
			break;
			}
			break;

		case "Otoño":
		case "Primavera":
		switch(destino){
		case "Cordoba":
			porcentaje = 0;
			break;
		default:
			porcentaje = 10;
			break;
		}
		break;
	}

	precioFinal = precio + precio * porcentaje/100;
		


	alert("El Precio Final es: $"+ precioFinal);
}
