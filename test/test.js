'use strict';
 
//var numeroEntero = 0;  // para el numero dado como variable auxiliar para calcular el binario
//var cadenabinaria = "";  // para poner en número en formato binario

var// mantisa

main();
 

function main() {
  ieee754aBinario(80);
}



// separa la parte entera y la decimal si hay
//function obtenerParteEnteraDecimal(ivalordado)
 /// le pasamos un numero y devuele un string


function ieee754aBinario(ivalordado)      
{

    var valordado = ivalordado; // valor que recibe de la caja de texto
    var dnumeropartido = valordado.split(".");
    var dParteEntera= dnumeropartido[0];
    var dParteDecimal= dnumeropartido[1];



 // signo del número dado 
    var bsigno;
  	var sValorBinarioExponente="";
  
  
    bsigno = (Math.sign(valordado)===1) ? 0 : 1;

    // ############################################################################################################################
    // aqui se cargaria para ver la parte de signo si fuera una caja de texto
    ///document.getElementById('txtsigno').value=  bsigno;
    //
    console.log(dParteEntera);
    console.log(dParteDecimal);


    var parteEnteraBinario= Convierte_Binario(dParteEntera);
  
   var parteDecimalBinario;
  
    //parte decimal con valor sino no calcula en binario la parte decimal
    if (dnumeropartido[1] > 0) {    
         parteDecimalBinario = obtenerParteDecimal_ABinario(dParteDecimal);
    }
    else {
      parteDecimalBinario=0;
    }

   // numero transformado a binario
   // ################################################################################################################
///         document.getElementById('verbinario').value="" + parteEnteraBinario + "," + "" + parteDecimalBinario +"";

  
    sValorBinarioExponente= exponente(parteEnteraBinario  + parteDecimalBinario );

    //#######################################################################################
    ///document.getElementById('txtexponente').value=sValorBinarioExponente;

   // aqui se usa la varible para establecer mantisa
     var sValorBinarioMantisa= parteEnteraBinario  + parteDecimalBinario ;
     sValorBinarioMantisa= sValorBinarioMantisa.substr(1); // quitamos el bit de la izquierda 
      // cargar valor en matisa campo txtmantisa
     // ######################################################################################### ###
   /// document.getElementById('txtmantisa').value=vermantisa(sValorBinarioMantisa);

      sValorBinarioMantisa= bsigno + " - "+  sValorBinarioExponente+  " - "  + vermantisa(sValorBinarioMantisa) ;

    //nos devuele la cadena valor Matinsa
    alert(sValorBinarioMantisa);
    return  sValorBinarioMantisa; 
}
/**********************************************************************************************
 * @@function: obtener la cadena 1 y 0 del resto hasta que la parte entera de la división sea 0
 * @param {numero parte decimal para transformar binario} ivalordado se pasa por valor
 * @return obtener la cadena de la parte decimal
 */
function obtenerParteDecimal_ABinario(ivalordado)
{
  
  var condicionComprueba;
  var restoAlmacenado;
  var bsigno;
  var   cadenabinaria;
  //  ejemplo, 0.375 a binario
  // 0.375 * 2 = 0,75   cogemos el 0 pasamos la parte decimal a multiplicar por 2 sucesivamente
  // 0.75 * 2 = 1.5     cogemos el 1 
  // 0.5 * 2 = 1,00         cogemos 1  saldria del bucle al ser la parte decimal 0
    var numeroDecimal= "0." +  ivalordado;
        numeroDecimal = parseFloat(numeroDecimal); // (casting para poder ser convertido
   restoAlmacenado=numeroDecimal;
    do {                  
        restoAlmacenado = "" + restoAlmacenado * 2 + "";

        var dnumeropartido =  restoAlmacenado.split(".") ;
        var dParteEntera= dnumeropartido[0];
        restoAlmacenado= "0." + dnumeropartido[1] + "";    // convertir en decimal ej 50 como 0,5
        restoAlmacenado=parseFloat(restoAlmacenado);
        //En esta variable guardamos el resto y se lo concatenamos al STRING ya almacenado.
        cadenabinaria = "" + dParteEntera +"" +""+ cadenabinaria  + "" ;

            // ejemplo 0,23 produce un  bucle infinito periodo puro  poner máximo 8 interaciones maximo 
          if (cadenabinaria.length > 8) break ;

    
      
          condicionComprueba=parseInt( dnumeropartido[1] );
      
    } while (condicionComprueba > 0);

     cadenabinaria= bsigno + " - " + cadenabinaria;
    return cadenabinaria;

}

 
function exponente(sCadenaBinaria)
{
     // si por ejemp es 11101 pasa 1,1101 y ocurrencias exponente de 1 son 3 para luego sumar 127
   var cexponente =sCadenaBinaria.substr(1);
   var longitudbinario= cexponente.split("1").length-1;

   longitudbinario = 127 +longitudbinario;
   var sValorBinarioExponente = Convierte_Binario(longitudbinario); // le pasamos valor para que lo convierta en binario
   // escribir el resultado en la caja de texto de txtexponente
   return sValorBinarioExponente;


}



  /**********************************************************************************************
 * @@function: obtener la cadena 1 y 0 del resto hasta que la parte entera de la división sea 0
 * @param {numero parte entera para transformar binario} iValorInsertado se pasa por valor
 * @return obtener la cadena binaria de la parte entera
 */
function  Convierte_Binario(iValorInsertado) {
     var  cadenabinaria="";
     var  restoAlmacenado;
  var numeroEntero;
    // parseInt es para que tome la parte entera
    numeroEntero = parseInt(iValorInsertado);
     
            do {

                // % el resto dividido del numero dara 0  y 1 hasta que sea indivisible 
                // se van haciendo sucesivas divisiones hasta no pueda dividirse  por 2 y sale del bucle con numero >=1 
                // por no ser divisible 
                // lo voy poniendo en una cadena los 0 y los 1 que sean del resto y concateneo según se opere
                // y por ultimo se  invierte la cadena para ver su valor en binario                   

                restoAlmacenado = numeroEntero % 2;
               // restoAlmacenado = parseInt(restoAlmacenado);
                //En esta variable guardamos el resto y se lo concatenamos al STRING ya almacenado.
                cadenabinaria = "" + restoAlmacenado +"" +""+ cadenabinaria  + "" ;

                numeroEntero /= 2;
                numeroEntero = parseInt(numeroEntero);


            } while (numeroEntero >= 1);


    return cadenabinaria;

}



 /**
 * 
  * @type {devuelve la mantisa la parte que falten 0 se rellenan a la derecha hasta completar los 23 bits}    
  *           */
function vermantisa(svalorpasadobinario)
{
  var srelleno ="";
  srelleno=svalorpasadobinario;
  svalorpasadobinario= srelleno.padEnd(23,"0");  // completar con ceros a la derecha
  return svalorpasadobinario;
}
