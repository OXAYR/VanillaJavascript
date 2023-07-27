function main(){
    checkIsogram("leeer");
}

function checkIsogram (str){
    var notIso = false;
    let word = [] ;
    for(let i =0 ; i<str.length ; i++){
        if(word.length == 0)
            word.push(str[i]);
        else if(word.includes(str[i])){
            checkRepeatition(str,str[i],i)
            notIso = true;
            break;
        }
        else{
            word.push(str,str[i])
        }
    }
    if(notIso){
     console.log("Not an isogram")
     }
     else{
        console.log("Yes an isogram")
     }
     return notIso
}

function checkRepeatition(arr,n, index){
    var count = 1;
    var j = index;
    for(let i=0 ; i< arr.length ; i++){
        if(arr[i] == n){
            if(i!=j){
                count++
            }
            continue;
        }
    }
    checkConsecutive(arr,n,j,count);
}

function checkConsecutive(ar,num,index, val){
    var j = index;
    var count = 1;
    for(let i=0 ; i< ar.length ; i++){
        if(ar[i] == num){
            if(i!=j ){
                if(ar[i+1] != num)
                    count--
                else
                    count++;
            }
            continue;
        }
    }
    if(count < val){
        console.log("Not consecutive")
    }
    
    else if(count == val){
        console.log("consecutive")
    }
    console.log(count);
}
main()