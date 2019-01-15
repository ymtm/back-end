const express = require('express');
const router = express.Router();

const contract = require('../models/cnotracts');
const companies = require('../models/companies');

const sendcontract = (req, res) => res.json(res.locals.cnotracts);
const sendcontract = (req, res) => res.json(res.locals.companies);


router.get('/', contract.getAll, sendcontract);
