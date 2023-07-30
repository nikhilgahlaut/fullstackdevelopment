const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.get('/abc', (req, res) => {
    res.send('Hello abc!')
    })
app.listen(port, () => {
console.log(`Server up and listening on port ${port}`)
})

