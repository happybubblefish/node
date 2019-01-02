const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const errorPageController = require('./controllers/404')

//express is install locally
const app = express()

app.set('view engine', 'ejs')   //set all layout files' extensions to hbs except main-layout
//where to find the templates
app.set('views', 'views') 

app.use(bodyParser.urlencoded({ extended: false }))

//handle public folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/favicon.ico', (req, res) => res.status(204));

// app.use('/', (req, res, next) => {
//     console.log('Always on')
//     next()
// })

app.use('/admin', adminRouter)
app.use('/shop', shopRouter)

app.use(errorPageController.getErrorPage)

app.listen(3000)

