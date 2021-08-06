/*
let factorial = 1;
for( let i = 1; i<=5; i++){

    factorial = factorial*i;

}
console.log(factorial);
*/

// function apply

function factorial(number){
    let fact = 1;
    for(let i = 1 ; i<= number; i++){
        fact = fact * i;
    }
    return fact ;
}

const totalFact = factorial(9);
console.log(totalFact);