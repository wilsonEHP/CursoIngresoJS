
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var respuesta;

    do {

        ancho = parseInt(prompt("ingrese el ancho del rectangulo: "));
            while (isNaN(ancho)){
                ancho = parseInt(prompt("error. ingrese el ancho del rectangulo : "));
            }

         largo = parseInt(prompt("ingrese el largo del rectangulo :"));
            while (isNaN(largo)){
                largo = parseInt(prompt("error. ingrese el largo del rectangulo : "));
        }

        perimetro = 2*( ancho + largo);

        alert ("perimetro del rectangulo : " + perimetro);
        
        respuesta = prompt ("Desea continuar s/n");
    }while(respuesta == "s");
    
}
