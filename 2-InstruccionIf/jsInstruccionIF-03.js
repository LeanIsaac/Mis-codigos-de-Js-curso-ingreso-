/* 
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad =parseInt(edad);

	if (edad >=18)
	{
		alert("Es Mayor de edad");

	}
	//if (edad <=17)

	//sino
	else
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN
// txtIdEdad