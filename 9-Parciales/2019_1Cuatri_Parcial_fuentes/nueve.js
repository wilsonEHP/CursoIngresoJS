function mostrar()
{
var nombredelpais;
var canthabitantes;
var temperatura;
var seguir;

do{

    nombredelpais = prompt("Ingrese el nombre de un pais : ");

    canthabitantes = parseInt(prompt("ingrese cantidad de habitates en millones entre 1 a 7000"));
    while(canthabitantes < 1 || canthabitantes > 7000 || isNaN(canthabitantes)){
        canthabitantes = parseInt(prompt("error.. ingrese cantidad de habitates en millones entre 1 a 7000"));
        

    }











seguir = prompt("quiere seguir ingrese si o no :");

}while(seguir == "si")






}
