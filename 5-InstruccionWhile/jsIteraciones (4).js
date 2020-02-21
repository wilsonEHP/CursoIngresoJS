function mostrar()
{

	var numero = parseInt ( prompt("ingrese un número entre 0 y 10."));

	while ( numero < 0 || numero > 9  || isNaN(numero)){
		numero = parseInt (prompt ("El numero es incorecto, vuelva ingresar Numero :"));

	}

	document.getElementById ("Numero").value = numero ;


}//FIN DE LA FUNCIÓN