const express = require('express');
const router = express.Router();

const company = require('../models/companies');

const sendcompany = (req, res) => res.json(res.locals.companies);

router.get('/', company.getAll, sendcompany);


module.exports = router;