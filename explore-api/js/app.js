function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}




//=======================[ same ]=========================


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(userData => displayUsers(userData))
}

function displayUsers(userData) {
    console.log(userData);
}