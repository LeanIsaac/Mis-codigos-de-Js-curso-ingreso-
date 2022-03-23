/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave."); //primera parte

	while(claveIngresada != "utn750") // segunda parte,  condición (validación)
	{

		claveIngresada = prompt ("ERROR, reingrese el numero clave.")
		//tercera parte, modifico la variable de control
	}

	alert("es correcto");
	
}
