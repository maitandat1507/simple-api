var express = require('express')
var app = express()

app.listen(3000, () => {
  console.log('Running on port 3000')
})

app.get('/url', (req, res, next) => {
  res.json(['Matada', 'Tina', 'Brown', 'Cat', 'Niffler'])
})