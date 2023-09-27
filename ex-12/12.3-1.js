const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 1,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id: 13,
        name: "Houston",
        age: 21,
      },
    ],
  };
  
  /*. A method called “findPerson” takes two arguments, a type
      (either a student or teacher), and an id. It will return a
       particular object of that person.
*/ 

  school.findPerson = (students, id) => {
    const obj = students.find((student) => {
      return student.id === id;
    });

    if (obj != undefined )
    return obj
return `The requested Person doesn't exist!`
  }

  const student = school.findPerson(school.students, 12);
  console.log(student);