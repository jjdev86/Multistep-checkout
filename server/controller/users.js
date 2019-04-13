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
          res.send(err);
        }
        res.send({ sucess: 'user data was updated sucessfully' });
      });
    }
  },

  formTwo: {
    post: (req, res) => {
      // will need to connect to the models f2 method
      const id = req.body.id;
      console.log(req.body, `FROM FORM TWO`);
      db.User.findByIdAndUpdate(id, req.body, (err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ sucess: 'user data was updated sucessfully' });
        }
      });
    }
  },
  formThree: {
    post: (req, res) => {
      // will need to connecto the models f2 method
      const id = req.body.id;
      db.User.findByIdAndUpdate(id, req.body, (err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ sucess: 'user data was updated sucessfully' });
        }
      });
    }
  },
  sum: {
    get: (req, res) => {
      // gets summary of all data stored in the user's record
      const id = req.body.id;
      db.User.findById(id, (err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ user: user });
        }
      });
    }
  }
}