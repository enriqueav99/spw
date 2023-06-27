const express = require('express')
const app = express()
const productosAPI = require('./rutas/productos')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

productosAPI(app)

var server = app.listen('8181', () => {
    console.log(`servidor escuchando en ${server.address().port}`)
})