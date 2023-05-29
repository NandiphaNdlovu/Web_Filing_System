const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const customerDetails = [
  { date: '2028/05/18', custName: 'Nandipha',carModel:'Tesla',fee:'1000' },
  { date: '2020/11/06', custName: 'David',carModel:'BMW',fee:'800' }
];

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/customers', (req, res) => {
    res.render('customers',{customerDetails});
  });

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/error', (req, res) => {
  res.render('404');
});

app.post('/customers', (req, res) => {
    const { date, custName, carModel, fee } = req.body;
    const newCustomer = { date, custName, carModel, fee } ;

    customerDetails.push(newCustomer);
    res.redirect('/customers');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
/*
const { date, custName, carModel, fee } = req.body;
    const newCustomer = { date, custName, carModel, fee } ;

    customerDetails.push(newCustomer);
    res.redirect('form');
*/