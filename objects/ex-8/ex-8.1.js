const book ={
    bookName: 'the wet desert',
    author: 'Jack',
    year: 2001,
    publishingYear: 2003
}


function getBookDetails(myBook) {
    return `The book \"${myBook.bookName}\" was written by ${myBook.author} in the year ${myBook.publishingYear}`;
}


console.log( getBookDetails(book));
;

