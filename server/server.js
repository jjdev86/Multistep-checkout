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

// Use Routes
app.use('/', users);

// serve the static files from the build folder to the client
app.use(express.static(`${__dirname}/../build`));

const port = process.env.PORT || 3000; // process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`));


module.exports = app;