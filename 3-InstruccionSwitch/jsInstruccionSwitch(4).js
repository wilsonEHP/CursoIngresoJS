function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mes) {
        case "Febrero" : 
        alert ("este mes tiene 28 dias");
        break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("si tiene 31 dias");
            break;

        default :
        alert ("si tiene 30 dias");

        
        
    }




}//FIN DE LA FUNCIÓN