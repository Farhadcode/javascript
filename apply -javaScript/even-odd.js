
function evenoOrOdd(number){
    let remainder = number % 2;
    if (remainder == 0) {
        console.log('this is even number',number);
    }
    else{
        console.log('this is odd number',number);
    }
   return remainder;
}
var givanNum = evenoOrOdd(8957650);
console.log(givanNum);