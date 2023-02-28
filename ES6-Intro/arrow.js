// Interview question:- Difference between function declaration, function expression and arrow function


// function declaration
/* function add(first,second) {
    const total = first + second;
    return total;
} */


const number = 435;

// function expression

const add1 = function add1(first,second){
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first,second){
    const total = first + second;
    return total;
}

// all function akoi kaj korbe 
// no -1 short
function add3(first,second) {
    const total = first + second;
    return total;
}
// no -2 short
function add4(first,second){
    return first + second;
}
// no -3 short { function expression }
const add5 = function(first,second){
    return first + second;
}
// no -4 short { arrow function }
const add6 = (first,second) => first + second;

const resultt = add6(10, 20);
console.log();




// ================ Explore more Arrow function ===============

const add = ( first, second) => first + second;
const getFulName = (first,last) => first + ' ' + last;



// const multiply = (a, b) => a * b;
// const result = multiply(7, 8);
// console.log(result);



const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;


// no parameter arrow function
const getPie = () => 3.14;


// one parameter 
const doubleIt = (num) => num * 2;

//one parameter simple version
const fiveTimes = num => num * 5;


// multi line arrow function
// if you want to return something, use the return

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;

}