var db = require('../db');

module.exports = {
  messages: {
    get: () => {
     
      db.connection((err) => {
        let result = [];
        if (err) throw err;
        db.query('SELECT * FROM messages;', (err, rows, fields) => {
          if (err) throw err;
          console.dir(' CONSOLE DIRECTORY CONSOLE:', res);
          for (row in rows) {
            result.push({
              messages: row.message_text
            });
          } 
        });
      });
    }, // a function which produces all the messages
    post: (text) => {
      console.dir(' CONSOLE DIRECTORY CONSOLE:', res);
        db.connection((err) => {
          if (err) throw err;
          db.query('INSERT INTO messages (name_id, room_id, message_text) VALUES (, , );', (err, res) => {
            if (err) throw err;
            console.dir(' CONSOLE DIRECTORY CONSOLE:', res);
          });
        });
      }
    }
     // a function which can be used to insert a message into the database
  };

  // users: {
  //   // Ditto as above.
  //   get: () => {
  //     db.connection((err) => {
  //       if (err) throw err;
  //       db.query('SELECT * FROM users;', (err, res) => {
  //         if (err) throw err;
  //         console.dir(' CONSOLE DIRECTORY CONSOLE:', res);
  //       });
  //     });
  //   },
  //   post: function () {}
  // }
// };

