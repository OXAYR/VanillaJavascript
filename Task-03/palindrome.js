function main(){
    checkPalindrome("111222111")
}

function checkPalindrome(arr){
    var mid = (arr.length)/2 + 0.5;
    console.log(mid);
    var last = arr.length - 1;
    var check = false;
    var count = 1;
    for(let i=0 ; i<mid; i++){
        if(arr[i] == arr[last--]){
            count+=1;
            if(count  == mid){
                check = true;
            }
        }
        else{
            check = false;
        }
    }

    if(check){
        console.log("Yes it is a palindrome")
    }
    else{
        console.log("No it is not a palindrome ")
    }

}
main();