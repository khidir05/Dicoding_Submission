'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/me', (req, res) => {
    res.send('dicoding_khidir05!\n')
})

/*
[ROUTE] '/me'
[Response] => dicoding_khidir05!\n .
*/

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
