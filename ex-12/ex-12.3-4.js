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
    {
      id: 2,
      name: "Mike",
      subjects: ["history", "ethics", "Math"],
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

// this function returns all teacher that teaches a specific subject like (history ... ) 

function whoTeachSubject(subject) {
  const teacher = school.teachers.filter((sub) =>
    sub.subjects.includes(subject)
  );
  return teacher;
}

const res = whoTeachSubject("physics");
console.log(res);
