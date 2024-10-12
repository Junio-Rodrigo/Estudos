document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('title')
    const status = document.querySelector('.stats')
    const backButton = document.querySelector('.back')
    const png = document.querySelector('img')
    const habilidades = document.querySelector('.abilities')
    const name = document.querySelector('.pokemon')
    const infos = document.querySelector('.pokemonInformations')
    const API = 'https://pokeapi.co/api/v2/pokemon/'
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonName = urlParams.get('name')
    let nome = pokemonName
    backButton.onclick = e => window.location.href = './index.html'
    title.innerHTML = nome[0].toUpperCase() + nome.slice(1)
    fetch(API + pokemonName)
        .then(resp => resp.json())
        .then(obj => {
            name.innerHTML = obj.name + `#${obj.id}`
            obj.types.forEach( type => {
                infos.innerHTML += `<div class="typePokemon ${type.type.name}">${type.type.name}</div>`
            })
            obj.stats.forEach( stat => {
                status.innerHTML += `<div class="atrr"> <div>${stat.stat.name}</div> <div>${stat.base_stat}</div> </div>`
            })
            obj.abilities.forEach( e => {
                habilidades.innerHTML += `<div class="ability">${e.ability.name}</div>`
            })
            png.src = obj.sprites.other["official-artwork"].front_default
        })
})