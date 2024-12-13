function NumberPattern01(row) {
    let num = 1;

    for (let i = 0; i < row; i++) {
        let rowStr = ""; // String to store each row of numbers
        for (let j = 0; j <= i; j++) {
            rowStr += num + " "; // Append numbers with space in between
            num++;
        }
        console.log(rowStr); // Print the entire row at once
    }
}

NumberPattern01(5);


//  function NumberPattern01(row){
//     let num = 1;

//     for(let i =0 ; i< row ; i++){
//         for(let j = 0 ; j<=i ; j++){
//             console.log(num);
//             num++;
//         }
//         console.log(`/n`);
//     }
//  }


//  NumberPattern01(5)