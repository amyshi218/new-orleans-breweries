const express = require('express')
const app = express()
const port = 3800

app.use(express.static('public'));

app.listen(process.env.port || port, () => {
  console.log(`Listening on port ${port}`)
})