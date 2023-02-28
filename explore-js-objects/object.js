//create object using object literals
const player = {};
player.name = 'small Nirob';
player.specialty = 'batsman';
player.bat = function () {
    console.log('swing your bate');
}
// console.log(player);
// player.bat()

const student = {
    name: 'Badhon',
    job: 'maramri',
    ball: function () {
        console.log('throw the ball');
    },
    salary: 13498
}


// 2. object constructor
const person = new Object();
// console.log(person);


// 3. object create method
// const item = Object.create(null)
const atel = Object.create(student);
// console.log(atel.name);

// 4. class
class Person{
    name = 'babul';
    address = 'bangladesh';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(67);
// console.log(person1);

// 5. Function
function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 34);

console.log(tesla);