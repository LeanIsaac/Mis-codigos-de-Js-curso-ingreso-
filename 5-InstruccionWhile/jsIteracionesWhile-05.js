/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sex;
	
			//(!(a     o    b)) =  !(a) && !(b)
	while(!(sex == 'f' || sex == 'm'))
	{
		sex = prompt("ingrese f ó m .");
		
	}

	document.getElementById("txtIdSexo").value = sex;


	/*while(sex != 'f' && sex != 'm')
	{
		sex = prompt("Eroor vuelva a intentarlo");
	}
	document.getElementById("txtIdSexo").value = sex;*/
}

