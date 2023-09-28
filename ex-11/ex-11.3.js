const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

/********************************    Ex-11.3-1       ************************************** */

const getAllNames = function (arr) {
  const namesOnly = arr.map((obj) => obj.name);

  return namesOnly;
};

// const res = getAllNames(data);
// console.log(res);


/*******************************************     EX-11.3-2  ************************************ */
const bornBefore1990 = function(arr){
    const limitDate = new Date('1-1-1990');
    const filteredData = arr.filter((person) => {
        const birthDate = new Date(person.birthday)
        return birthDate < limitDate;
    })
    return filteredData;

}

const res = bornBefore1990(data);
console.log(res);


