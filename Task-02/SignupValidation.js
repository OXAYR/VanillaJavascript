var number = ['1','2','3','4','5','6','7','8','9','0']
var specialChars = ['!','~','@','#','$','%','.','&','*','/']
var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function main(){
    validation("Uxayr1234", "Aads123098$", "uzairmaqsood451@gmail.com", "31122002")
}

function validation(username, password, email, dob){
    validateUsername(username);
    validatePassword(password);
    validateDOB(dob);
    validateEmail(email);
}

function validateUsername(username){
    let name = [];
        name = username;
   
    let validate = false;
    for(let i=0; i<username.length; i++)
        if(username[i] != " "){
            for(let i=0 ; i< username.length; i++){
                for(let j=0; j<10 ; j++){
                    if(username[i] == number[j] || username[i] == specialChars[j] )
                        validate = true
                }
            }
            if(!validate){
                console.log("Invalid Username");
            }
        }
        else{
            console.log("!!!!Remove spaces!!!!!!");
        }
    
    return validate;

}
function validatePassword(password){
    let validatepassword = false;

    if(password.length >= 8){
        for(let i=0 ; i< password.length; i++){
            for(let j=0; j<10 ; j++){
                if(password[0] == password[0].toUpperCase() && password[i] == specialChars[j] )
                    validatepassword = true;
            }
        }
        if(!validatepassword){
            console.log("Invlid Password");
        }
    }
    else{
        console.log("Add some more digits as the length of the password is less than 8")
    }
    return validatePassword;
}

function validateDOB(dob){
    const date = new Date();
    var year = dob.slice(4,dob.length);
    var age = (date.getFullYear()) - year;
    var validateDob = false;
    var day = dob.slice(0,2);
    var month = dob.slice(2,4);
    if(age >18){ 
        if( !dob.isNan && (day < 32 && day > 0) && (month < 13 && month > 0) && (year < date.getFullYear()) ){
            validateDob = true;
        }
        else{
            console.log("Invalid value")
        }
    }
    else{
        console.log("Age is less than 18")
    }
    return validateDob;
}

    function validateEmail(email){
       var validEmail = false;
        if(emailReg.test(email))
            validEmail = true;
        else{
            console.log("Invalid Email")
        }

        return validateEmail;
    }


main();

