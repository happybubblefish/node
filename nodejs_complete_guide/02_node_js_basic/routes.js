const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write(`<body>
                        <form action="/message" method="POST">
                        <input type="text" name="message" />
                        <button type="submit">Submit</button>
                        </form>
                    </body>`)
        res.write('</html>') //name attribute in input will be the key of key-value pair in request body
        return res.end()
    }

    if(url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        //add return before event listener so that it would wait for callback get executed
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]

            fs.writeFile('message.txt', message, () => {
                res.writeHead(302, { 'Location': '/' }) //redirect
                return res.end()
            })
        })
    }

    //since there is return before event listener on the above code, this part will not get executed
    res.write('Hello world!')
    res.end()
}

module.exports = requestHandler