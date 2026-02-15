require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

const app = express();

app.use(express.json()) 

app.use(express.static(path.join(__dirname, 'dist')))

app.post('/api/run', (req, res) => {
    const { url } = req.body;

    axios.get(`${url}/${API_KEY}`)
        .then(response => {
            const { turvar, tahun, turtahun, datacontent, vervar } = response.data;
            res.json({ vari : response.data.var, turvar, tahun, turtahun, datacontent, vervar })
        })
})


app.listen(PORT, () => {
    console.log('App is running...');
})