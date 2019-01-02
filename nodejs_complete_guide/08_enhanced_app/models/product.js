const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/path')

const p = path.join(rootDir, 'data', 'products.json')

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            return callback([])
        } else {
            callback(JSON.parse(data))
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        getProductsFromFile(products => {
            products.push(this) //this points to current object if arrow function is used
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    //by passing callback to make sure the data get back before next step (method in controller) is executed
    static fetchAll(callback) {
        getProductsFromFile(callback)
    }
}