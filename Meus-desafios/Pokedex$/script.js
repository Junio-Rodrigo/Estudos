document.addEventListener('DOMContentLoaded', () => {
    const API = 'https://pokeapi.co/api/v2/pokemon/'
    const buttonSearch = document.querySelector('.searchButton')
    const input = document.querySelector('.searchInput')
    const pokemonsDiv = document.querySelector('.pokemons')
    const buttonMoreView = document.querySelector('.viewMore')
    const favorites = document.querySelector('.favorites')
    const title = document.querySelector('.titleFavorite')
    let currentOffset = 0

    function mountPokemonsCards(poke, favoritado = false) {

        // Esta função irá montar os cards e o sistema de favoritar os cards dos pokemons.

        //pokemonDiv
        const pokemonDiv = document.createElement('div')
        pokemonDiv.className = 'pokemonDiv'

        //imagem do pokemon
        const img = document.createElement('img')
        img.src = poke.sprites.front_default

        // As infos
        const informations = document.createElement('div')
        informations.className = 'informations'

        //Link para a página do pokemon
        const link = document.createElement('a')
        link.href = `pokemon.html?name=${poke.name}`

        //Nome do pokemon
        const name = document.createElement('h1')
        name.className = 'name'
        name.innerHTML = poke.name


        // Favoritar
        const favorite = document.createElement('button')
        favorite.className = 'favorite'

        // Aninhar os elementos
        pokemonsDiv.appendChild(pokemonDiv)
        pokemonDiv.appendChild(img)
        pokemonDiv.appendChild(informations)
        informations.appendChild(link)
        link.appendChild(name)
        pokemonDiv.appendChild(favorite)


        poke.types.forEach(type => {
            const typeDiv = document.createElement('div')
            typeDiv.className = `type ${type.type.name}`
            typeDiv.innerHTML = type.type.name
            informations.appendChild(typeDiv)
        })

        let click = 0
        const copyPokemon = pokemonDiv.cloneNode(true)

        favorite.onclick = e => {
            if (!click) {
                click++
                favorite.style.backgroundColor = 'gold'
                copyPokemon.childNodes[2].style.backgroundColor = 'gold'

                favorites.appendChild(copyPokemon)

                title.style.display = 'block'

                localStorage.setItem(poke.name, JSON.stringify(poke.name))
                copyPokemon.childNodes[2].onclick = e => {
                    favorites.removeChild(copyPokemon)
                    localStorage.removeItem(poke.name)

                    favorite.style.backgroundColor = 'white'
                    click--

                    if (!favorites.children.length) {
                        title.style.display = 'none'
                    }
                }

            } else {
                click--
                favorite.style.backgroundColor = 'white'
                favorites.removeChild(copyPokemon)
                localStorage.removeItem(poke.name)
                if (!favorites.children.length) {
                    title.style.display = 'none'
                }
            }
        }

        if (!favorites.children.length) {
            title.style.display = 'none'
        }


    }
    for (let i = 0; i < localStorage.length; i++) {
        fetch(API + JSON.parse(localStorage.getItem(localStorage.key(i))))
            .then(resp => resp.json())
            .then(poke => {
                mountPokemonsCards(poke, true)
            })
    }

    function searchPokemon() {

        // Esta função é para o funcionamento da barra de pesquisa da página principal

        fetch(API + input.value.replace(/\s+/g, '').toLowerCase())

            .then(resp => resp.json())
            .then(json => {
                if (!input.value.replace(/\s+/g, '') == '') {
                    window.location.href = `pokemon.html?name=${input.value.replace(/\s+/g, '').toLowerCase()}`
                }
            })
            .catch(e => alert('Este pokemon não existe!'))
    }


    async function Pokemons() {

        // Esta função vai pegar todos o pokemons da API e passar na função de montar os cards dos pokemons

        const pokemonsAll = await fetch(API + `?offset=${currentOffset}&limit=21`)
        const json = await pokemonsAll.json()

        const promises = json.results.map(async (poke) => {
            const pokemonAttr = await fetch(API + poke.name)
            const pokemon = await pokemonAttr.json()
            return pokemon
        })

        const pokemons = await Promise.all(promises)
        pokemons.sort((a, b) => a.order - b.order)
        pokemons.forEach(poke => {
            mountPokemonsCards(poke, true)
        })
        currentOffset += 21
    }

    buttonSearch.onclick = searchPokemon
    Pokemons()
    buttonMoreView.onclick = Pokemons
})