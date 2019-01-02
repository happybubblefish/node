const path = require('path')
const express = require('express')

const rootDir = require('../utils/path')
const adminData = require('./admin')

const router = express.Router()

//use handles any incoming HTTP request. Even for the requests that are not declared in the routes
//get/post only handle the registered route
router.get('/', (req, res, next) => {
    // console.log('In the second middleware')
    // console.log(req.path, req.url, req.baseUrl, req.originalUrl)
    // res.send('<h1>Home page</h1>')

    //__dirname is a global variable to give the absolute path of this file
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))

    //use pug template engine
    const products = adminData.products
    res.render('shop', { 
        products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
})

module.exports = router