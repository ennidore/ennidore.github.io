let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if(bodovi<50){
    ocjena=1;
} else if(bodovi>=50 && bodovi<60){
    ocjena=2;
} else if(bodovi>=60 && bodovi<70){
    ocjena=3;
} else if(bodovi>=70 && bodovi<80){
    ocjena=4;
} else ocjena=5;

if (ocjena != 1){
    poruka="Cestitam! Dobio si ocjenu " + ocjena;
}

console.log(poruka);