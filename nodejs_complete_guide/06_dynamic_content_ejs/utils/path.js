const path = require('path')

//process.mainModule.filename return the current file name
//this works on all OS and return the absolute path of file
module.exports = path.dirname(process.mainModule.filename)

