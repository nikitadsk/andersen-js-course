/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Book = require('./models/book');
const CONST = require('../consts');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  Book.find({}, (err, users) => {
    if (err) return console.log(err);
    return res.send(users);
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);
  const message = book.save();
  return res.json({ message });
});

mongoose.connect(CONST.CONNECTION_STRING, { useNewUrlParser: true }, error => {
  if (error) return console.log(error);
  app.listen(CONST.SERVER_PORT, () => console.log(`Сервер запущен на порту ${CONST.SERVER_PORT}`));
});
