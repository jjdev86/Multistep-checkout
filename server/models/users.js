const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');
// connects to database
mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

const Schema = mongoose.Schema;
// creates the Schema for the database
const userSchema = new Schema({
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

const User = mongoose.model('user', userSchema);

module.exports = User;