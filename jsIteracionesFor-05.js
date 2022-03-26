//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{
	let num;
	for(; ;){

		num = parseInt(prompt("Ingrese un numero"));
		if(num == 9){
			break;
		}
		alert("Usted ingreso el numero " + num);
	}
}