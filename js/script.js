//1

function createCards(name, color) {
    let div = document.createElement('div')
    div.classList.add('cards')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')

    h2.textContent = name;
    p.textContent = color;
    div.appendChild(h2)
    div.appendChild(p)

    document.querySelector('.container').appendChild(div)


}

fetch('https://reqres.in/api/unknown')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((user) => {
            createCards(user.name, user.color)
        });
    })
