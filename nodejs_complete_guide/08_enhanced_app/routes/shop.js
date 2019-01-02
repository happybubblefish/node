const path = require('path')
const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

//use handles any incoming HTTP request. Even for the requests that are not declared in the routes
//get/post only handle the registered route
router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)

module.exports = router