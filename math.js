var productPrice1 = 12;
var productPrice2 = 77;
var sum = productPrice1 + productPrice2 ;
var  multiy = productPrice2 * productPrice2;
var substration = productPrice1 - productPrice2;
var divietion = productPrice2 / productPrice1;
var modulus = productPrice2 % productPrice1;

console.log(sum);
console.log(multiy);
console.log(substration);
console.log(divietion);
console.log(modulus);

console.log(Math.round(divietion));

console.log(Math.abs(substration));
 
var number = 9 ;
 var randomValu = Math.random(number)
 var result = randomValu*100;
console.log(Math.round(result));

console.log(Math.sqrt(144));

//  Math.pow(x: number, y: number) X The base value Y— The exponent value  (x =6 to the power Y =2)
var x = 6;
var y = 2 ;
console.log(Math.pow(x,y));

            // valu ++ & --

var age = 21;
age = age +1;
age += 1;
 age++;
 console.log(age);
var valu = 101
valu = valu -1;
valu -= 1
valu--;

console.log(valu);


// floot  & intsar valu
// parseInt String convert to number
var number2 = '6776';
var res =parseFloat(number2)
console.log(typeof(res)); 

var number1 = 233.66
var int = parseInt(number1);
console.log(int);
var number3 = 2455.667;
 var newSum = number3 + number1 ;
 console.log(newSum.toFixed(2));