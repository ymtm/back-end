const express = require('express');
const router = express.Router();

const contract = require('../models/cnotracts');

const sendcontract = (req, res) => res.json(res.locals.companies);

router.get('/', contract.getAll, sendcontract);