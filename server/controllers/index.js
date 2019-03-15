var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((err, result) => {
        if (err) throw err;
        res.status(200);
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: (req, res) => {
      models.messages.post(req.body, (err, result) => { // give body to models post
        if (err) throw err; // callback error result
        res.sendStatus(201); // res send status 201
        res.send('Posted!'); // res send result
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: (req, res) => {
      models.users.get((err, result) => {
        if (err) throw err;
        res.status(200);
        res.json(result);
      });
    },
    post: (req, res) => {
      var params = [req.body.username];
      models.users.post(params, (err, results) => {
        if (err) console.error(err);
        res.sendStatus(201);
      });
        // var params = [req.body.username];
        // models.users.post(params, function(err, results) {
        //   if (err) { /* do something */ }
        //   res.sendStatus(201);
        // });
    }
  }
};

