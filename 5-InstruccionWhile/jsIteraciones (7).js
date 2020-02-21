function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero ;
	var promedio;

	do {
		numero = parseInt (prompt("Ingrese numero para seguir: "));

		while (isNaN(numero)){
		numero = parseInt(prompt(" eso no es un numero ingrese"));
		}
		acumulador = acumulador + numero;
		contador = contador + 1 ;

		respuesta = prompt ("Si quiere continuar ingrese si/no");

	}
	while ( respuesta == "si" );

	promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

} //FIN DE LA FUNCIÓN