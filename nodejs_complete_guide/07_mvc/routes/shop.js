const path = require('path')
const express = require('express')

const productsController = require('../controllers/products')

const router = express.Router()

//use handles any incoming HTTP request. Even for the requests that are not declared in the routes
//get/post only handle the registered route
router.get('/', productsController.getProducts)

module.exports = router