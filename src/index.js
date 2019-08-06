const express = require('express')
const powrt = require('./config/port')

const movieRouter = require('./routers/movieRouter')

const app = express()
const port = powrt

app.use(express.json())
app.use(movieRouter)

app.get('/', (req, res) => {
    res.send('<h1>Ini Home Page</h1>')
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})