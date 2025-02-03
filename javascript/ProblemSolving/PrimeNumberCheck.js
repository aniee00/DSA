function PrimeNumber(n){
    let count = 0;
    for(let i=0 ;i*i <= n ; i++){
        if(n%i == 0 ){
            if(i !== n/i){
                count = count + 2
            }else{
                count = count + 1
            }
        }
    }


    if(count == 2){
        console.log("Prime")
    }else{
        console.log(" Not Prime ")
    }

}


PrimeNumber(7)
PrimeNumber(4)