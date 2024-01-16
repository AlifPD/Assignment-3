function threeStepsAB(text){
    return /(a...b|b...a)/.test(text);
}

console.log("EXERCISE 2");
console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));