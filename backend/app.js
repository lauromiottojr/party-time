const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors()) // permite a requisição na mesma máquina/domínio
app.use(express.json())

const conn = require("./db/conn")

conn()

app.listen(3000, function () {
    console.log('server on!')
})