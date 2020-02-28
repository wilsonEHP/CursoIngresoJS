function mostrar() {

    var numero;
    var contadordivisores = 0;

    numero = parseInt(prompt("ingrese numero :"));
    while (isNaN(numero)) {
        numero = parseInt (prompt("error, ingrese nuemero nuevamente :"));
    }
    for (var i = 1; i <= numero ; i++){
        if (numero % i  == 0) {
            console.log(i);
            contadordivisores++

        }

    }
 console.log("cantidad de numero pares :" + contadordivisores );
}