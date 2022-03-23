/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;


	alert("la suma es " + resultado );
}
// pardeInt me convierte un texto a numero
//txtIdNumeroUno
//txtIdNumeroDos