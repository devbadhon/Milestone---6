// const first = {a: 2};
// const second = {a: 2};
// const third = second;

// if(first === second){
//     console.log('the are same');
// }
// else{
//     console.log('different');
// }

// Do not use this method to compare object or array
const first = {a: 2, b: 4, d: 8};
const second = {a: 2, c: 8, b: 4,};
const firstString = JSON.stringify(first);
const secondString  =JSON.stringify(second);
// console.log(firstString,secondString);

// if( firstString === secondString){
//     console.log('same')
// }
// else{
//     console.log('different')
// }

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] === second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }

}

const isSame = compareObject(first, second);
console.log(isSame);