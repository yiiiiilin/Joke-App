const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/hello', (req, res) => {
  res.send('hello~')
})

app.listen(3000, () => {
  console.log('Server Running on Port 3000!')
})