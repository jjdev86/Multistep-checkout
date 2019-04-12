const express = require('express');

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

// Router
const users = require('./routes/users.js');

const app = express();

// Logging and parsin
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());



// moongodb connection keys
// const configFolder = require('../config/keys');

// mongoose.connect(configFolder.mongoURI, { useNewUrlParser: true });

// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connection.once('open', () => {
//   console.log('Connected to the database server.js');
// });

// Use Routes
app.use('/', users);

// serve the static files from the build folder to the client
app.use(express.static(`${__dirname}/../build`));

const port = process.env.PORT || 4000; // process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`));




module.exports = app;