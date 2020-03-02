function mostrar()
{
var letra;
var numero;
var numero1;
var seguir;
var contadorpar = 0;
var contadorinpar = 0;
var contadorpos = 0;
var contadorceros = 0;
var acumuladorpos = 0 ;
var promediopos = 0 ;
var acumuladorneg = 0 ;
var flag = 0 ;
var maximo ;
var maximoletra;
var minimo ;
var minimoletra;



//------- ingreso de datos hasta que el usurio quiera
do{
     letra = prompt("ingrese una letra :");
        while(!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z") ) ){
            letra = prompt("error.ingrese una letra :");
        }

     numero = parseInt(prompt("ingrese primer numero :"));
     while (numero < -100 || numero > 100 || isNaN(numero)){
        numero = parseInt(prompt("error .. ingrese primer numero :"));

     }

//----------pariedad..-----
     if (   numero % 2 != 0  ){
        contadorinpar++;
     }
     else{
         contadorpar++;
     }
//------------signo.-------

if( numero == 0  ){
    contadorceros++;
}
else if(numero < 0){
        acumuladorneg = acumuladorneg + numero;
}

else{
    acumuladorpos= acumuladorpos + numero;
    contadorpos++;

}

//-----maximo minimo----

if(flag == 0 || numero < minimo ){
    minimo = numero;
    minimoletra = letra;


}
if (flag == 0 || numero > maximo){
     maximo = numero ;
     maximoletra = letra;

}


seguir = prompt("quiere seguir si o no:");

}while(seguir == "si");

if (contadorpos != 0 ){
    promediopos = acumuladorpos/contadorpos; 
}

document.write ("(a) La cantidad de números pares. " + contadorpar + "</br>" +
                "b) La cantidad de números impares."+
                 c) La cantidad de ceros.
                 d) El promedio de todos los números positivos ingresados.
                 e) La suma de todos los números negativos.
                 f) El número y la letra del máximo y el mínimo.)



)



}
