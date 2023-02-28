// src:- 31-3 Function default parameter for not provided values

// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// const result = add(23, 24);
// console.log(result);


// function add(first, second) {
//     if (second === undefined) {
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }

// const result = add(23);
// console.log(result);



//যদি second এর মধ্যে কোন value থাকে তাহলে প্রথম value সাথে দ্বিতীয় value যোগ যোগ হয় আউটপুট দেখাবে <==> আর যদি দ্বিতীয়টার value সেট করা না থাকে তাহলে প্রথম value সাথে প্যারামিটার দেয়া দ্দ্বিতীয় Default value (যেকোনো সংখ্যা) যোগ হয়ে আউটপুট দেখাবে - মানে Default value শুধু শূন্য হলে প্যারামিটারে থাকা প্রথম ভেলুর আউটপুট দেখাবে ! 
// Default values ​​are placed on the right side of the parameter




/* function add(first, second  = 0) {
    const total = first + second;
    return total;
}
const result = add(10,3) //const result = add(10) 
console.log(result); */




function fullName(firstName,lastName = 'Sharker'){
    const name = firstName + ' ' + lastName;
    // return name;
}
const name = fullName('Badhon')
console.log(name);