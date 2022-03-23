/* Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
    //Variables de entrada
    let ingresarEdad;


    ingresarEdad = document.getElementById('txtIdEdad').value;
    ingresarEdad = parseInt(ingresarEdad);

 
    if (ingresarEdad == 15) //verdadero
    {
    //mostrar una alerta que diga que es adolecente
    alert("niña bonita");
	}


}//FIN DE LA FUNCIÓN
// txtIdEdad
// eperadores relacional