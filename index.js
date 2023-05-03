const express = require('express');
const data = require('./data/data.json');
const customer = require('./data/customer.json');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/singleChef/:id', (req, res) => {
    const id = req.params.id;
    const singleData = data.find(data => data.id === parseInt(id))
    res.send(singleData)
})

app.get('/customer', (req, res) => {
    res.send(customer)
})

app.listen(port, () => {
    console.log('Listening on port', port)
})