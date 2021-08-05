var i = 0;
while (i <10) {
    console.log(i);
    if (i ==5) {
        break;
    }
    i++;
}


for(var i= 0; i <= 20 ; i++){
    console.log(i);
    if(i >= 8){
        break;
    }
}

var num = [7 ,8,9,3,5,11,67,34,120,102];

for (var i =0 ; i< num.length; i++){
    var number = num[i];
    console.log(number);
    if(number >= 10){
        break;
    }
}

for (var i = 0; i< num.length; i++){
    var number =  num[i];
    if (number > 110) {
        continue
    }
    console.log(number);
}