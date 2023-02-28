const numbers = [12, 4, 45, 56, 23, 34, 27, 48, 4, 6, 10];


// 20 er caite boro number gulu ber korar jonno
const bigNums = numbers.filter(num => num > 20);
// console.log(bigNums);

// 10 er caite boro number gulu ber korar jonno
const tiny = numbers.filter(n => n < 10);
// console.log(tiny);

// numbers array theke Even number gulu ber korte caile
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

/* ====================================================================== */

// 1lak takar besi  kon product ace amak dekhao 
const products = [
    {id: 1, name: 'Laptop', price: 875907},
    {id: 1, name: 'Iphone', price: 900000},
    {id: 1, name: 'Ipad', price: 600000},
    {id: 1, name: 'Apple', price: 30000}
];

const expensive = products.filter(p => p.price > 100000);
console.log(expensive);

