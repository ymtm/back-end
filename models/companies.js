const db = require('../db/config');
const company = {};

company.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM companies;')
    .then((data) => {
        console.log('**',data)
      res.locals.companies = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = company;