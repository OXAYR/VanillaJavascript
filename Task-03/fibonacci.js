function fibonacci(num) {
    if(num < 3) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2) + fibonacci(num - 3);
    }
}
function main(){
const prompt = require('prompt-sync')();
// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
}

// function fibonacci(num){
//     // var n1 = 0;
//     // var n2 = 1;
//     // var n3 = 2;
//     // var initialSum = n1 + n2 + n3;
//     var sum = [];
//     var val = 0;
//     let j = 0 ;
//     for(let i=0 ; i<=num ; i++){
//         val += sumval(i, i+1,i+2,val);
//     }
//     for(let i=0 ; i<=num ; i++){
//         console.log(sum[i]);
//     }
// }

// function sumval(val1,val2,val3 , a){
//     var sum = val1 + val2 + val3;
//     return sum;
// }

// fibonacci(5);
main();