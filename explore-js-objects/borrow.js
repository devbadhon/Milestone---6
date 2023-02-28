const kodomAli = {
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
const result = kodomAli.exam();

const badam = {
    name: 'Kacha badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badam);
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badam, 400, 40);
// console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badam, [1000, 100]);
// console.log(badamMoney2);
const badamAliTreat = kodomAli.treatDey.bind(badam);
const remaining = badamAliTreat(1000, 100)
console.log(remaining);