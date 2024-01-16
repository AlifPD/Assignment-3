function isArithmeticProgession(numbers){
    let coef = numbers[1]-numbers[0];
    for(let i=2; i<numbers.length; i++){
        if(coef != numbers[i]-numbers[i-1]) return false;
    }
    return true
}

console.log("EXERCISE 1");
console.log(isArithmeticProgession([1,2,3,4,5,6]));
console.log(isArithmeticProgession([2,4,6,12,24]));
console.log(isArithmeticProgession([2,4,6,8]));
console.log(isArithmeticProgession([2,6,18,54]));
console.log(isArithmeticProgession([1,2,3,4,7,9]));
