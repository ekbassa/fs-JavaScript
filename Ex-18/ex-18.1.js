
/**************************************    All Elements   - Section 1   **************************** */
//                               Select all elements not using the querySelector method.

const allHeaders = document.getElementsByTagName('h1')
const allParagraphs = document.getElementsByTagName('p')
const allLinks = document.getElementsByTagName('a')
const allImages= document.getElementsByTagName('img')
const allDivs= document.getElementsByTagName('div')
const allInputs= document.getElementsByTagName('input')


console.log(allHeaders)
console.log(allParagraphs)
console.log(allLinks)
console.log(allImages)
console.log(allDivs)
console.log(allInputs)

/***************************************************              Section 2           *************************/
 //                                         Select all elements using querySelector method

  const allQueryHeaders = document.querySelectorAll('h1') ; {console.log(allQueryHeaders)}
  const allQueryLinks = document.querySelectorAll('a');       {console.log(allLinks)}
  const allQueryParagraphs = document.querySelectorAll('p'); {console.log(allQueryLinks)}
 const allQueryImages= document.querySelectorAll('img');     {console.log(allQueryImages)}
const allQueryDivs= document.querySelectorAll('div');       {console.log(allQueryDivs)}
 const allQueryInputs= document.querySelectorAll('input');   //{console.log(allQueryInputs)}

/*********************************************************************************************************************** */

/**************************               Section 3   **************** */
                

const allWebpageInputs = allQueryInputs.forEach((input)=>console.log(input));