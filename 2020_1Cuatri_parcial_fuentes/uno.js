/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let fabricante;
	let marca;
	let precio;
	let tipo;
	let cantidadDeUninades;

	let minimoAlcohol;
	let cantidadMinimoAlcohol;
	let fabricanteMasBarato;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorPrecioAlcohol;
	let acumuladorPrecioJabon;
	let acumuladorPrecioBarbijo;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let PromedioPorCompra;
	
	

	let flag ;
	let i;

	acumuladorAlcohol = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorPrecioAlcohol = 0;
	acumuladorPrecioJabon = 0;
	acumuladorPrecioBarbijo = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	i = 0;
	flag = 0;
					
	while(i < 5){

		tipo = prompt('producto a ingresar, "barbijo", "alcohol", "jabon" ').toLowerCase();
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){

			tipo = prompt("Eroor, vuelva a ingresar el producto").toLowerCase();
		}
		precio = prompt("Precio de producto, entre 100 y 300");
		precio = parseInt(precio);

		while(precio < 99 || precio > 301){ //validar entre 100 y 300

			precio = prompt("Eroor, vuelva a ingresar el pecio del producto, entre 100 y 300");
			precio = parseInt(precio);
		}
		cantidadDeUninades = prompt("Ingrese la cantidad de unidad, hasta 1.000") 
		cantidadDeUninades = parseInt(cantidadDeUninades);

		while(cantidadDeUninades < 1 || cantidadDeUninades >1000){

			cantidadDeUninades = prompt("Error, ingrese la cantidad de unidades, hasta 1.000");
			cantidadDeUninades = parseInt(cantidadDeUninades);
		}
		marca = prompt("ingrese la marca de producto").toLowerCase();
		fabricante = prompt("ingrese el fabricante").toLowerCase();

		switch(tipo){
		case "alcohol":
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			if(flag == 0)
			{
				minimoAlcohol = precio;
				cantidadMinimoAlcohol = cantidadDeUninades;
				fabricanteMasBarato = fabricante;
				flag = 1 //cambio el valor de mi bandera
			}
			else
			{
				if (minimoAlcohol > precio){
					minimoAlcohol = precio;
					cantidadMinimoAlcohol = cantidadDeUninades;
					fabricanteMasBarato = fabricante
				}
			}
			acumuladorAlcohol = acumuladorAlcohol + cantidadDeUninades;
			acumuladorPrecioAlcohol = acumuladorPrecioAlcohol + precio;
			contadorAlcohol = contadorAlcohol + 1;

		case "jabon":
			acumuladorJabon = acumuladorJabon + cantidadDeUninades;
			acumuladorPrecioJabon = acumuladorPrecioJabon + precio;
			contadorJabon = contadorJabon + 1;
 
		case "barbijo":
			acumuladorBarbijo = acumuladorBarbijo + cantidadDeUninades;
			acumuladorPrecioBarbijo = acumuladorPrecioBarbijo + precio;
			contadorBarbijo = contadorBarbijo + 1;

		}

		i++; //cantidad de iteración del while
	}	

	//b) Del tipo con mas unidades, el promedio por compra (precio/contador)
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){

		PromedioPorCompra = acumuladorPrecioAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon){

			PromedioPorCompra = acumuladorPrecioBarbijo/contadorBarbijo;
		}
		else
		{
			PromedioPorCompra = acumuladorPrecioJabon/contadorJabon;
		}
	}
	

	////a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	document.write("Del más barato de los alcohol,"+ minimoAlcohol+ " la cantidad de unidades,"+cantidadMinimoAlcohol+ " y el fabricante: "+fabricanteMasBarato +"<br>");

	//b) Del tipo con mas unidades, el promedio por compra (precio/contador)
	document.write("Del tipo con mas unidades, el promedio por compra: "+ PromedioPorCompra+"<br>");

	//c) Cuántas unidades de jabones hay en total
	document.write("unidades de jabones en total: "+ acumuladorJabon);
}



/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
	
	let contador;
	let tipo;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let minimoAlcohol;
	let banderaDelPrimero;
	let cantidadMinimaAlcohol;
	let fabricanteAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorePrecioJabon;
	let acumuladorePrecioBarbijo;
	let acumuladorePrecioAlcohol;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let promedio;




	contador=0;
	banderaDelPrimero= "es el primero";
	acumuladorJabon =0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorePrecioJabon=0;
	acumuladorePrecioBarbijo=0;
	acumuladorePrecioAlcohol=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;


	while(contador<5)
	{
		tipo = prompt("ingrese el tipo (barbijo, jabon o alcohol)");

		while(tipo != "barbijo" && tipo != "jabon"&& tipo !="alcohol")
		{
			tipo = prompt("error reingrese el tipo (barbijo, jabon o alcohol)");
		}

		precio = prompt("ingrese el precio entre 100 y 300");
		precio = parseInt(precio);

		while(precio <100 || precio >300)
		{
			precio = prompt("error reingrese el precio entre 100 y 300");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("error reingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("ingrese marca");

		fabricante = prompt("ingrese fabricante");

		if(tipo == "alcohol")
		{

			if(banderaDelPrimero ="es el primero" )
			{
			minimoAlcohol = precio;
			cantidadMinimaAlcohol= cantidadUnidades;
			fabricanteAlcohol = fabricante;
			banderaDelPrimero ="ya se cargo el primero";
			}
			else
			{

				if(minimoAlcohol > precio)
				{
					minimoAlcohol = precio;
					cantidadMinimaAlcohol= cantidadUnidades;
					fabricanteAlcohol = fabricante;
				}

			}
			
			acumuladorAlcohol = acumuladorAlcohol +cantidadUnidades;
			acumuladorePrecioAlcohol = acumuladorePrecioAlcohol + precio;
			contadorAlcohol=contadorAlcohol+1;
		}
		else
		{
			if(tipo == "jabon")
			{
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				acumuladorePrecioJabon = acumuladorePrecioJabon + precio;
				contadorJabon = contadorJabon+1;


			}
			else
			{
				acumuladorBarbijo = acumuladorBarbijo +cantidadUnidades;
				acumuladorePrecioBarbijo = acumuladorePrecioBarbijo + precio;
				contadorBarbijo=contadorBarbijo+1;

			}

		}




		contador=contador +1;
	}



	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{

		promedio = acumuladorePrecioAlcohol/contadorAlcohol; 

	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			promedio = acumuladorePrecioBarbijo/contadorBarbijo; 

		}

		else
		{
			promedio = acumuladorePrecioJabon/contadorJabon; 
		}


	}


document.write("Del más barato de los alcohol, la cantidad de unidades y el fabricante es "+cantidadMinimaAlcohol+" y su fabricante es " + fabricanteAlcohol);
document.write("<br>Del tipo con mas unidades, el promedio por compra es: "+promedio);
document.write("<br>Cuántas unidades de jabones hay en total es :"+acumuladorJabon);
}
*/