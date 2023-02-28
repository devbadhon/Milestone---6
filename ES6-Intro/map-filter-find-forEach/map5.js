const numbers = [2, 3, 4, 6, 7];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}
const doubleIt = num => num * 2;


const result = getDoubles(numbers);

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
