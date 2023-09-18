function isPasswordStrong(pass){
    if (pass.length < 7 ){
        return `weak`;
    }
    return `strong`;
}

function ternaryIsStrong(pass){
    return pass.length < 7 ? `weak` : `strong` ;
}

function logicIsStrong(pass){
    const strong = true;
    if (pass.length > 7 && strong) {
        return `Strong`;
    }
    return `weak;`
}

function advancedPassword(pass){
 
    if (pass.length < 7) 
        return `Weak`;

    else if (pass.length == 7 )
        return `Strong`;

    else if (pass.length > 7 &&  /[A-Z]/.test(pass)){
            return `Very Strong`;
        }
        // the regular expression link page : https://plainenglish.io/blog/javascript-check-if-string-contains-uppercase-letters-9a78b69739f6
}



        
     


