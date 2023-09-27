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

/*2. A method called “assignStudent” that takes two
    arguments, a student’s id and a subject. Assign all of the
    students to the first available teacher who teaches that
    subject and who is not in full capacity. If all of the teachers
    are in the full capacity log to the console “Sorry, no
    available teachers left”. */

function assignStudent(studentId, subject) {
  const subjectTeacher = school.teachers.filter((teacher) => {
    if (teacher.subjects.includes(subject) && teacher.capacityLeft) {
      teacher.students.push(
        school.students.find((student) => student.id === studentId)
      );
      teacher.capacityLeft--;
      return teacher;
    }
  });
  return subjectTeacher;
}

const res = assignStudent(12, "history");
console.log(res);
