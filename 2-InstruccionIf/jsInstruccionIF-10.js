/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let numberRandom;

	//genero un numero random del 1 al 10
	numberRandom = Math.floor(Math.random()*11);

	if(numberRandom>=9 && numberRandom<=10)
	{
		alert(numberRandom+ " EXCELENTE");
	}
	else
	{

			if(numberRandom>4)
			{
				alert(numberRandom+ " APROBO");
			}
			else
			{
				alert(numberRandom+ " Vamos, la proxima se puede");
			}

	}


}