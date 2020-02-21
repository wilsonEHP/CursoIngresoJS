function mostrar()
{

	var contador=0;
	var numero ;
	var respuesta="si";
	do{
		numero = parseInt(prompt("ingrese numero: "));
			while (isNaN(numero)){
				numero = parseInt(prompt("error. ingrese un numero: "));
			}
			if (numero < 0){
				
			}



       respuesta = prompt ("ingre si quiere continuar si / no");
	}while (respuesta == "si")






}//FIN DE LA FUNCIÓN