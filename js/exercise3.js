function sumArray(arr, int){
    let res = [];
    
    let flag = false;

    let i = 0;
    while(i<arr.length){

        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == int){
                let x = arr.splice(i,1);
                let y = arr.splice(j-1, 1);

                res.push(x.concat(y));
                
                flag = true;
            }
        }

        if(arr.length == 1 && arr[0] != int) break;

        i = flag ? 0 : i+1;
    }

    return res;
}

console.log("EXERCISE 3");
console.log(sumArray([2,1,4,3], 5));
console.log(sumArray([1,8,10,3], 11));
console.log(sumArray([1,8,10,3,7,4, 5], 11));