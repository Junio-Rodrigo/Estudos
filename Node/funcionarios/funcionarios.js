const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then( e => {
    const funcionarios = e.data
    const mulheres = funcionarios.filter( funcionario => {
        return funcionario.genero == 'F'
    })
    const chinesas = mulheres.filter( mulher => {
        return mulher.pais == 'China'
    })
    const chinesaMaisPobre = chinesas.reduce( (a, chinesa) => {
        return a.salario < chinesa.salario ? a : chinesa
})
    console.log(chinesaMaisPobre)
})