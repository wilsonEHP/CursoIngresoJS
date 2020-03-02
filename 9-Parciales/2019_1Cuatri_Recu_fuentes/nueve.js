function mostrar()
{
var nombre;
var edad;
var sexo;
var notafinal;
var seguir;
var cantidanotas = 0; 
var acumuladormenores = 0 ;
var contadorm = 0;
var acumuladoradolecente = 0 ;
var contadord = 0;
var acumuladormayores = 0 ;
var contadormayores = 0 ;
var promediom = 0;
var promedioado = 0;
var promediomayores = 0;
do{
    nombre = prompt("ingrese el nombre del estudiante : ");

    edad = parseInt(prompt("ingrese la edad del alumno :"));
        while( isNaN(edad) ){
              edad = parseInt(prompt("error.. ingrese la edad del alumno :"));
           }
    sexo = prompt ("ingrese el sexo f o  m : ");
           while (sexo != "f" && sexo != "m"){
            sexo = prompt ("error... ingrese el sexo f o  m : ");
           }
    notafinal = parseInt(prompt("ingrese la nota final del alumno 1 al 10:"));
           while( isNaN(notafinal) || notafinal < 0 || notafinal > 10 ){
                 notafinal = parseInt(prompt("error.. ingrese la notafinal del alumno :"));
              }

    if (notafinal >=4 && sexo == "m"){
        cantidanotas++;
    }

    if(edad <=13 ){
        acumuladormenores = acumuladormenores + notafinal;
        contadorm++

    }
    else if(edad > 18 ){
        acumuladormayores = acumuladormayores + notafinal;
        contadormayores++;
    }

    else{
        acumuladoradolecente = acumuladoradolecente + notafinal;
        contadord++;
    }








    seguir = prompt("ingrese si quiere seguir si o no");

}while(seguir == "si");

}
