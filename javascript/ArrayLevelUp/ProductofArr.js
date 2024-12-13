function ProdOfArrEI(arr){
    let n = arr.length
    let prod = []
    prod[0]= arr[0]
    let suffix = 1
    for(let i = 1; i< n ; i++){
        prod[i] = prod[i-1] * arr[i]
    }

    for(let i = n-1; i >= 0 ; i--){
        prod[i] = prod[i-1] * suffix
        suffix = suffix*arr[i]
    }

    prod[0] = suffix

    return prod
}

let arr = [1, 2 , 3 , 4]

console.log(ProdOfArrEI(arr))

