// 1. var let const
//  break up with var

const numbers = [12, 23, 42, 46];
let salary = 345;
salary = 343;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string
const elementHTML = `
<div>
     <h3> Name: </h3>
     <p> Address: </p>
     <p> Salary: ${calculateSalary(10000, 0, 0)}</p>
     <p> Others: ${numbers[2]} </p>
</div>
`

// 4. Arrow  function
const doubleIt = x => x * 2;
const calculateSalary2 = ( salary, tax, bonus) => salary - salary * tax + bonus;


// 5. spread 
const ages = [ 12, 23, 45, 56, 24];
const newAges = [...ages, 22,24,45,23];

// destructing
const {x, y}= {x: 23, y: 34, z: 45, name: 'badhon sharker', salary: 3435};