/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let IngreseNumero;
	//let contador;
	let respuesta;
	let sumaPositivos;
	let negativos;
	let flag = 0;

	//contador = 0;
	sumaPositivos = 0;
	negativos = 1;
	


	
	do {
		IngreseNumero = prompt("Ingrese un Numero");
		IngreseNumero = parseInt(IngreseNumero);
		//console.log(IngreseNumero);

		if(IngreseNumero >= 0)
		{
			sumaPositivos = sumaPositivos + IngreseNumero;
			//alert("positivo");
		}
		else
		{
			flag = 1;
			negativos = negativos * IngreseNumero;
			//alert("negativo");
		}
		

		respuesta = prompt("'s' para continuar ");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == 's');

	if(flag == 0)
	{
		negativos = 0;
	}

	document.getElementById("txtIdProducto").value = negativos;
	document.getElementById("txtIdSuma").value = sumaPositivos;	
	

}
