var db = require('../db');
// var checkifUserExists = function (req, res, cb) {
//   var query = `
//    SELECT id from users where username="${res.username}
//   `;
//   db.connection.query(query, (err, rows, fields) {
//     if (err) {
//       addUsertoDb(req, res, cb);
//     } else {
//       cb(req, res);
//     }
//   });
// }

// var addUsertoDB = function();

// var add 

module.exports = {
  messages: {
    get: (callback) => {
    db.query(`SELECT messages.id, users.username, rooms.room_name, messages.message_text FROM messages
                LEFT JOIN users ON messages.name_id = users.id
                LEFT JOIN rooms ON messages.room_id = rooms.id;`, (err, results) => {
          callback(err, results);
          });
    }, // a function which produces all the messages
    post: (params, callback) => {
      db.query(`INSERT INTO messages(name_id, room_id, message_text) 
                  VALUES ((SELECT id FROM users WHERE username = ${params.username};), (SELECT id FROM rooms WHERE room_name = ${params.roomname};), ${params.messages});`, (err, res) => {
        callback(err, res);
      });
    }
  },
     // a function which can be used to insert a message into the database
  

  users: {
    // Ditto as above.
    get: (callback) => {
      // callback(<h1>'TEST FONT</h1>);
      db.query('SELECT username FROM users;', (err, res) => {
          callback(err, res);
        });
      },
    post: (params, callback) => {
        db.query(`INSERT INTO users(username)
                    VALUES (?)`, params, (err, results) => {
                      callback(err, results);
                    })
      }
    }
};

