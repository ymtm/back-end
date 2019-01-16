console.log('here we go');
require("dontenv").config();
const express = require('express');
const port = process.env.DEV_PORT;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();

const clientController = require('./controllers/clientController');
const companyController = require('./controllers/companiesController');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Hey');
})

app.use('/client',clientController);
app.use('/companies',companyController);
// ADD YOUR CONTROLLER HERE!!!

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
}); 