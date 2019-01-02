const path = require('path')
const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

//use handles any incoming HTTP request. Even for the requests that are not declared in the routes
//get/post only handle the registered route
router.get('/', shopController.getProducts)

router.get('/products')

router.get('/cart')

router.get('/checkout')

module.exports = router