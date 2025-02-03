const SelectionSort = (arr) => {
 
    const n = arr.length;
    for (let i = 0 ; i<n ; i++){
        let minIndex = i ;
        for(let j = i+1 ; j<n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex= j;

            }
        }

        if(minIndex !== i ){
    
            let temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}


let arr= [12 ,54,1,23,97,6,3,8,99,12,65]
let ans = SelectionSort(arr)
console.log(ans)