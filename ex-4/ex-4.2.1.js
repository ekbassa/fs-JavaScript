const gradeNum = prompt('enter your grade, in number format from 0 .. 100');
    // check is the number is valid between 0 .. 100

    if (gradeNum >=0 && gradeNum <= 100){

        if (gradeNum >=0 && gradeNum <= 64){
           alert(`your grade is ${'f'.toUpperCase()}`);
        }

        if (gradeNum >=65 && gradeNum <= 69){
            alert(`your grade is ${'d'.toUpperCase()}`);
         }

         if (gradeNum >=70 && gradeNum <= 79){
            alert(`your grade is ${'c'.toUpperCase()}`);
         }

         if (gradeNum >=80 && gradeNum <= 89){
            alert(`your grade is ${'b'.toUpperCase()}`);
         }

         if (gradeNum >=90 && gradeNum <= 100){
            alert(`your grade is ${'f'.toUpperCase()}`);
         }

    }   