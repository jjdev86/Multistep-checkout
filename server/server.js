const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const users = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

const configFolder = require('../config/keys');

mongoose.connect(configFolder.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

// Use Routes
app.use('users', users);

const port = process.env.PORT || 4000; // process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;