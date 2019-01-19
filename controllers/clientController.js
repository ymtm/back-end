const express = require('express');
const router = express.Router();

const company = require('../models/companies');
const client = require ('../models/clients');
const contract = require('../models/contracts');


const sendCompanies = (req, res) => res.json(res.locals.companies);
// const sendClient= (req, res) => res.json(res.locals.newClient);
const sendClientAndContract = (req,res) => res.json({clients: res.locals.newClient, contract: res.locals.contract})

router.get('/', company.getAll, sendCompanies);
router.post('/', client.create, contract.create, sendClientAndContract);

module.exports = router;