function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

/*
 1. get the element where you want to add the new elements
 2. create child element
 3. set innerText or innerHTML
 4. appendChild
 */
function displayPost(data) {
    const postsContainer = document.getElementById('post-conatiner');
    for (const post of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv)
    }
}

loadPosts();


