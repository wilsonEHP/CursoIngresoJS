/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var import1;

     import1 = parseInt( document.getElementById("sueldo").value);

     document.getElementById("resultado").value = import1 + import1 *10/100;
}
