function main(){
    const prompt = require("prompt-sync")();
    const input = prompt("Enter the number ");
    console.log(highLow(input));
}

function highLow(string) {
    
    const numToStr = string.match(/-?\d+/g).map(Number)
    var highest = Math.max(...numToStr);
    var lowest = Math.min(...numToStr);
    var str = { highest , lowest};
    return str;
}

main();