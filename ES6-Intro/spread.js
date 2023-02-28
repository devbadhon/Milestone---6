const max = Math.max(16, 65, 323, 453, 986, 23, 1000);
const numbers = [16, 65, 323, 453, 986, 23, 1000];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(2000);
numbers2.push(7000);
// console.log(numbers);
// console.log(numbers2);



// case 1:
const a = ['MD','Badhon','Sharker'];

// console.log(a);
// result:- [ 'MD', 'Badhon', 'Sharker' ]

// case 2:
// console.log(...a);
// result:- [ MD Badhon Sharker ]







const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const maxNumber = Math.max(...arr);
// console.log(maxNumber);
// console.log(...arr);





const numbers3 = [2, 4, 5];
const allNumbers = [1, 2, ...numbers3, 6, 7];
console.log(allNumbers);