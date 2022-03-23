/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	let nota;
	let sexo;
	let i;
	let acumuladorDeNotas;
	let promedioDeNotas;

	let NotaMasBaja;
	let flag;
	let sexoDeLaNotaMinima;
	let hombresConSeis;

	i = 0; //inicializo 
	hombresConSeis = 0;
	acumuladorDeNotas = 0;
	NotaMasBaja = 0;
	flag = 0;

	while(i<5){ // variable de control

		nota = prompt(" Ingrese nota, entre 0 y 10");
		nota = parseInt(nota);

		while(nota<0 || nota>10){
			nota = prompt("Error, ingrese una nota entre 0 y 10");
			nota = parseInt(nota);
		}

		sexo = prompt("ingrese el sexo f ó m ").toLowerCase();
		while (sexo != 'f' && sexo != 'm'){

			sexo = prompt("Error, vuelva a ingresar el sexo").toLowerCase();
		}

		if(flag == 0)
		{				//5
			NotaMasBaja = nota;
			sexoDeLaNotaMinima = sexo;
			flag = 1;
		}
		else
		{		//5           6
			if(NotaMasBaja < nota);
			{
				NotaMasBaja = nota;
				sexoDeLaNotaMinima = sexo;
			}
		}
		if(sexo == "m" && nota >=6)
		{
			hombresConSeis = hombresConSeis + 1;
		}

		acumuladorDeNotas = acumuladorDeNotas + nota;
		i++ //modifico la variable de control	
	}
	
	promedioDeNotas = acumuladorDeNotas /5;

	 document.write("promedio de notas totales" +promedioDeNotas+"<br>");
	 document.write("cantidad de  varones que su nota haya sido mayor o igual a 6"+ hombresConSeis +"<br>");
	 document.write("La nota más baja y el sexo de esa persona"+ NotaMasBaja + "," + sexoDeLaNotaMinima +"<br>");
}
