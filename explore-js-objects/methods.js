const student = {
    name: 'Badhon sharker',
    money: 5678,
    study: 'Math',
    subjects: ['Physics','algebra','geometry'],
    exam: function () {
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return`${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

 const output = student.exam();
//  console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(906, 100);
// console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
// console.log(dolaRemaining);