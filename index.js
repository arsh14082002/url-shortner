const express = require('express');
const ShortUniqueId = require('short-unique-id');
const { route } = require('./routes/url');
const { connectToMongoDB } = require('./connect');
const bodyParser = require('body-parser');

// const PORT = 8001;
app = express();

app.use(bodyParser.json());

connectToMongoDB('mongodb://localhost:27017/short-url').then(() =>
  console.log('MongoDB Connected'),
);

app.use('/url', route);

app.listen(3000, () => {
  console.log('Server Connected!!');
});
