const express = require('express')
const powrt = require('./config/port')

const movieRouter = require('./routers/movieRouter')
const categoryRouter = require('./routers/categoryRouter')
const movcatRouter = require('./routers/movcatRouter')

const app = express()
const port = powrt

app.use(express.json())
app.use(movieRouter)
app.use(categoryRouter)
app.use(movcatRouter)

app.get('/', (req, res) => {
    res.send('<h1>Ini Home Page</h1>')
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})