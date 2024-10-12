const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded( { extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))

const multer = require('multer') // Importando o multer

const storage = multer.diskStorage({       // Configurar a pasta que você salvar o arquivo 
    destination: function(req, file, callback) {
        callback(null, './upload')
    },

    filename: function (req, file, callback) { // Escolha do nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') // A constante upload vai receber um arquivo com o nome arquivo como requisição 

app.post('/upload', (req, res) => { // Se fazer uma requisição do tipo post este middleware irá verificar se há algum erro ao fazer o dowload do arquivo
    upload( req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Fazendo dowload...')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
            ...req.body,
            id: 1
    })
})

app.listen(8081, () => console.log('Executando...'))