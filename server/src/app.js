const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets-router')
const launchesRouter = require('./routes/launches/launches-router')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'))

app.use(express.json())

// Dùng để phục vụ frontend tĩnh đã build
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
