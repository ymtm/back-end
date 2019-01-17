

console.log('here we go');
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

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