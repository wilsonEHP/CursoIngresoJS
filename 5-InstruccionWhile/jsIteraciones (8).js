function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var valor;
	
	var respuesta='si';

	do{
		contador ++;
		valor = parseInt ( prompt("ingrese numero"));
		if ( valor >= 0 ){
		positivo = positivo + valor;
		}
		else {
			negativo = negativo * valor;
		}
		respuesta = prompt("Deseas ingresar otro numero si/no");

	} while (respuesta == "si" || respuesta == "SI");



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN