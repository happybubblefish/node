const http = require('http') //search for http global file
const routes = require('./routes')

const server = http.createServer(routes)

server.listen(3000, () => {
    console.log('Server is listening on 3000...')
})

