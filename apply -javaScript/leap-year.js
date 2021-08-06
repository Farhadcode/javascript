function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {
        return true;
    }
    else{
        return false;
    }
}
const myYear = 1800;
const leapYear = isLeapYear(myYear);
console.log('this is leap year, yes',leapYear);