function mostrar()
{

	var flag = 0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;

	var respuesta = "si";

	do{
		numero = parseInt ( prompt("ingrese numero:"));
		while (isNaN(numero)){
			numero = parseInt ( prompt("error ingrese nuevamente el numero: "));
		}

		if (flag == 0 || numero > maximo ){

			maximo = numero ;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1 ;

		}

		respuesta = prompt("quiere ingresar otro numero si/no : " );

	}

	while(respuesta == "si" || respuesta == "SI");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN