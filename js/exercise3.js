function sumArray(arr, int){
    let res = [];

    // for(let i=0; i<arr.length-1; i++){
    //     for(let j = i+1; j<arr.length; j++){
    //         if(arr[i] + arr[j] == int){
    //             let x = arr.splice(i,1);
    //             let y = arr.splice(j-1, 1);
    //             res.push(x.concat(y));
    //         }
    //     }    
    // }

    arr.forEach((val, index) => {
        console.log(index, " ==> Outer Loop");
        for(let i=0; i<arr.length; i++){
            console.log(i," ==> Inner Loop");
            if(val+arr[i] == int){
                let x = arr.splice(index,1);
                let y = arr.splice(i-1, 1);
                console.log(x, "==> X")
                console.log(y, "==> Y");;
                res.push(x.concat(y));
            }
        }
        console.log(res, " ==> res");
        console.log(arr, " ==> arr");
    })

    return res;
}

console.log("EXERCISE 3");
console.log(sumArray([2,1,4,3], 5));
console.log(sumArray([1,8,10,3], 11));

// let test = [0,1,2,3,4,5,6,7,8,9];
// console.log(test.splice(2, 1));
// console.log(test.splice(5-1,1));
// console.log(test);