//JS201
let a="#";
for(let i=1; i<6; i++){
    console.log(a.repeat(i));
}

//JS202
for(let i=1; i<101; i++){
    if(i%3==0){
        console.log("Fizz");
    }
    if(i%5==0){
        console.log("Buzz");
    }
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else console.log(i);
}

//JS203
for(let i=1; i<5; i++){
    console.log(" #".repeat(4));
    console.log("# ".repeat(4));
}
