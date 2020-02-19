//API REST
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')
const app = express() 

mongoose.connect('mongodb+srv://sonneto:sonneto@cluster0-3w7q1.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET Obter informação
//PUT Editar informação
//POST inserir informação
//DELETE excluir informação

//req.query = Acessar querry params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json())
app.use('./files',express.static(path.resolve(__dirname, '../', 'uploads')))
//use tem que ir dps do express
app.use(routes) 

app.listen(3333)