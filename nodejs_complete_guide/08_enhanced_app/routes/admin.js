const path = require('path')
const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminController.getAddProduct)
router.post('/product', v.postAddProduct)
router.get('/products')

module.exports = router