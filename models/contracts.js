const db = require('../db/config');
const contract = {};



contract.create = (req, res, next) => {
    console.log('\n\n\n\n\n&&&&&&&&&&&&&&&&&&&&');
    db.one('INSERT INTO contracts (contract_period, contract_status, company_id, client_id, contract_issue_date) VALUES($1,$2,$3,$4,$5) RETURNING *;',[req.body.period, "Pending", req.body.company_id, req.client_id, new Date()])
    .then((data)=> {
        res.locals.contract = data
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
    
    }

    contract.delete = (req,res,next) =>{
        db.none('DELETE * FROM contracts WHERE company_id =$1 AND client_id = $2;',[req.params.comp_id,req.params.client_id])
        .then(()=>{

            next();
        })
        .catch((error)=> {
            console.log(error);
            next();
        })
    }

    contract.update = (req,res,next) =>{
        db.one('UPDATE contracts SET contract_status = $1 WHERE contract_id = $2 RETURNING *;',[req.body.status,req.params.cont_id])
        .then((data)=>{
            res.locals.updatedStatus = data;
            next();
        })
        .catch((error)=> {
            console.log(error);
            next();
        })
    }

    
    
    module.exports = contract; 