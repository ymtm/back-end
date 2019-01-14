const db = require('../db/config');
const contrac = {};

contrac.create = (req, res, next) => {
db.one('INSERT INTO Contracts (contract_period, contract_status,company_id,consumer_id) VALUES($1,pending,$3,$4);',[req.body.period,req.body.company_id,data.cons_id])
.then((data)=> {

    res.locals.contract = data
    next();
})
.catch((error) => {
    console.log(error);
    next();
})

}

module.exports = contract;