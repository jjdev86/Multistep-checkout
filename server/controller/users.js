const User = require('../models/users');
const db = require('../models/users');
module.exports = {
  create: {
    post: (req, res) => {
      let { name } = req.body;
      let test = new db.User(req.body);

      test.save().then(user => res.json(user));
      // models.User.insert();//1
      // res.end('request came in')
    }
  },
  formOne: {
    post: (req, res) => {
      // will need to connect to the models f1 method
      console.log(req.body, `THIS IS THE REQUREST FROM THE CLIENT`);
      const id = req.body.id;

      db.User.findByIdAndUpdate(id, req.body, (err, user) => {
        if (err) {
          return res
            .status(500)
            .send({ error: 'uncesssful' });
        };
        res.send({ sucess: 'passed' });
      });
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