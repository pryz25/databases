CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT, 
  room_name VARCHAR(60) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(60) NOT NULL,
  PRIMARY KEY (id) 
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT, 
  name_id INT NOT NULL,
  room_id INT NOT NULL,
  message_text VARCHAR(140) NOT NULL, 
  PRIMARY KEY (id),
  FOREIGN KEY (name_id)
    REFERENCES users(id)
    ON DELETE CASCADE,
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)
    ON DELETE CASCADE
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

