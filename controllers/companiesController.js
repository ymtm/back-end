const express = require('express');
const router = express.Router();

const company = require('../models/companies');
const contract = require('../models/contracts');

const sendcompanies = (req, res) => res.json(res.locals.companies);
const sendcompany = (req, res) => res.json(res.locals.company);
const sendCompanyContracts = (req, res) => res.json(res.locals.companies_contracts);
const sendSuccess = (req, res) => res.json({ message: 'success' });


router.get('/', company.getAll, sendcompanies);
router.get('/:id', company.byID,sendcompany);
router.get('/show/:id', company.byIDwithDetails,sendCompanyContracts);
router.delete('/:comp_id/client/:client_id',contract.delete,sendSuccess);
router.put('/contracts/:cont_id',contract.update,sendCompanyContracts);


module.exports = router;