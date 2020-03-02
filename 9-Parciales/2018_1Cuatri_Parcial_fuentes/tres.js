function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;

    precio = parseInt(prompt("ingrese el precio :"));
    descuento = parseInt(prompt("ingrese el porcentaje :"));

    preciofinal = precio - precio*descuento/100;

    document.getElementById("elPrecioFinal").value = preciofinal; 

   
}
