
function introdueixPlats(){
var bitllets = [500, 200, 100, 50, 20, 10, 5];
var totalMenjar;
var menu = [1, 2, 3, 4, 5];
     


    var plat1 = document.getElementById("plat1").value;
    var plat2 = document.getElementById("plat2").value;
    var plat3 = document.getElementById("plat3").value;
    var plat4 = document.getElementById("plat4").value;
    var plat5 = document.getElementById("plat5").value;

    var nomPlat = [plat1, plat2, plat3, plat4, plat5];
        
    var preu1 = parseFloat(document.getElementById("preu1").value);
    var preu2 = parseFloat(document.getElementById("preu2").value);
    var preu3 = parseFloat(document.getElementById("preu3").value);
    var preu4 = parseFloat(document.getElementById("preu4").value);
    var preu5 = parseFloat(document.getElementById("preu5").value);

    var preuPlat = [preu1, preu2, preu3, preu4, preu5];

           
    document.getElementById("primer").innerHTML= "El numero d'aquest plat es el: " + menu[0]+" .    "+ nomPlat[0] + ", el preu es de "+preuPlat[0] +" €/plat";
    document.getElementById("segon").innerHTML= "El numero d'aquest plat es el: " + menu[1]+" .    "+ nomPlat[1] + ", el preu es de "+  preuPlat[1] +" €/plat";
    document.getElementById("tercer").innerHTML= "El numero d'aquest plat es el: " + menu[2]+" .    "+ nomPlat[2] + ", el preu es de "+preuPlat[2] +" €/plat";
    document.getElementById("cuart").innerHTML= "El numero d'aquest plat es el: " + menu[3]+" .    "+ nomPlat[3] +", el preu es de "+preuPlat[3] +" €/plat";
    document.getElementById("cinque").innerHTML= "El numero d'aquest plat es el: " + menu[4]+" .    "+ nomPlat[4] +", el preu es de "+preuPlat[4] +" €/plat";

    var quantsPlats = parseInt(document.getElementById("seleccio").value);
    if(quantsPlats == ""){
        
    }
    var seleccioClient = [];
    var sortida = 0;
    while(quantsPlats != sortida){
        seleccioPlat = prompt("Intodueix el numero del plat escollit:");
        seleccioClient.push(seleccioPlat);
        sortida++
    }
    document.getElementById("seleccioText").innerHTML += "Has seleccionat el plat: "+ seleccioClient;

    for(i=0; i<quantsPlats; i++){
        switch(seleccioClient[i]){
            case "1": 
                document.getElementById("comanda").innerHTML+= "Has demanat " + plat1 + " El preu es de " + preu1 + "€";
                totalMenjar+=preu1
                break;
            case "2": 
                document.getElementById("comanda").innerHTML+= "Has demanat " + plat2 + " El preu es de " + preu2 + "€";
                totalMenjar+=preu2
                break;    
            case "3": 
                document.getElementById("comanda").innerHTML+= "Has demanat " + plat3 + " El preu es de " + preu3 + "€";
                totalMenjar+=preu3
                break;    
            case "4": 
                document.getElementById("comanda").innerHTML+= "Has demanat " + plat4 + " El preu es de " + preu4 + "€";
                totalMenjar+=preu4
                break;
            case "5": 
                document.getElementById("comanda").innerHTML+= "Has demanat " + plat5 + " El preu es de " + preu5 + "€";
                totalMenjar+=preu5;
                break;
            default:
                document.getElementById("comanda").innerHTML+= "Aquest producte que has demanat no existeix";
                break;
        }
    }

    document.getElementById("totalComanda").innerHTML = "El import total a pagar es: " + totalMenjar;
    
} 

