'use strict';

function ieee754aBinario(numero) {
   //numero = "00000000000000000000000000000000";
//   return numero;
 
      // dado un numero en formato string , hay que separar la parte decimal de la parte entera
       
      var valordado = numero; // valor que recibe de la caja de texto
      var dnumeropartido = valordado.split(".");
      var dParteEntera= dnumeropartido[0];
      
      var dParteDecimal= dnumeropartido[1];
      var cadenabinaria=""; 
      
         // el 1 es negativo, busca en la cadena el simbolo - 
      var bsignoNumero = ( Math.sign (numero) ===-1) ? 1 : 0 ;
     
      ////////////cadenabinaria=Convierte_Binario(dParteEntera);  
      var numeroEntero = parseInt(dParteEntera);
  var restoAlmacenado;
  
       cadenabinaria="";
        do {
            // % el resto dividido del numero dara 0  y 1 hasta que sea indivisible 
            // se van haciendo sucesivas divisiones hasta no pueda dividirse  por 2 y sale del bucle con numero >=1 
            // por no ser divisible 
            // lo voy poniendo en una cadena los 0 y los 1 que sean del resto y concateneo según se opere
            // y por ultimo se  invierte la cadena para ver su valor en binario                   

            restoAlmacenado = numeroEntero % 2;
           // restoAlmacenado = parseInt(restoAlmacenado);
            //En esta variable guardamos el resto y se lo concatenamos al STRING ya almacenado.
            cadenabinaria = restoAlmacenado.toString() + cadenabinaria ;
            numeroEntero /= 2;
            numeroEntero = parseInt(numeroEntero);
        } while (numeroEntero >= 1);
      
     // cadenabinaria=cadenabinaria.padStart(8,"0");
      cadenabinaria= cadenabinaria.toString();
     
      var ivalorexpoente = 127 + (cadenabinaria.length-1);
         
     ///// cadenabinaria=Convierte_Binario(ivalorexpoente);
      numeroEntero = parseInt(ivalorexpoente);
      cadenabinaria="";
        do {
            // % el resto dividido del numero dara 0  y 1 hasta que sea indivisible 
            // se van haciendo sucesivas divisiones hasta no pueda dividirse  por 2 y sale del bucle con numero >=1 
            // por no ser divisible 
            // lo voy poniendo en una cadena los 0 y los 1 que sean del resto y concateneo según se opere
            // y por ultimo se  invierte la cadena para ver su valor en binario                   

            restoAlmacenado = numeroEntero % 2;
           // restoAlmacenado = parseInt(restoAlmacenado);
            //En esta variable guardamos el resto y se lo concatenamos al STRING ya almacenado.
            cadenabinaria = restoAlmacenado.toString() + cadenabinaria ;
            numeroEntero /= 2;
            numeroEntero = parseInt(numeroEntero);
        } while (numeroEntero >= 1);

     
      // rellena al princio con 0 hasta completar el exponente
      cadenabinaria = cadenabinaria.padStart(8,"0"); 
      var parteExponente= cadenabinaria.toString();
      var sparteMantisa=cadenabinaria.substr(1, cadenabinaria.length);
      
      
      //***********
    //cadenabinaria = obtenerParteDecimal_ABinario(dParteDecimal);
         cadenabinaria="";
    //  ejemplo, 0.375 a binario
    // 0.375 * 2 = 0,75   cogemos el 0 pasamos la parte decimal a multiplicar por 2 sucesivamente
    // 0.75 * 2 = 1.5     cogemos el 1 
    // 0.5 * 2 = 1,00         cogemos 1  saldria del bucle al ser la parte decimal 0
      var numeroDecimal= "0." +  dParteDecimal;
          numeroDecimal = parseFloat(numeroDecimal); // (casting para poder ser convertido
     restoAlmacenado=numeroDecimal;
      do {                  
          restoAlmacenado = "" + restoAlmacenado * 2 + "";

            dnumeropartido =  restoAlmacenado.split(".") ;
            dParteEntera= dnumeropartido[0];
          restoAlmacenado= "0." + dnumeropartido[1] + "";    // convertir en decimal ej 50 como 0,5
          restoAlmacenado=parseFloat(restoAlmacenado);
          //En esta variable guardamos el resto y se lo concatenamos al STRING ya almacenado.
          cadenabinaria = "" + dParteEntera +"" +""+ cadenabinaria  + "" ;

              // ejemplo 0,23 produce un  bucle infinito periodo puro  poner máximo 8 interaciones maximo 
            if (cadenabinaria.length > 8) break ;

      } while (parseInt( dnumeropartido[1]) > 0);
  
      
      
      
      
      sparteMantisa=sparteMantisa+cadenabinaria; 
      
      
     // rellena al princio con 0 hasta completar la parte de la mantisa
        sparteMantisa=sparteMantisa.padEnd(23,"0");
      cadenabinaria=bsignoNumero.toString() +  parteExponente + sparteMantisa;
      
      return cadenabinaria.toString();
      
  }
  


