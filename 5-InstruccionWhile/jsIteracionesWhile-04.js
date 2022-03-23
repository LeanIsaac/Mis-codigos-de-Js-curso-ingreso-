/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;


	while(!(num <=9 && num>=0))
	{
		
		console.log("num");
	num = prompt("ingrese un número entre 0 y 9");
	num = parseInt(num);

	}

	document.getElementById("txtIdNumero").value = num;
}
