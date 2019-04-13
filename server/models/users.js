const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');
// connects to database
mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database inside models');
});

// const Schema = mongoose.Schema; // defines the mongoose schema
// creates the Schema for the database on every user instance
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  addresslineone: {
    type: String
  },
  addresslinetwo: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip_code: {
    type: Number
  },
  creditcard_number: {
    type: Number
  },
  expirationdate: {
    type: Number
  },
  cvv: {
    type: Number
  },
  billing_zipcode: {
    type: Number
  }

});

// to use the schema userSchema, we need to convert it into a Model we can work with
// model(modelName, schema)
const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  db
}