function ReverseNum(num){
    let ReverseNumber  = 0 ;
    while(num > 0){
        let lastdigit = num%10;
        ReverseNumber =ReverseNumber*10 + lastdigit
       
        num= Math.floor(num/10)
    }
    console.log(ReverseNumber);
}


ReverseNum(54564)

