/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let ingreseTemperatura;
	let FahrenheitACentigrados

	ingreseTemperatura = document.getElementById('txtIdTemperatura').value;
	ingreseTemperatura = parseInt(ingreseTemperatura);

	FahrenheitACentigrados = (ingreseTemperatura-32)*5/9;

	alert(ingreseTemperatura+ " Grados Fahrenheit "+ " equivale a "+ FahrenheitACentigrados+ " Grados centígrados");


}

function CentigradosFahrenheit () 
{
	let ingreseTemperatura;
	let centigradosAFahrenheit

	ingreseTemperatura = document.getElementById('txtIdTemperatura').value;
	ingreseTemperatura = parseInt(ingreseTemperatura);

	centigradosAFahrenheit = (ingreseTemperatura*9/5)+32;

	alert(ingreseTemperatura+ " Grados Centigrados "+ " equivale a "+ centigradosAFahrenheit+ " Grados Fahrenheit");


}

// txtIdTemperatura