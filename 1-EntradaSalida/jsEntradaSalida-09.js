/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	

	let ingresoSueldo;
	let resultado;
	let aumento;
	let porcentaje;

	//le pido los datos al usuario
	ingresoSueldo = document.getElementById('txtIdSueldo').value;

	porcentaje = prompt("ingrese el aumento que quiere: ");

	//convierto los datos de texto a numeros
	ingresoSueldo = parseInt(ingresoSueldo);
	
	porcentaje = parseInt(porcentaje);
                            
	aumento = ingresoSueldo*porcentaje/100;


	resultado = ingresoSueldo + aumento;


 	//document.getElementById('txtIdResultado').value = resultado;

 	alert("usted ingreso $"+ingresoSueldo+" el aumento ingresado es %"+porcentaje+" equivale a $"+ aumento+" el total es: $"+resultado);

}
