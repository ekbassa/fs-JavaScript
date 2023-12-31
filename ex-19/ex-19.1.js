/*
    Front-end development:
Basics
JavaScript – functions
The following exercise contains the following subjects:
● functions
Instructions
Please make the following changes to the HTML file while
navigating the DOM.
Create a variable that holds the <li> element with the class
“start-here”. Use traverse methods to complete these tasks:
1. Change the text from “title 2” to “main title”
2. Add another subtitle with the text “subtitle 4”
3. Delete the last <li> element from the list.
4. Change the <title> element text to “Master Of The Dom”.
5. Change the text of the <p> element ot something else of
your
Note:
On the next page, you have the HTML code
*/

//1.   Change the text from “title 2” to “main title”
const liToChange = document.querySelector('.start-here');
liToChange.textContent = 'main-title';

//2.  Add another subtitle with the text “subtitle 4”
const locateUl = document.querySelectorAll('ul');
const li = document.createElement('li');
li.innerText = 'sub title 4';
locateUl[1].append(li);

//3.   Delete the last <li> element from the list.
const secondUl = document.querySelectorAll('ul')[1];
console.log(secondUl.length)
const lastLi = secondUl.querySelector('li:last-child');
secondUl.removeChild(lastLi);

//4.     Change the <title> element text to “Master Of The Dom”.
document.title = 'Master Of The Dom';

//5.         Change the text of the <p> element ot something else of your

const paragraph = document.querySelector('p');
paragraph.innerText = 'Best regards from The DOM!'