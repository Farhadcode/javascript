// if (condition) {
//     // block of code to be executed if the condition is true
// }

var isFoodReady = true;

if (isFoodReady == true){
    console.log("Yes baby . I will eat now");
}
// The else statement specifies a block of code to be executed if the condition is false:
var laptopPrice = 70000;
var myAmount = 65000;
if (laptopPrice < myAmount){
    console.log(" I will buy this");
}
else if(laptopPrice > myAmount){
    console.log("Dell i5 is the best");

}
else{
    console.log("sorry amount not enough");

}

// multiple conditions

var gotJob  = false;
var yourSavingMoney = 200000;
var house =true;
if((gotJob == true  && yourSavingMoney> 250000) || house == true){
  console.log("get marid");
}else{
    console.log("impossble !you not prefact for mary");
}


var youJob  = true;

var yourMoney = 200000;
if(youJob == true || yourMoney> 150000){
  console.log("get marid");
}else{
    console.log("No impossble.you not prefact for mary");
}


