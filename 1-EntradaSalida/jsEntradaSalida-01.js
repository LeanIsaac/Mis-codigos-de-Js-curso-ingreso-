/*
La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes, la carga de datos pedirá lo
siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/
function mostrar()
{
    var nombre;
    var destino;
    var cantidad;
    var clase;
    var respuesta;

    var contadorPromocional = 0;
    var contadorEjecutiva = 0;
    var contadorTurista = 0;
    var claseConMasPasajeros;

    var maxUshuaia;
    var flag =0;
    var nombrePilotaMaxPasajeros;

    var contadorPersonas= 0;
    var promedio;


    do{
        nombre = prompt("Ingrese nombre del piloto").toLowerCase();
        contadorPersonas++;

        destino = prompt("Ingrese el destino: Ushuaia, Cordoba o Jujuy ").toLowerCase();
        while(destino != "ushuaia" && destino != "cordoba" && destino != "jujuy"){
            destino = prompt("Error vuelva a Ingresar el destino: Ushuaia, Cordoba o Jujuy").toLowerCase();
        }

        cantidad = prompt("Ingrese la cantidad de personas en el avion, entre 0 y 250");
        cantidad = parseInt(cantidad);
        while(cantidad <0 || cantidad > 250){
            cantidad = prompt("Error, cantidad de personas, entre 0 y 250");
            cantidad = parseInt(cantidad);
        }

        clase = prompt("Clase: promocional, turista, ejecutiva").toLowerCase();
        while(clase != "promocional" && clase != "turista" && clase != "ejecutiva"){
            clase = prompt("Error: promocional, turista, ejecutiva").toLowerCase();
        }

        //a) La clase con más pasajeros.
        switch(clase){
            case "promocional":
                contadorPromocional++;
            break;

            case "turista":
                contadorTurista++;
            break;

            case "ejecutiva":
                contadorEjecutiva++;
            break;
        }

        //b) El nombre del piloto que lleva más pasajeros a Ushuaia.
        if(destino == "ushuaia"){
            if(cantidad > maxUshuaia || flag == 0){
                maxUshuaia = cantidad;
                nombrePilotaMaxPasajeros = nombre;
                flag = 1; 
            }
        }

        respuesta = confirm("Desea seguir ?");
    }while(respuesta);

    //a) Averiguo cual es la clase con más pasajeros.
    if(contadorPromocional > contadorEjecutiva && contadorPromocional > contadorTurista){

        claseConMasPasajeros = "Promocional";
    }
    else{
        if(contadorEjecutiva > contadorTurista){

            claseConMasPasajeros = "Ejecutiva";
        }
        else{

            claseConMasPasajeros = "Turista";
        }
    }

    promedio = contadorPersonas / contadorEjecutiva;

    //a) La clase con más pasajeros.
    document.write("La clase con más pasajeros: " + claseConMasPasajeros + "<br>");

    //b) El nombre del piloto que lleva más pasajeros a Ushuaia.
    document.write("El nombre del piloto que lleva más pasajeros a Ushuaia: " +  nombrePilotaMaxPasajeros+ "<br>");

    //c) El promedio de personas que usan la clase Ejecutiva.
    document.write("El promedio de personas que usan la clase Ejecutiva: " + promedio + "<br>");



}



/*
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso de niños en la semana, para eso
debemos tomar los siguientes datos:
- El nombre del niño:
- El turno de ingreso (validar: mañana, tarde y noche).
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive).
- Edad (entre 0 y 15 años inclusive).
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana.
b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió.
c) El nombre del niño con más temperatura en la semana.

function mostrar()
{
    var nombre;
    var turno;
    var temperatura;
    var edad;
    var respuesta;

    var contadorPacientes = 0;
    var contadorMañana = 0;
    var contadorTarde = 0;
    var contadorNoche = 0;

    var turnoMayorCantidadDeMenor ;

    var temperaturaMax ;
    var flag = 0;
    var nombreMaxTemperatura;

    do{
        nombre = prompt("Ingrese el nombre del paciente").toLowerCase();
        contadorPacientes++;

        edad = parseInt(prompt("Ingrese la edad, entre 0 y 15 años"));
        while(edad <0 || edad >15){
        edad = parseInt(prompt("Error, Ingrese la edad, entre 0 y 15 años"));
        }

        turno = prompt("Ingrese el turno: mañana, tarde y noche").toLowerCase();
        while(turno != "mañana" && turno != "tarde" && turno != "noche"){
        turno = prompt("Error vuelva a Ingresar el turno: mañana, tarde y noche").toLowerCase();
        }

        temperatura = parseInt(prompt("Ingrese la temperatura corporal entre 37 a 41°C"));
        while(temperatura <37 || temperatura >41){
        temperatura = parseInt(prompt("Error, Ingrese la temperatura corporal entre 37 a 41°C"));
        }

        

        //b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años recibió.
        // hago un contador para saber si es menor de 12, en que turno ingresa;
        if(edad < 12){
            switch(turno){
                case "mañana":
                    contadorMañana++;
                break;

                case "tarde":
                    contadorTarde++;
                break;

                case "noche":
                    contadorNoche++;
                break;
            }
        }

        //c) El nombre del niño con más temperatura en la semana.
        if(temperatura > temperaturaMax || flag == 0){
            temperaturaMax = temperatura;
            nombreMaxTemperatura = nombre;
            flag = 1;
        }


        respuesta = prompt("Desea seguir?");

    }while(respuesta == "si");
    
    //b) comparo los contadores para saber cual es el turno que ingresaron los menores a 12 años
    if(contadorMañana > contadorTarde && contadorMañana > contadorNoche){
        turnoMayorCantidadDeMenor = "Mañana";
    }
    else
    {
        if(contadorTarde > contadorNoche){
            turnoMayorCantidadDeMenor = "Tarde";
        }
        else
        {
            turnoMayorCantidadDeMenor = "Noche";
        }
    }
    

    //a) La cantidad total de niños que ingresaron en la semana.
    document.write("La cantidad de pacientes que ingresaron a la semana fue: "+ contadorPacientes + "<br>");

    //b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años recibió.
    document.write("De los tres turnos, la mayor cantidad de niños menores a 12 años que recibio fue: "+ turnoMayorCantidadDeMenor + "<br>");

    //c) El nombre del niño con más temperatura en la semana.
    document.write("El nombre del niño con más temperatura en la semana  fue :"+ nombreMaxTemperatura + "<br>");
}
*/







/*
1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)

No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.

Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.




function mostrar()

{
    let Nombre;
    let tipo;
    let Precio;
    let contadorDePrecios;
    let respuesta;
    let acumuladorVentasJuan;
    let acumuladorVentasMaria;
    let acumuladorVentasLucrecia;
    let acumuladorDePerfumesMaria;
    let contadorPerfumesMaria;
    let contadorDeVentasJuan;
    let contadorDeVentasMaria;
    let contadorDeVentasLucrecia;
    let vendedorMasBararo;
    let PrecioMasBarato;
    let flag;
    let comisionJuan;
    let comisionMaria;
    let comisionLucrecia;
    let vendedorDeMenosComision;

    flag = 0;
    respuesta = "si";
    acumuladorVentasJuan = 0;
    acumuladorVentasMaria = 0;
    acumuladorVentasLucrecia = 0;

    contadorPerfumesMaria = 0;

    contadorDeVentasJuan = 0;
    contadorDeVentasMaria = 0;
    contadorDeVentasLucrecia =0;


    while(respuesta == "si")
    {
        Nombre = prompt("Ingrese Nombre del vendedor: Juan, María, Lucrecia").toLowerCase(); //ingreso nombre
        while(Nombre != "juan" && Nombre != "maria" && Nombre != "lucrecia")
        {
            Nombre = prompt("Error vuelva a Ingresar el Nombre del vendedor: Juan, María, Lucrecia").toLowerCase();

        }  
        tipo = prompt("Ingrese el tipo de producto, Perfume, Shampoo o Maquillaje").toLowerCase(); //tipo de producto
        while (tipo != "perfume" && tipo != "shampoo" && tipo != "maquillaje")
        {
            tipo = prompt("Error, vuelva a Ingresar el tipo de producto, Perfume, Shampoo o Maquillaje").toLowerCase();
        }
        precio = prompt("ingrese Precio").toLowerCase(); // precio
        precio = parseInt(precio);
        while(precio < 0)
        {
            precio = prompt("Erro, vuelva a ingresar el Precio").toLowerCase();
            precio = parseInt(precio);
        }

        //Si la suma de las ventas realizadas por cada vendedor 
        switch(Nombre){
            case "juan":
            contadorDeVentasJuan++;
            acumuladorVentasJuan = acumuladorVentasJuan + precio;
            break;

            case "maria":
            contadorDeVentasMaria++;
            acumuladorVentasMaria = acumuladorVentasMaria + precio;
            if(tipo == "perfume")
            {
                contadorPerfumesMaria++;
            }
            break;

            case "lucrecia":
            contadorDeVentasLucrecia++;
            acumuladorVentasLucrecia + acumuladorVentasLucrecia + precio;
        break;
        }
            if(precio < PrecioMasBarato || flag == 0)
            {

                PrecioMasBarato = precio;
                vendedorMasBarato = Nombre;
                flag= 1;
            }
        
        respuesta = prompt("Desea seguir comprando? si-no").toLowerCase();
    }

    
    Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
   la comisión será del 15%. 
   Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión 
   será del 5%.

   if(acumuladorVentasJuan < 10000)
   {
    comisionJuan = acumuladorVentasJuan*0.2;
   }
   else
   {
        if(acumuladorVentasJuan > 5000)
        {
            comisionJuan = acumuladorVentasJuan*0.15;
        }
        else
        {
            comisionJuan = acumuladorVentasJuan*0.5;
        }
   }
   if(acumuladorVentasMaria < 10000)
   {
    comisionMaria = acumuladorVentasMaria*0.2;
   }
   else
   {
        if(acumuladorVentasMaria > 5000)
        {
            comisionMaria = acumuladorVentasMaria*0.15;
        }
        else
        {
            comisionMaria = acumuladorVentasMaria*0.5;
        }
   }
   if(acumuladorVentasLucrecia < 10000)
   {
    comisionLucrecia = acumuladorVentasLucrecia*0.2;
   }
   else
   {
        if(acumuladorVentasLucrecia > 5000)
        {
            comisionLucrecia = acumuladorVentasLucrecia*0.15;
        }
        else
        {
            comisionLucrecia = acumuladorVentasLucrecia*0.5;
        }
   }

    //a)Promedio de ventas por cada vendedor.
    document.write("El promedio de ventas de Juan es: "+ acumuladorVentasJuan/contadorDeVentasJuan +"<br>");
    document.write("El promedio de ventas de Maria es: "+ acumuladorVentasMaria/contadorDeVentasMaria +"<br>");
    document.write("El promedio de ventas de Lucrecia es: "+ acumuladorVentasLucrecia/contadorDeVentasLucrecia +"<br>");

    //b)Cantidad de perfumes que vendió María
    document.write("La Cantidad de perfumes que vendió María es de: "+ contadorPerfumesMaria+ "<br>");

    //c)El importe mas barato junto con el vendedor que lo vendió.
    document.write("El importe mas barato fue: "+ PrecioMasBarato + " Y el vendedor fue :"+ vendedorMasBarato+ "<br>");

    //d)El nombre del vendedor con menor comisión.

    if(comisionJuan<comisionMaria && comisionJuan<comisionLucrecia)
    {
        vendedorDeMenosComision = "Juan";
    }
    else
    {
        if(comisionMaria<comisionLucrecia)
        {
            vendedorDeMenosComision = "María";
        }
        else
        {
            vendedorDeMenosComision = "Lucrecia"
        }
    }


    document.write("El vendedor de menos comision fue: "+ vendedorDeMenosComision +"<br>");

}
*/



/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	//variables de entrada
	let nameProductOne;
	let nameProductTwo;
	let nameProductThree;
    let PrimerProducto;
    let segundoProducto;
    let tercerProducto;
    let pedirPorcentaje;

    //variables de salida
    let precioBruto;
    let promedio;
    let precioConIva;
    
    //declaro mis variables
    nameProductOne = prompt("Ingrese Nombre Del Producto");
    PrimerProducto = prompt("Primer Producto");
    nameProductTwo = prompt("Ingrese Nombre Del Producto");
    segundoProducto = prompt("segundo Producto");
    nameProductThree = prompt("Ingrese Nombre Del Producto");
    tercerProducto = prompt("tercer Producto");
    pedirPorcentaje = prompt("Ingrese Porcentaje");

    
    //convierto texto a numeros
    PrimerProducto = parseFloat(PrimerProducto);
    segundoProducto = parseFloat(segundoProducto);
    tercerProducto = parseFloat(tercerProducto);
    pedirPorcentaje = parseInt(pedirPorcentaje);


    //sumo los 3 productos
    precioBruto = PrimerProducto+ segundoProducto+ tercerProducto;
 
    //saco el promedio del precio bruto
    promedio = precioBruto /3;


    // al precio bruto le sumo el 21%
    precioConIva = precioBruto*1.21;


    pedirPorcentaje = precioConIva-(pedirPorcentaje/100);
 

	alert("El precio del Primer Producto es: "+ nameProductOne + PrimerProducto +  " segundo precio "+ nameProductTwo + segundoProducto + 
		" tercer precio "+ nameProductThree + tercerProducto + " El precio bruto es: "+ precioBruto+ " El promedio es:"+
		 promedio+ " El precio total con IVA es "+ precioConIva+ " El precio con Descuento es "+ pedirPorcentaje );
}


en este programa uso el alert y muestro un mensaje al usuario
*/