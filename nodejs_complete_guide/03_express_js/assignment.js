const express = require('express')
const app = express()

// app.use((req, res, next) => {
//     console.log('First middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('Second middleware')
// })

app.use('/user', (req, res, next) => {
    console.log('First middleware')
    res.send('<h1>UserPage</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Second middleware')
    res.send('<h1>HomePage</h1>')
})

app.listen(3030)