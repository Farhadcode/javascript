/*
let factorial = 1;
for( let i = 1; i<=5; i++){

    factorial = factorial*i;

}
console.log(factorial);
*/

// function apply for loop useing

/*
function factorial(number){
    let fact = 1;
    for(let i = 1 ; i<= number; i++){
        fact = fact * i;
    }
    return fact ;
}

const totalFact = factorial(9);
console.log(totalFact);

//  function apply for while loop useing

function newFactorial(num){
    let facts = 1;
    let i = 1;
    while (i<= num) {
        facts = facts * i;
        i++;
    }
    return facts;
}
const factResult = newFactorial(20);
console.log(factResult);
*/

function getFactorial (number){
    let farctorial = 1 ;
    let i = number;
    while (i >= 1) {
        farctorial = farctorial* i;
        i--;
    }
    return farctorial ;
}

const factResult = getFactorial(6);
console.log(factResult);