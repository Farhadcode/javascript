function recursion(n){
    if(n == 1){
        return 1;
    }
    return n* recursion(n-1);
}
const getRecursion = recursion(7);
console.log(getRecursion);