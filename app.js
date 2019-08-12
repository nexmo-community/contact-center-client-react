// app.js
const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.get('/api/jwt/:user', (req, res) => {
  const { SERVER_URL, SERVER_KEY } = process.env;

  axios.post(`${SERVER_URL}/api/jwt`, {
    mobile_api_key: SERVER_KEY,
    user_name: req.params.user
  })
  .then(function (jwtResponse) {
    res.json(jwtResponse.data)
  })
  .catch(console.error);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));