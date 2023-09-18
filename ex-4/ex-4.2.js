const gradeLetter = prompt('enter your grade, in letter format');

// check is th letter is valid a, b, c ,d and f

if ((gradeLetter >='a'&& gradeLetter <='f') && (gradeLetter !=='e')) {
    if(gradeLetter === 'a'){
        gradeLetter.toUpperCase()
        console.log(`90 -100 is an \"${gradeLetter.toUpperCase()}`);
    }

    if(gradeLetter === 'b'){
        gradeLetter.toUpperCase()
        console.log(`80 -89 is an \"${gradeLetter.toUpperCase()}\"`);
    }

    if(gradeLetter === 'c'){
        gradeLetter.toUpperCase()
        console.log(`70 -79 is an \"${gradeLetter.toUpperCase()}\"`);
    }

    if(gradeLetter === 'd'){
        gradeLetter.toUpperCase()
        console.log(`65 -69 is an \"${gradeLetter.toUpperCase()}\"`);
    }

    if(gradeLetter === 'e'){
        gradeLetter.toUpperCase()
        console.log(`80-89 is an \"${gradeLetter.toUpperCase()}\"`);
    }

    if(gradeLetter === 'f'){
        gradeLetter.toUpperCase()
        console.log(`0 -64 is an \"${gradeLetter.toUpperCase()}\"`);
    }
   
}
else{
    alert('not valid');
}

 


