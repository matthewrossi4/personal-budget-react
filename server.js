const express = require('express');
const app = express();
const port = 4000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var budget = require('./src/budget-data.json');
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});