document.getElementById('apply-bg').addEventListener('click',function(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'lightblue';
}
})

document.getElementById('center-third').addEventListener('click',function(){
const third = document.getElementById('third-friend');
third.style.textAlign = 'center';
})

document.getElementById('add-new').addEventListener('click',function(){
const friendContainer = document.getElementById('friendsId');

const friend = document.createElement('div');

//যে HTML tag আমরা  creat করেছিলাম তার মধ্যে আগের tag এর মতো backgroundcolour  পাওয়ার জন্য same Class creat করে দিয়েছি
friend.classList.add('friend');

friend.innerHTML = `
<h3 class="friend-name">New Friend</h3>
<p> something new added </p>
`
friendContainer.appendChild(friend);
})