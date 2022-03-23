/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/
function mostrar()
{
	let age;
	let text;

	age = prompt("Ingrese Edad");
	age = parseInt(age);

	if(age>70)
	{
    	text = "Usted es anciano";
	}
	else
	{
	if (age >17 && age <71)
		{
			text = "Usted es Mayor";
		}
		else
		{
			if(age>12 && age <18)
			{
				text = "Usted es adolecente";
			}
			else
			{
				if(age>3 && age<13)
				{
					text = "Usted es niño";
				}
				else
				{
					text = "Usted es bebe";
				}
			}
		}
	}	


	document.getElementById("txtIdEdad").value = text;


}
//FIN DE LA FUNCIÓN
// txtIdEdad
