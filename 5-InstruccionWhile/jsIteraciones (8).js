function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	do{
		numero = parseInt ( prompt("ingrese numero: "));

		while (isNaN(numero)){
			numero = parseInt ( prompt ("ingrese nuevamente el numero: "));
		}
	

		if ( numero >= 0 ){
		  positivo = positivo + numero;
		 }
		else {
			negativo = negativo * numero;
			flag = 1;
		}
		respuesta = prompt("Deseas ingresar otro numero si/no");

	} while (respuesta == "si" || respuesta == "SI");

	if (flag == 0 ){
		negativo = 0 ;
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN