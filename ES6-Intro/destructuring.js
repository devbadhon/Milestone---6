//কোন একটা অবজেক্ট এর প্রপার্টি গুলোকে তুমি ভেরিয়েবল হিসেবে ডিক্লেয়ার করতেছ যেই প্রপার্টি মধ্যে ওই প্রপার্টির মানর্টি আছে
const fish = {
    name: 'King Hilsa',
    address: 'dhaka',
    color: 'golden',
    phone: '3746538538756',
    price: 3244
}


// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {address, name, phonee} = {name: 'Badhon', address: 'Bangladrsh', phonee: '01335876285'}
// console.log(address);


const {phone} = fish;
// console.log(phone);









//===================== array destructuring ======================

const [first, another] = [44, 66, 67, 365];
// console.log(first,another);


const nayoks = ['badhon', 'sakib', 'kabola'];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames() {
    return ['alamin', 'sakibl'];
}
const [baba, ma] = getNames();
// console.log(baba, ma);


const y = x => x*x;
const z = y(5);
console.log(z);



