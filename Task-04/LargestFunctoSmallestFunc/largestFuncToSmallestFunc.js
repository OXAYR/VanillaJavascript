


function main(){
    compare(f(),g());
}
let f = () =>{
    return 40
}

let g = () =>{
    return 25
}


function compare(func1,func2){ 
    if(func1 > func2){
        console.log("f")
    }
    else if(func2 > func1){
        console.log("g")
    }
    else{
        console.log("neither")
    }
}
main()