const url = ' https://pokeapi.co/api/v2/pokemon/3/'

fetch(url)
.then(response => response.json())
.then(data => {

    const element = document.getElementById("element")
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}'/>`
    console.log(data)
})
.catch(err=>console.log(err))