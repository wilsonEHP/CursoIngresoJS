/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precio = 35 ;
     var cantidad;
     var marca; 
     var descuento ;
     var procdescuento;
     var preciocondescuento;

    cantidad = parseInt(document.getElementById("Cantidad").value);

    marca =  parseInt(document.getElementById("Marca").value);

    switch (cantidad){
        case 1 :
        case 2 :
            procdescuento = 0;
            break;
        case 3 :
            if ( marca == "ArgentinaLuz "){
                procdescuento =  15;
            }
            else if ( marca =="FelipeLamparas "){
                procdescuento = 10;
            }
            else {
                procdescuento = 5 ;
            }
            break;
        case 4 :
            if ( marca == "ArgentinaLuz" ||  marca == "FelipeLamparas"){
                procdescuento = 25;
            }
            else {
                procdescuento = 20;
            }
            break;

        case 5 :
            if ( marca =="ArgentinaLuz"){
                procdescuento = 40 ;
            }
            else {
                procdescuento = 30 ;
            }
            break;
        default:
                procdescuento = 50;
            break;

    }

    // hasta este punto ya sabemos los porcentajes de descuento

    descuento = precio * procdescuento/100;
    
    preciocondescuento = precio - descuento;
    
    document.getElementById("precioDescuento").value = preciocondescuento;
 
}
