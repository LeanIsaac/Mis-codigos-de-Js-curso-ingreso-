/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.*/

function mostrar()
{

	var respuesta="si";
	var origen;
	var cantidadDeVacunas;
	var CostoDeVuelo;

	var	acumuladorDeVacunasAsia=0;
	var	acumuladorDeVacunasEuropa=0;
	var	acumuladorDeVacunasAmerica=0;

	var banderaOrigenMenorCantidadVacunas=0;
	var origenMenorCantidadVacunas;
	var CostoDeVueloAsia=0;
	var CostoDeVueloEuropa=0;
	var CostoDeVueloAmerica=0;
	var totalVueloSinDescuento;
	var totalDeVacunas;
	var descuento =0;
	var TotalConDescuento;
	var TotalSinDescuento;

	while(respuesta == "si"){

		origen=prompt("ingrese el origen(asia - europa - america)");
		while(origen!="asia" && origen!="europa" && origen != "america"){

        	origen=prompt("Error, ingrese el origen(asia - europa - america)");
        }
        cantidadDeVacunas = prompt("cantidad de Vacunas, (entre 500000 y 2500000) ");
        cantidadDeVacunas =parseInt(cantidadDeVacunas);
        while(cantidadDeVacunas <500000 || cantidadDeVacunas > 2500000){

        	cantidadDeVacunas = prompt("Error, cantidad de Vacunas, (entre 500000 y 2500000)");
        	cantidadDeVacunas =parseInt(cantidadDeVacunas);
        }
        CostoDeVuelo = prompt("Costo de vuelo: (entre 1 millón y 5 millones de pesos)");
        CostoDeVuelo=parseInt(CostoDeVuelo);
        while(CostoDeVuelo <1000000 || CostoDeVuelo >5000000){
        	CostoDeVuelo = prompt("Error, Costo de vuelo: (entre 1 millón y 5 millones de pesos)");
        	CostoDeVuelo=parseInt(CostoDeVuelo);
        }

       switch(origen){
       	case "asia":
       		acumuladorDeVacunasAsia += cantidadDeVacunas;
       		CostoDeVueloAsia += CostoDeVuelo;
       	break;

       	case "europa":
       		acumuladorDeVacunasEuropa += cantidadDeVacunas;
       		CostoDeVueloEuropa += CostoDeVuelo;
       	break;

       	case "america":
       		acumuladorDeVacunasAmerica += cantidadDeVacunas;
       		CostoDeVueloAmerica += CostoDeVuelo;
       	break;     	
       	  
       }

		respuesta=prompt("desea continuar?");
	}	
	//b- El total sin descuentos a pagar por los gastos de los viajes
	totalVueloSinDescuento = CostoDeVueloAsia+ CostoDeVueloEuropa+ CostoDeVueloAmerica;

	//a- El origen que envió menor cantidad de vacunas
	if(acumuladorDeVacunasAmerica < acumuladorDeVacunasEuropa && acumuladorDeVacunasAmerica < acumuladorDeVacunasAsia)
	{
		origenMenorCantidadVacunas = "America";
	}
	else
	{
		if( acumuladorDeVacunasEuropa < acumuladorDeVacunasAsia)
		{
			origenMenorCantidadVacunas = "Europa";
		}else{
			origenMenorCantidadVacunas = "asia";
		}
	}

	totalDeVacunas = acumuladorDeVacunasAsia + acumuladorDeVacunasEuropa + acumuladorDeVacunasAmerica;

	//c- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive)
	//el descuento es del 15% con menor cantidad no hay descuento.Informar si hubo descuento de cuanto fue y el importe final con Descuento.

	TotalSinDescuento = totalDeVacunas	* descuento/100;

	TotalConDescuento = totalDeVacunas - TotalSinDescuento;

	if(totalDeVacunas >0 && totalDeVacunas <5000000){

		descuento =0;
	}
	else
	{
		if(totalDeVacunas >= 5000000 && totalDeVacunas <= 10000000)
		{
			descuento = 15;
		}
		else
		{
			descuento = 25;
		}
	}
	
	document.write("El continente que menos vacunas envió fue "+ origenMenorCantidadVacunas+"<br>");

	//El total sin descuentos a pagar por los gastos de los viajes
	document.write("Total a pagar por los gastos del vuelo es: "+ totalVueloSinDescuento);

	//Informar si hubo descuento de cuanto fue y el importe final con Descuento

	document.write("<br>" + " El descuento fue "+ descuento +", total Con descuento "+ TotalConDescuento);
}