function mostrar()
{
	//declaracion de variables

	var numero;
	var respuesta="si";
	var sumanegativo = 0;
	var sumapositivo = 0;
	var cantpositivo = 0;
	var cantnegativo = 0;
	var cantcero = 0;
	var cantnumeropares = 0;
	var promediodepositivo;
	var promediodenegativo;
	var diferencias;

	do{
		numero = parseInt(prompt("ingrese numero: "));
			while (isNaN(numero)){
				numero = parseInt(prompt("error. ingrese un numero: "));
			}
			if (numero < 0){
				sumanegativo = sumanegativo + numero;
				cantnegativo = cantnegativo + 1;
				
			}
			else if (numero > 0){
				sumapositivo = sumapositivo + numero;
				cantpositivo = cantpositivo + 1;
			}
			else {
				cantcero = cantcero + 1 ;
			}
            
			if ( numero % 2 == 0  && numero != 0){
				cantnumeropares = cantnumeropares + 1 ;
			}

       respuesta = prompt ("ingre si quiere continuar si / no");
	}while (respuesta == "si"|| respuesta == "SI");



	promediodenegativo = sumanegativo / cantnegativo ;

	promediodepositivo = sumapositivo / cantpositivo ;

	diferencias = sumapositivo - sumanegativo ;

	document.write("suma de positivo : "+ sumapositivo + "</br>"
				  +"suma de negativo : "+ sumanegativo + "</br>"
				  +"cantidad de positivo : "+ cantpositivo + "</br>"
				  +"cantidad de negativo : "+ cantnegativo + "</br>"
				  +"cantidad de ceros : "+ cantcero + "</br>"
				  +"cantidad de numero pares : "+ cantnumeropares + "</br>"
				  +"promedio de negativo : " + promediodenegativo + "</br>"
				  +"promedio de positivo : " + promediodepositivo + "</br>"
				  +"diferencia entre positivo y negativo : "+ diferencias + "</br>");




}//FIN DE LA FUNCIÓN