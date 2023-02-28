const users = [ {id: 1, name: 'Babul', job: 'itc'} ]
// console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'leader'},
        {id: 2, name: 'Abul', job: 'leader'}
    ]
}
const firstJob = data. data[0].job;
// console.log();

const user = {
    id: 500,
    name: 'johan',
    address: {
        street: {
            first:'kocukhet',
            second: 'poliahjg',
            side: 'right cornar'
        },
        postoffice: 'cormitola',
        city: 'Dahaka'
    }
};

const userFloor = user.address.street?.second;
console.log(userFloor);