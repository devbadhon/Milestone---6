const numbers = [12, 23, 43, 56, 25];

//একটা array উপরে প্রত্যেকটা এলিমেন্ট কে loop করে আমরা কিছু একটা পাইতে পারি
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can't use with object
const bottle = {color: 'yellow',price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/*
 3 ways to read object properties 
 bottle.color
 bottle['color]
 bottle[key]
 */
// আর for of মারবা কোন একটা Array উপরে for loop চালাতে চাও
for(const key of keys){
    // console.log(key,bottle[key]);
}

// for in loop
// কোন একটা Object এর উপর যদি loop চালাতে চাও তাহলে for in loop use করতে হবে
for( const key in bottle){
    const value = bottle[key];
    // console.log(key,bottle[key]);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}