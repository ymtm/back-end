const express = require('express');
const router = express.Router();

const company = require('../models/companies');
const contract = require('../models/contracts');

const sendCompanies = (req, res) => res.json(res.locals.companies);
const sendCompany = (req, res) => res.json(res.locals.company);
const sendCompanyContracts = (req, res) => res.json(res.locals.companies_contracts);
const sendUpdatedContracts = (req,res) => res.json(res.locals.updatedStatus);
const sendSuccess = (req, res) => res.json({ message: 'success' });


router.get('/', company.getAll, sendCompanies);
router.get('/:id', company.byID,sendCompany);
router.get('/show/:id', company.byIDwithDetails,sendCompanyContracts);
router.delete('/:comp_id/client/:client_id',contract.delete,sendSuccess);
router.put('/contracts/:cont_id',contract.update,sendUpdatedContracts);


module.exports = router;