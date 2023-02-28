const user = {id: 1, name: 'Badhon Sharker', job: 'actor' }
// Javascript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Badhon',
    address: {
        street: 'Doksinbag',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products:['laptop', 'mic', 'monitor', ' Keyboard'],
    revenue: 56767,
    inOpen: true,
    isNew: false
}


//জাভাস্ক্রিপ্টের কোন একটা {object} বা [array] & value কে JSON বা string এ কনভার্ট করতে চাও তাহলে JSON.stringify(); ব্যবহার করবে.
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON); 
//জাভাস্ক্রিপ্টের কোন একটা {object} বা [array] & value "String" ফরমেটে আছে তাকে JSON.parse(); করে তুমি নরমাল জাভাস্ক্রিপ্টে রূপান্তর করতে পারো
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);