const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()// app express
const port = process.env.PORT || 8888

console.log(process.env.PORT)

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!Test nodemon')
})

app.get('/abc', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})