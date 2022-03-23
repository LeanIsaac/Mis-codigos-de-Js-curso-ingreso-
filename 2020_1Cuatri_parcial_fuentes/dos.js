/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera: 
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var materiales;
  var respuesta;
  var cantidadDeBolsas;
  var precioBolsa;
  var porcentaje;
  var precioSinDescuento;
  var descuento;
  var precioFinal;
  var acumuladorDeMateriales;
  var TipoMasCaro;
  var text;

  porcentaje = 0;

  respuesta = "si"; //icializo la variable

  

  while(respuesta == "si") //variable de control
  {
    materiales = prompt("materiales: (arena, cal, o cemento)").toLowerCase();
    while(materiales != "arena" && materiales != "cal" && materiales != "cemento")
    {
      materiales= prompt("Error, Vuelva a ingresar los materiales, (arena, cal, o cemento)").toLowerCase();
    }
    cantidadDeBolsas= prompt("Ingrese la cantidad de Bolsas a comprar").toLowerCase();
    cantidadDeBolsas = parseInt(cantidadDeBolsas);
    while(cantidadDeBolsas <0)
    {
      cantidadDeBolsas = prompt("Vuelva a ingresar la cantidad de bolsa a comprar").toLowerCase();
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }
    precioBolsa= prompt("Ingrese precio por bolsa");
    precioBolsa = parseInt(precioBolsa);
    while(precioBolsa<0)

      precioBolsa = prompt("Error, Vuelva a ingresar el precio").toLowerCase();
      precioBolsa = parseInt(precioBolsa);

    respuesta = prompt("Desea seguir?").toLowerCase(); //modifico la variable de control

  } //Fin del While


  if(cantidadDeBolsas > 0 && cantidadDeBolsas < 10)
  {
    porcentaje = 0;
    text = "el Importe Total a pagar es de: ";
  }
  else
  {
    if (cantidadDeBolsas >10 && cantidadDeBolsas <30)
    {
      porcentaje = 15;
      text = "el importe total a pagar con descuento es de: ";
    }
     else
    {
      porcentaje = 25;
      text = "el importe total a pagar con descuento es de: ";
    }
  }
    
  precioSinDescuento = cantidadDeBolsas * precioBolsa;
  
  descuento = precioSinDescuento * porcentaje/100;

  precioFinal = precioSinDescuento - descuento;

  
  document.write(text);
  document.write(precioFinal);
}
