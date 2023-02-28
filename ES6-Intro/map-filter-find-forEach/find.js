const numbers = [5, 15, 12, 4, 45, 56, 23, 34, 27, 48, 4, 6, 10];

//এখানে আমি 5 দিয়ে বিভাজ্য গুলোকে বের করতে চাই !
//শুধু প্রথমটা কে দেবে
const fives = numbers.find(num => num % 5 === 0);
// console.log(fives);
//সবগুলোই দেবে
const fiveAll = numbers.filter(num => num % 5 ===0);
// console.log(fiveAll);



//Show me the product below 40 thousand
const products = [
    {id: 1, name: 'Laptop', price: 875907},
    {id: 1, name: 'Iphone', price: 900000},
    {id: 1, name: 'Ipad', price: 600000},
    {id: 1, name: 'Apple', price: 30000}
];
const cheap = products.find(p => p.price < 40000);
console.log(cheap);