let  language = prompt(`enter a language`);

// normalize the input and convert to lowercase 
language = language.toLowerCase();

switch(language){
    case `mandarin`: console.log(`MOST number of native speakers!`);break;
    case `spanish`: console.log(`2nd place in a number of native speakers`); break;
    case `english`: console.log(`3rd place`);break;
    case `hindi`: console.log(`'Number 4`);break;
    case `arabic`: console.log(`5th most spoken language`);break;

    default: console.log(`Not in the top 5`); break;

}