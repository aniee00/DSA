const num = 154521;
const IsPalindrom = (num) => {
    const origiinalnum = num
	let reversenum = 0;
	while(num>0){
		const lastdigit = num%10;
		reversenum = reversenum*10 + lastdigit
		num = Math.floor( num/10 )
	}
    if(reversenum == origiinalnum){
        console.log(`plaindrom number`)
    }else {
        console.log(` not a plaindrom number`)
    } 
}

IsPalindrom(num)
