/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let EdadIngresada;

	EdadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (EdadIngresada>12 && EdadIngresada<18)
{
	alert ("eres adolecente");
}

}
//FIN DE LA FUNCIÓN
// txtIdEdad
