function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero ;

	do {
		contador ++;
		numero = parseInt (prompt("Ingrese numero para seguir: "));
		acumulador = acumulador + numero;
		respuesta = prompt ("Si quiere continuar ingrese si/no").toLowerCase();
	}


	while ( respuesta == "si".toLowerCase()  )
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN