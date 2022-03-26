//al presionar el botón repetir hasta que utilizamos 'BREAK'.

function mostrar()
{
	for(let i=0; i < 10; i++){
		console.log(i);
		if(i == 8){
			break;
		}
	}
}