function arrSum(arr){
    let maxSum = Number.NEGATIVE_INFINITY;
    let temp = 0;

    let indexTemp = 0;
    let index = {
        start : 0,
        end : 0
    }

    for(let i=0; i<arr.length; i++){
        temp += arr[i];

        if(maxSum<temp){
            maxSum = temp;
            index.start = indexTemp;
            index.end = i;
        }

        if(temp < 0){
            temp = 0;
            indexTemp = i+1;
        }
    }

    arr.splice(0, index.start);
    arr.splice(index.end+1, arr.length-index.end)

    let res = [arr, maxSum]
    return res
}

console.log("EXERCISE 4");
console.log(arrSum([-2,-3,4,-1,-2,1,5,-3]));