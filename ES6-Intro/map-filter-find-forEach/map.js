// const numbers = [2, 3, 4, 6, 7];
// const output = [];
// for(const number of numbers){
//     const double = numbers * 2;
//     output.push(double);
// }
// console.log(numbers);


// const numbers = [2, 3, 4, 6, 7];
// function getDoubles(numbers) {
//     const output = [];
//     for (const number of numbers) {
//         const double = number * 2;
//         output.push(double);
//     }
//     return output;
// }
// const result = getDoubles(numbers);
// console.log(result);


// ============================================

const numbers = [2, 3, 4, 6, 7];

/* function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

function doubleItOld(num) {
    return num * 2;
}

const result = getDoubles(numbers);
console.log(result);
 */




// ==================={same short version}==================

//প্রত্যেকটা উপাদানের জন্য যখন তুমি একটা এঁড়ে { const makeDouble = } তার ডান পাশে ম্যাপ লিখ (numbers.map) এবং তারপর একটা ফাংশন দিয়ে দাও { (doubleIt); } তাহলে সে ভিতরে ভিতরে কিছু কাজ করবে :- প্রত্যেকটা এঁড়ে এর প্রত্যেকটি উপাদান কে নিবে এবং প্রত্যেকটি উপাদানের জন্য যে ফাংশনটি দাও সেই ফাংশনটি চালাবে, চালাইলে যে রেজাল্ট হবে ওইটা সে  ভিতরে ভিতরে একটা এঁড়ে এর মধ্যে রাখবে, তারপর সবগুলোর অপারেশন হয়ে গেলে ওইটা সে আউটপুট হিসেবে রিটার্ন করে দিবে, ওইটা তুমি const makeDouble ভেরিয়েবল এর মধ্যে রাখতেছ !

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

/*
       purpose:
       1.get an array
       2.for every elements of the array do something
       3.store the result in an array
       4. return the result array
 */


