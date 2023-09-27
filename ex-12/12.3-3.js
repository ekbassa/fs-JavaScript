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


/*3. A method called “assignTeachersSubject” that takes two
        arguments, the teacher’s id, and a new subject. Assign the
        new subject to that particular teacher if that subject
        doesn’t exist in their array of subjects.
        */
    

function assignTeachersSubject(teacherId, subject){
        const findTeacher = school.teachers.find((teacher)=>{
            if (teacher.id === teacherId){
                return teacher.subjects.push(subject);
            }
        })
        return findTeacher;
    }

    
    const addingSub = assignTeachersSubject(2,'Math');
    console.log(addingSub);