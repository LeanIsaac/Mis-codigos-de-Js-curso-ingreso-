/*
1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•  Vendedor: Juan, María, Lucrecia
•  Tipo producto: Perfume, Shampoo o Maquillaje
•  Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe mas barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.

*/

function mostrar()
{

   //declaro variables
   var respuesta="si";
   var vendedor;
   var tipoProducto;
   var importe;
   var importeMasBarato;
   var vendedorMasBarato;
   
   var comisionJuan;
   var comisionLucrecia;
   var comisionMaria;
   var vendedorMenorComision;
   var banderaDelPrimerImporte=0;
   var contadorVentasLucrecia=0;
   var contadorVentasJuan=0;
   var contadorVentasMaria=0;
   var acumuloImporteLucrecia=0;
   var acumuloImporteJuan=0;
   var acumuloImporteMaria=0;
   var contadorPerfume=0;


   while(respuesta=="si")
   {

      //validaciones
        //(Juan - Maria - Lucrecia)
        vendedor=prompt("ingrese el vendedor(Juan - Maria - Lucrecia)");
        vendedor=vendedor.toLowerCase();
       
        while(vendedor!="juan" && vendedor!="maria" && vendedor != "lucrecia")
        {
         vendedor=prompt("Error, ingrese el vendedor(Juan - Maria - Lucrecia)");
         vendedor=vendedor.toLowerCase();
        }

        //(Perfume - Shampoo - Maquillaje)
        tipoProducto=prompt("ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
        tipoProducto=tipoProducto.toLowerCase();
       
        while(tipoProducto!="perfume" && tipoProducto!="shampoo" && tipoProducto!= "maquillaje")
        {
         tipoProducto=prompt("Error, ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
         tipoProducto=tipoProducto.toLowerCase();
      }

        //Importe (mayor que 0)
        
        importe=parseInt(prompt("Ingrese el importe de la venta"));

        while(importe<1)
        {
         importe=parseInt(prompt("Error, Ingrese el importe de la venta"));
        }

      switch(vendedor)
      {
         case "juan":
            contadorVentasJuan++;
            acumuloImporteJuan=acumuloImporteJuan+importe; 
         break;
         case "maria":
            contadorVentasMaria++;
            acumuloImporteMaria = acumuloImporteMaria + importe;
            if(tipoProducto =="perfume")
            {
               contadorPerfume++;
            }
         break;
         case "lucrecia":
            contadorVentasLucrecia++;
            acumuloImporteLucrecia=acumuloImporteLucrecia+importe;
         break;
      }



      if(importe < importeMasBarato || banderaDelPrimerImporte==0)
      {
         importeMasBarato = importe;
         vendedorMasBarato = vendedor;
         banderaDelPrimerImporte = 1;
      }


      respuesta=prompt("Desea seguir ingresando datos?si-no");

   }


   /*Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
   la comisión será del 15%. 
   Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión 
   será del 5%.*/

   if(acumuloImporteJuan>10000)
   { 
      comisionJuan = acumuloImporteJuan*0.2;
   }
   else
   {
      if(acumuloImporteJuan>5000)
      {
         comisionJuan = acumuloImporteJuan * 0.15;
      }
      else
      {
         comisionJuan = acumuloImporteJuan * 0.05;
      }
   }
   if(acumuloImporteMaria>10000)
   { 
      comisionMaria = acumuloImporteMaria*0.2;
   }
   else
   {
      if(acumuloImporteMaria>5000)
      {
         comisionMaria = acumuloImporteMaria * 0.15;
      }
      else
      {
         comisionMaria = acumuloImporteMaria * 0.05
      }
   }
   if(acumuloImporteLucrecia>10000)
   { 
      comisionLucrecia = acumuloImporteLucrecia*0.2;
   }
   else
   {
      if(acumuloImporteLucrecia>5000)
      {
         comisionLucrecia = acumuloImporteLucrecia * 0.15;
      }
      else
      {
         comisionLucrecia = acumuloImporteLucrecia * 0.05;
      }
   }

   //a)Promedio de ventas por cada vendedor.
   document.write("El Promedio de ventas de Maria es: "+ (acumuloImporteMaria/contadorVentasMaria) + "<br>");
   document.write("El Promedio de ventas de Juan es: "+ (acumuloImporteJuan/contadorVentasJuan) + "<br>");
   document.write("El Promedio de ventas de Lucrecia es: "+ (acumuloImporteLucrecia/contadorVentasLucrecia) + "<br>");

   //b)Cantidad de perfumes que vendió María
   document.write("La cantidad de perfumes que vendio Maria es: "+ contadorPerfume + "<br>");

   //c)El importe mas barato junto con el vendedor que lo vendió.
   document.write("El importe mas barato es: $"+ importeMasBarato +" y el vendedor que lo vendió es "+vendedorMasBarato+ "<br>");

   //d)El nombre del vendedor con menor comisión.

   if(comisionJuan<comisionMaria && comisionJuan<comisionLucrecia)
   {
      vendedorMenorComision= "Juan";
   }
   else
   {
      if(comisionMaria<comisionLucrecia)
      {
         vendedorMenorComision="Maria";
      }
      else
      {
         vendedorMenorComision="Lucrecia";
      }
   }

   document.write("El vendedor con menor comision es: "+vendedorMenorComision);

}
