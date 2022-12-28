const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors()) // permite a requisição na mesma máquina/domínio
app.use(express.json())

// conexão com DB
const conn = require("./db/conn")

conn()

// Rotas
const routes = require("./routes/router")

app.use('/api', routes)

app.listen(3000, function () {
    console.log('server on!')
})