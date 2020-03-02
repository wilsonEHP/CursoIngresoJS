function mostrar()
{
 var numero1;
 var numero2;
 var resultado;
    numero1 = parseInt(prompt("ingrese el primer numero : "));
    numero2 = parseInt(prompt("ingrese el segundo numero : "));

    if (numero1 == numero2){
        alert(numero1 +" y "+numero2 );
    }

    else if (numero1 < numero2 ){
        resultado = numero1 + numero2 ;
        alert ("resultado : " + resultado);
        if (resultado > 10){
            alert("la suma es  " + resultado + " y supero la 10");
        }
    }



    else {
        resultado = numero1 - numero2;
        alert("el resto del numero1 y numero2 : "+ resultado);

    }
   

}
