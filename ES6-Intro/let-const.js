/* // Breakup with var
// no more use of var
// let: let it to 
// const: do not allow it to reassign


// let এর ক্ষেত্রে তুমি reassign করতে পারবে না

let money = 34;
money = 56;
console.log(money);

// const এর ক্ষেত্রে তুমি reassign করতে পারবে !

const bird = 'jan pakhi';
// bird = 'moya pakhi';
const massage = bird + 'potas potas';
console.log(massage);

// const এর ক্ষেত্রে তুমি reassign করতে পারবে না
// নতুন কোন মান এনে বসাতে পারবে না - কিন্তু তুমি চাইলে আগের মান Light modification করতে পারবে!

const number =  [23, 34, 34, 645, 45];
// reassign not allow on const
// number  =  [34, 34, 46, 556];
number.push(123);
number[4]
console.log(number);



// আবার আরেকটা জিনিস তুমি অবজেক্টের ক্ষেত্রে করতে পারো

const student = {
    name: 'mofiz',
    address: 'ranpur'
}
// student = {name: 'badhon'} // => If you do this, it becomes a riya sign, But you can't do it !
student.name = 'Badhon'; // => How you can do it if you want 
console.log(student); */


const numbers =  [23, 34, 34, 645, 45];
sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
    console.log(sum);
}