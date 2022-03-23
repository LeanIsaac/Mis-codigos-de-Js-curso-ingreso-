/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()

{	
	// declarar variables            // while, cuando NO SE la cantidad de repeticionres
	let flag;						//for, cuando SE la cantidad de repeticiones
	let numero;						// do while, caundo tengo que ejecutar POR LO MENOS UNA VEZ
	let Maximo;
	let Minimo;
	let respuesta;

	//iniciar variables
	flag = 0
		
	do{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		//reconozco si estoy pidiendo por primera vez
		if(flag == 0)
		{
			//si es asi inicializo max y min.
			Maximo = numero;
			Minimo = numero;
			flag = 1;
		}
		//caso contrario me fijo si tengo un nuevo minimo o un nuevo maximo
		// y los actualizo de ser necesario
		if(numero > Maximo){
			Maximo = numero;
		}
		else if(numero < Minimo){
				Minimo = numero;                    
		}
	
		respuesta=prompt("desea continuar?: ");


	}while(respuesta == 's');

	document.getElementById("txtIdMaximo").value = Maximo;

	document.getElementById("txtIdMinimmo").value = Minimo;
}







	/*
	Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.*/

	//let flag;						
	//let Maximo;
	//let Minimo;
	//let respuesta;

	//flag = 0 inicializacion

/*
	do {

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	if(flag == 0)
	{
		Minimo = numero;
		Maximo = numero;
		flag = 1
	}
	
	if(numero > Maximo)
	{
		Maximo = numero;
	}
	else
	{
		if(numero<Minimo)
		{
			Minimo = numero;
		}
	}


	// modifico la variable de control
	respuesta = prompt("desea Seguir?");
	respuesta = respuesta.toLowerCase();

	} while(respuesta == "si"); //condicion 



	document.getElementById("txtIdMaximo").value = Maximo;

	document.getElementById("txtIdMinimmo").value = Minimo;

} 
*/