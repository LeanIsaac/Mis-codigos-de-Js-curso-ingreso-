/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let PrecioUno;
	let PrecioDos;
	let precioTres;
	let resultado;

	PrecioUno = document.getElementById('txtIdPrecioUno').value;
	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	precioTres = parseInt(precioTres);

	resultado = PrecioUno + PrecioDos + precioTres;
	alert("la suma es: " + resultado);
}
function Promedio () 
{
	let PrecioUno;
	let PrecioDos;
	let precioTres;
	let resultadoSinPromedio;
	let resultadoConPromedio;

	PrecioUno = document.getElementById('txtIdPrecioUno').value;
	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	precioTres = parseInt(precioTres);

	resultadoSinPromedio = PrecioUno + PrecioDos + precioTres;
	resultadoConPromedio = resultadoSinPromedio / 3;

	alert("El promedio es: " + resultadoConPromedio);
}
function PrecioFinal () 
{
	let PrecioUno;
	let PrecioDos;
	let precioTres;
	let resultadoSinIva;
	let resultadoConIva;
	let resultado;

	PrecioUno = document.getElementById('txtIdPrecioUno').value;
	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	precioTres = parseInt(precioTres);

	resultadoSinIva = PrecioUno + PrecioDos + precioTres;
	resultadoConIva = resultadoSinIva * 0.21;
	resultado = resultadoSinIva + resultadoConIva
	alert("Precio Final: " + resultado);
}
// txtIdPrecioUno
// txtIdPrecioDos
// txtIdPrecioTres