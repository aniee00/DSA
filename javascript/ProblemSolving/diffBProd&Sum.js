// difference between product and sum of n


function diffSumProd(n) {
    let sum = 0
    let mul = 1
    while (n > 0) {
        let lastdigit = n % 10
        sum = sum + lastdigit
        mul = mul * lastdigit
        n = Math.floor(n / 10)
    }


    let diff  =  mul - sum ;

    console.log(diff)
    return diff;
}


diffSumProd(26564)