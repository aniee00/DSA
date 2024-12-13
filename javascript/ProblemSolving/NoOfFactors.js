// n = 24  1 ,2,3,4,8,24 => 8
//n=36  =>8



function FactorCount(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            if (i !== num / i) {
                count = count + 2;
            } else {
                count = count + 1;
            }
        }
    }

    console.log(count)
}


FactorCount(24)
FactorCount(36)
FactorCount(56)
FactorCount(5)
FactorCount(1)
FactorCount(10)