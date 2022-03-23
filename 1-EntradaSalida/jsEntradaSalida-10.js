/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/* 10 bis 
lo anterior mas.
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento */

function mostrarAumento()
{
	let importe;

	let DescuentoAlImporte;

	let importeConDescuento;

	let porcentaje

	importe = document.getElementById('txtIdImporte').value;

	importe = parseInt(importe);

	//debo pedir porcentaje por prompt
	porcentaje = prompt("Ingrese porcentaje");

	porcentaje = parseInt(porcentaje);


	DescuentoAlImporte = importe *21/100;

	importeConDescuento = importe - DescuentoAlImporte;

	//mostrar por alert 


	

	//document.getElementById('txtIdResultado').value = importeConDescuento;


}

//txtIdImporte
//txtIdResultado
//*0.25 o *25/100