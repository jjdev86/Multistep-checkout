const models = require('../models/users');

module.exports = {
  formOne: {
    post: (req, res) => {
      // will need to connect to the models f1 method
      console.log(req.body, `THIS IS THE REQUREST FROM THE CLIENT`);
      res.end('form data was submitted');

    }
  },

  formTwo: {
    post: (req, res) => {
      // will need to connect to the models f2 method
      res.end('form2 endpoint was reached');
    }
  },
  formThree: {
    post: (req, res) => {
      // will need to connecto the models f2 method
      res.end('form3 endpoint was reached');
    }
  },
  sum: {
    get: (req, res) => {
      // gets summary of all data stored in the user's record
      res.end('summary endpoint was reached');
    }
  }
}