function arrSum(arr){
    let maxSum = Number.NEGATIVE_INFINITY;
    let temp = 0;

    let indexStart = 0;
    let indexEnd = 0;
    
    let tempStart = 0;

    for(let i=0; i<arr.length; i++){
        temp += arr[i];
        
        if(temp > maxSum){
            maxSum = temp;
            indexStart = tempStart;
            indexEnd = i;
        }

        if(temp < 0){
            temp = 0;
            tempStart = i+1;
        }
    }

    console.log(arr.slice(indexStart, indexEnd+1));
    console.log(maxSum);
    // return [arr.slice(indexStart, indexEnd+1), maxSum]
}

arrSum([-2,-3,4,-1,-2,1,5,-3])