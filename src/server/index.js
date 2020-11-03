const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.listen(8080, () => {
  console.log('app listening on http://localhost:8080/');
});

app.post('/check-article', async (req, res) => {
  // TODO call nlp api to check article and return reuslt to client
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
  const key = process.env.API_KEY;
  const url = req.body.articleURL;

  const request = await axios.post(
    `${baseURL}?key=${key}&url=${url}&lang=auto`,
  );
  res.send(request.data);
});
