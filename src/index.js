const express = require('express')
const powrt = require('./config/port')

const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')

const app = express()
const port = powrt

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})