function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "Enero" : 
    case "Febrero" :
    case "Marzo" : 
    case "Abril" :
    case "Junio" : 
        alert ("Falta pàra el invierno!!");
        break;
    
    case "Julio" :
    case "Agosto" :
        alert ("Abrigate que hace frio!!");
        break; 
  default:
      alert("ya nos pasamos invierno");


}




}//FIN DE LA FUNCIÓN