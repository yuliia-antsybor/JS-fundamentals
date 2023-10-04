const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/vote', (req, res) => {
  res.json({ timestamp: new Date().getTime() })
})

app.listen(3200);