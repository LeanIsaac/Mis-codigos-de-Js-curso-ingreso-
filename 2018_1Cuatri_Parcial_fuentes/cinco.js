/* MARECOS LEANDRO 
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
	let planeta;

	planeta = prompt("Ingrese un planeta del sistema solar").toLowerCase();

	switch (planeta){
		case "mercurio":
		case "venus":
		case "marte":
			text = "acá hace mas calor";
			break;
		case  "tierra":
			text = "aca vivimos";
		break;
		
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			text = "acá hace mas frio";
		break;

		default:
		text = "planeta no valido"
		break;
	}





	alert(text);
}
