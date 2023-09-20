const book1 = {
    name: 'deep water',
    author: 'kim lee',
    year: 2018
}
const book2 = {
    name: 'The dream',
    author: 'Joseph pear',
    year: 2020
}

const bookUtils = {
    getFirstPublished: function(firstBook,secondBook){
        return firstBook.year < secondBook.year ? book1:book2;
    },

    setNewEdition: function(anyBook, ediYear){
        if (anyBook.hasOwnProperty("latestEdition")){
            // override the old value if property exists /or add the new property if it doesn't exist 
            anyBook.latestEdition = ediYear;
        }
        else{
            //add the new property to the object 
            anyBook.latestEdition = ediYear;
        }
    },

    setLanguage: function(anyBook, lang){
        anyBook.hasOwnProperty("language")? anyBook.language = lang : anyBook.language = lang;
    },

    setTranslation: function(book1, lang, trans){
           //add or modify properties
        book1.translation = {
            language: lang,
            translator: trans
        };
    },
    setPublisher: function(anyBook, name,location){
        anyBook.publisher = {
            name: name,
            location: location
        }
    },

    isSamePublisher: function(firstBook, secondBook){
        if (firstBook.publisher.name === secondBook.publisher.name && firstBook.publisher.location === secondBook.publisher.location)
            return true;
        return false;        
    }    
}


