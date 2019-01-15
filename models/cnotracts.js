const db = require('../db/config');
const contract = {};

contract.create = (req, res, next) => {
db.one('INSERT INTO Contracts (contract_period, contract_status,company_id,clint_id) VALUES($1,pending,$3,$4);',[req.body.period,req.body.company_id,data.clint_id])
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