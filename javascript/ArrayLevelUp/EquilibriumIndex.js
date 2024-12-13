// given n array element count the no of equilibrium index 
// an index i is said to be a equilibrium index if 

// sum of all element before i === sum of all elements after i 

function Equilibrium(arr) {
    let n = arr.length
    let pre = [];
    pre[0] = arr[0]
    let ans = 0


    for (let i = 1; i < arr.length; i++) {
        pre[i] = pre[i - 1] + arr[i]
    }
    let totalsum = pre[n - 1]

    for (let i = 1; i < arr.length; i++) {
        let leftsum = i==0 ? 0 : pre[i - 1]
        let rightsum = totalsum- pre[i]
        if (leftsum === rightsum) {
            ans++;
        }
    }

    return ans;
}

let arr = [-2, 6, 3, 4]

console.log(Equilibrium(arr))