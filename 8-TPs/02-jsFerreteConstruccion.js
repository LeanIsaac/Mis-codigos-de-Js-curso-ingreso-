/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//declaro mis variables
     let largoDelTerreno;
     let anchoDelTerreno;
     let perimetro;
     let resultadoFinal;
   

     largoDelTerreno = document.getElementById('txtIdLargo').value;
     anchoDelTerreno = document.getElementById('txtIdAncho').value;

     largoDelTerreno =parseInt(largoDelTerreno);
     anchoDelTerreno = parseInt(anchoDelTerreno);

     //asigno valores a mis variables
     perimetro = largoDelTerreno+ largoDelTerreno+ anchoDelTerreno + anchoDelTerreno;

     resultadoFinal = perimetro * 3;

     alert("el perimetro del terreno es de "+ perimetro+ " Metros "+ " y en total necesitaremos " + resultadoFinal+ " Metros de alambre");

     // el lrgo y el tot lo mult 




}

/* B. mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular
 y se debe alambrar con tres hilos de alambre. */
function Circulo () 
{
	//declaro variables
	let radio
	let totalDeHilos

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);


 //el radio lo multiplico dos veces, para sacar el perimetro de un circulo con Pi(3.14 o Math.PI)
 
	totalDeHilos = radio * 2 * 3.14;

	alert("En total necesita "+ totalDeHilos * 3 + " Metros de alambre")


	//2*3.14*radio
}

/* C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular. */
function Materiales () 
{
	let largoDelTerreno;
    let anchoDelTerreno;
    let perimetro;
    let cemento;
    let cal;

     cal = 3;
     cemento = 2;
   

     largoDelTerreno = document.getElementById('txtIdLargo').value;
     anchoDelTerreno = document.getElementById('txtIdAncho').value;

     largoDelTerreno =parseInt(largoDelTerreno);
     anchoDelTerreno = parseInt(anchoDelTerreno);

     //asigno valores a mis variables
     perimetro = largoDelTerreno+ largoDelTerreno+ anchoDelTerreno + anchoDelTerreno;

     // contrapiso 1m x 1m, necesito 2 cemento y 3 de cal

     cal = perimetro * cal; 
     cemento = perimetro * cemento;

     //mostrar cuantas bolsas se necesitan de cada uno para el perimetro.
     alert("el perimetro del terreno es de "+ perimetro+ " Y necesita "+ cemento+ " bolsas de Cemento"+ " y "+ cal+ " de Cal");
}

// txtIdLargo
// txtIdAncho
// txtIdRadio