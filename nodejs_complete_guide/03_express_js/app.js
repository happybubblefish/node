const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

//express is install locally
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

//handle public folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/favicon.ico', (req, res) => res.status(204));

// app.use('/', (req, res, next) => {
//     console.log('Always on')
//     next()
// })

app.use('/admin', adminData.router)
app.use(shopRouter)

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>')

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)

