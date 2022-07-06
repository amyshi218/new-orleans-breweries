const express = require('express')
const app = express()
const port = process.env.PORT || 3800

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})