function mostrar()
{
    var marcaproducto;
    var marcamaspesado;

    var pesoproducto;
    var pesomaspesado;

    var acumuladorpes = 0 ;

    var siguir ;
    var temperatura;
    var canttemperatura = 0;

    var flag = 0 ;

    var cantidadproductomenos0;
    var promedioproducto = 0

    do{
        marcaproducto = prompt("ingrese marca del producto : ");

        pesoproducto = parseInt(prompt("ingrese peso del producto desde 1 a 100 :"));
        while (pesoproducto < 1 || pesoproducto > 100 || isNaN(pesoproducto)){
            pesoproducto = parseInt(prompt("error... ingrese peso del producto :"));
        }
        temperatura = parseInt(prompt("ingrese la temperatura desde -30 a 30 : "));
        while( temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
            temperatura = parseInt(prompt("error... ingrese la temperatura desde -30 a 30 : "));
        }


        if (temperatura % 2 == 0){
            canttemperatura++;
        }

        if (flag == 0 || pesoproducto > pesomaspesado && temperatura > 0){
            pesomaspesado = pesoproducto;
            marcamaspesado = marcaproducto;
            flag = 1; 
        }

        if (temperatura < 0){
            cantidadproductomenos0++;
        }

        acumuladorPeso = acumuladorPeso + peso;

        if (contador == 0 || peso > maximo) {
            maximo = peso;
        }
        if (contador == 0 || peso < minimo) {
            minimo = peso;
        }

        contador++;







        seguir = prompt("desea seguir ingresando datos  si o no :");

    }while (seguir == "si");


promedioproducto = acumuladorpeso




}
