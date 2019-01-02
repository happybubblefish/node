const path = require('path')
const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

const products = []

router.post('/product', (req, res, next) => {
    // console.log(req.body)
    products.push({ title: req.body.title })
    res.redirect('/')
})

router.get('/add-product', (req, res, next) => {
    console.log('In the first middleware')
    
    //req.baseUrl = the first parameter of use()
    //req.url = req.path which the part after req.baseUrl
    //req.originalUrl = req.baseUrl + req.path
    console.log(req.path, req.url, req.baseUrl, req.originalUrl)
    // next()

    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'})
})

module.exports = {
    router,
    products
}