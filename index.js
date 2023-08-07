const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const container = document.querySelector('.container')

btn.addEventListener('click', function (event)
{
    event.preventDefault()
    let postUser ={
        title: title.value,
        body: text.value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postUser),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'}
    })
    .then (responce=>responce.json())
    .then (
        postUser=>{console.log(postUser)
        const h4 = document.createElement('h4')
        h4.textContent = postUser.title
        container.append(h4)
        const p =document.createElement('p')
        p.textContent =postUser.body
        container.append(p)
    }
    )
    .catch (error=> console.log(error))
    
    title.value=''
    text.value=''    
})