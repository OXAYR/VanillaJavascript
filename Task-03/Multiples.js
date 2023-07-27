const prompt = require('prompt-sync')();

function main(){
    const input = prompt("Enter the number please! ")
    const sum = checkForTheMultiple(input);
    console.log("The sum of the multiples from the number "+ input + " are "+ sum);
    
}

function checkForTheMultiple(n){
    let arr = [];
    var x = 0
    if(n>0){
        for(let i=3 ;i<n ; i++){
            if((i%3 == 0) || (i% 5 == 0)){
                x+=i;
            }
            else{
                continue;
            }
        }
        return x;
    }
    else{
        return 0
    }

}

main();