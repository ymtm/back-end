const db = require('../db/config');
const consumer = {};

consumer.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM Consumers;')
    .then((data) => {
      res.locals.consumers = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

consumer.create = (req, res, next) => {
  db.one('INSERT INTO Consumers (cons_name,cons_type)  VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.type])
    .then((data) => {
      res.locals.consumer = data;
       
     
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}


module.exports = consumer;