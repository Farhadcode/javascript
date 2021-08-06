// inch to feet function

// var inches = 132 ;
// var feet = inches / 12;
// console.log(feet);

function inchToFeet(inche){
   var feet = inche / 12;
   return feet ;
}
var result = inchToFeet(240);
console.log(result);

// miles to kilometer 
function mileToKilometer(miles){
   var km = miles * 1.60934;
   return km;
}
var totalKm = mileToKilometer(26.2);
console.log('marathon in km:' ,totalKm);