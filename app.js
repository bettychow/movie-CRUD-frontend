const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})