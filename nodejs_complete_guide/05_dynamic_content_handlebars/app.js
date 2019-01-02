const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const expressHbs = require('express-handlebars')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

//express is install locally
const app = express()

app.engine('hbs', expressHbs({ 
    layoutsDir: 'views/layouts/', 
    defaultLayout: 'main-layout', 
    extname: 'hbs' //set extension of main-layout to hbs
}))
app.set('view engine', 'hbs')   //set all layout files' extensions to hbs except main-layout
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

app.use('/admin', adminData.router)
app.use(shopRouter)

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>')

    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

    res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(3000)

