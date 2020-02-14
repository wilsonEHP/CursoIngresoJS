function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo = 10;
	var minimo = 1;

	numero = Math.floor(Math.random()* ((maximo+1)-minimo)+minimo);

	if ( numero == 9 || numero == 10 ){
		alert("EXELENTE " + numero);
	}

	else if ( numero < 4)
	alert("VAMOS LA PROXIMA SE PUEDE " + numero);

	else 
	alert("APROBO " + numero);
}//FIN DE LA FUNCIÓN