console.log('helllo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) //cors used in order any host or client to acces it. it's a security risk to have it enabled. Have to be extra careful on Security

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)
