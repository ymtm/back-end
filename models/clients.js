const db = require('../db/config');
const client = {};

// create a method that gets all the data from the "clients" table

client.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM clients;')
    .then((data) => {
      res.locals.clients = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

client.create = (req, res, next) => {
  console.log('\n\n\n\n\n ************************'  );
  db.one('INSERT INTO clients (client_name, client_type) VALUES ($1, $2) RETURNING *;',[req.body.name, req.body.type])
    .then((data) => {
      res.locals.newClient = data;
      res.locals.client_id = data.client_id;

      console.log('\n\n\n\n\n' ,data.client_id  );
      req.client_id = data.client_id;
      console.log('newClient = ', res.locals.newClient);
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}


module.exports = client;