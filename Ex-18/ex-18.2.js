/*
    
        inside the script tag do the following:
        1. Change the h1 color to blue.
        2. Change the paragraph to 30 px
        3. Change the description to an inline-block
        4. Change the body to a background color of green
        5. Change the document title from “Modifying Elements” to
        something else.
*/

// 1.
const getH1Element = document.querySelector('h1');
getH1Element.style.color = 'blue';

//2.
const paragraph = document.querySelector('p');
paragraph.style.fontSize ='30px';

//3.
const description = document.getElementById('description');
description.style.display = 'inline-block'


//4.
const webpageBody = document.body;
webpageBody.style.backgroundColor = 'green';

//5.
const docTitle = document.title = 'Hello DOM'

