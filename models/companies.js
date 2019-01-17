const db = require('../db/config');
const company = {};



company.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM companies;')
    .then((data) => {
        console.log('--',data)
      res.locals.companies = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}
company.byID = (req, res, next) => {
  db.one('SELECT * FROM companies where comp_id=$1;',[req.params.id])
    .then((data) => {
        console.log('--',data)
      res.locals.company = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}
company.byIDwithDetails = (req, res, next) => {
  db.manyOrNone('SELECT * FROM companies JOIN contracts ON companies.comp_id = contracts.company_id JOIN clients ON contracts.client_id = clients.client_id where comp_id=$1;',[req.params.id])
    .then((data) => {
        console.log('--',data)
      res.locals.companies_contracts = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}
 

module.exports = company;