// app.js
const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/jwt/:key/:user', (req, res) => {
  const { SERVER_URL, SERVER_KEY } = process.env;

  if (req.params.key !== SERVER_KEY) {
    res.sendStatus(403);
  }

  axios.post(`${SERVER_URL}/api/jwt`, {
    mobile_api_key: req.params.key,
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