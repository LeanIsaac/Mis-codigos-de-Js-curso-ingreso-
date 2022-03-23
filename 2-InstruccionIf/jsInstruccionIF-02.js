// Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()
{
	let ingresarEdad;

	ingresarEdad = document.getElementById('txtIdEdad').value;
	ingresarEdad =parseInt(ingresarEdad);

	if(ingresarEdad>=18)

	{
	alert("Es Mayor de edad");
	}	
	

}
//FIN DE LA FUNCIÓN
// txtIdEdad