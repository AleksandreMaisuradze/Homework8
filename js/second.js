//2

function createCards(fullName, image) {
    let div = document.createElement('div');
    div.classList.add('users')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    h2.textContent = fullName
    img.src = image
    div.appendChild(h2)
    div.appendChild(img)

    document.querySelector('.users_list').appendChild(div)

}

let link = new XMLHttpRequest()
link.open('GET', 'https://reqres.in/api/users')
link.send()
link.addEventListener('load', (event) => {

    let eventArray = JSON.parse(event.target.response)
    eventArray.data.forEach((users) => {
        console.log(users);
        createCards(users.first_name + ' ' + users.last_name, users.avatar)
    });
})