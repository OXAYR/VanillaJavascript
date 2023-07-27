function main(){
    const prompt = require("prompt-sync")();
    const size = prompt("Enter the size of the array: ")
   var arry = []
   arry = takeIn(size);
    console.log(highLow(arry));
}
function takeIn(size){
    const prompt = require("prompt-sync")();
    var input = 0;
    var a = [];
    for(let i=0 ;i<size ; i++){
        //  input = prompt("Enter the element " + (i+1) + ": ");
        //  a[i] = input;
        a[i]=prompt("Enter the element " + (i+1) + ": ");
    }
    return a;
}
function highLow(ary) {
    
    var highest = Math.max(...ary);
    var lowest = Math.min(...ary);
    var str = { highest , lowest};
    return highest,lowest;
}
main();