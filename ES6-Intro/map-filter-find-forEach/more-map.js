/* --------{ Using Number }-------- */
const numbers = [12, 32, 66, 23,];
const half = numbers.map(n => n/2 )
const third = numbers.map(n => n/3 )
// console.log(half);
// console.log(third);


/* --------{ Using String }-------- */


// const friends = ['tom hanks','tom cruise','badhon','panda'];
// const firstLetter = friends.map((friend => friend[0]));
// console.log(firstLetter);


/* -----------------{name Length}----------------------- */


const friends = ['tom hanks','tom cruise','badhon','panda'];
const nameLength = friends.map(friend => friend.length);
// console.log(nameLength);

/* --------------{define object}--------------- */

const products = [
    {id: 1, name: 'Laptop', price: 875907},
    {id: 1, name: 'Iphone', price: 90000},
    {id: 1, name: 'Ipad', price: 60000},
    {id: 1, name: 'Apple', price: 30000}
];
//  const items = products.map(product => console.log(product.name));
const items = products.map( product => product.name );
const items2 = products.map( p => p.price);
console.log(items);
console.log(items2);