function main(){
     const prompt = require('prompt-sync')();
     const get = prompt("Enter the value: ");
    var s = sumVar(get);
    console.log(s);j
}

function sumVar(n){
   // console.log(n);
    let sum = 0;
    for(let i=1 ; i<=n ; i++){
      //  sum = sum + i;
        sum += i;
    }
    
     return sum
}
main()