function runningSum(arr){
    let pre = [];
    pre[0] = arr[0]
    for(let i = 1 ; i< arr.length ; i++){
        pre[i] = pre[i-1] + arr[i]
    }

    return pre;
}

let arr = [1, 2 , 3 , 4]

console.log(runningSum(arr))