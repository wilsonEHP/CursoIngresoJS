function mostrar()
{
 var nota;
 var notabaja;
 var sumanota = 0 ;
 var sexo;
 var sexobajo;
 var promedio;
 var flag = 0 ;
 var cantivarosmayor = 0 ; 

 for (var i = 0 ; i < 5 ; i++ ){
    
    nota = parseInt(prompt("ingrese nota :"));

    while ( nota < 0 || nota > 10 || isNaN(nota));
        {
            nota = parseInt(prompt("error. ingrese nota :"));
        }
    sexo = prompt( "ingrese sexo f/m : ");
        while ( sexo != "f" || sexo != "m" ){
            sexo = prompt( "error. ingrese sexo f/m : ");
        }
    sumanota  = sumanota + nota;

    if (flag == 0  || nota < notabaja){
       notabaja = nota;
       sexobajo = sexo;
       flag = 1;
    }
    if (nota >= 6 && sexo == "m"){
        cantivarosmayor++;
    }
    
 }
 promedio = sumanota/5;

 alert("promedio de la nota totales : "+ promedio + "/n"
        +" la nota mas baja y el sexo mas bajo : "+ notabaja +" "+ sexobajo +"/n"+
        +" cantidad de varones haya sido mayor y igual a 6 : " + cantivarosmayor );
}

