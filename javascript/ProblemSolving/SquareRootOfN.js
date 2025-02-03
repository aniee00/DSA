function Sqrt(n) {
    let ans;
    let i = 1;
    while (i * i <= n) {
        ans = i;
        i++;
    }

    return ans
 }


console.log(Sqrt(36))