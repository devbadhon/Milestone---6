const student = {
    name: 'Kolimuddin',
    age: 15,
    class: 'ten',
    marks: {
        math: 45,
        physic: 89,
        chemistry: 43,
        english: 67
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(chemistry);