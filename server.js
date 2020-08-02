require('./config/config')
const express = require('express');
const { response } = require('express');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port`);
});

app.get('/', (req, res) => {
    res.json('Hello-GCP');
});

app.get('/adios', (req, res) => {
    res.json('Bye-GCP');
});

app.get('/hastaluego', (req, res) => {
    res.json('Hastaluego-GCP');
});