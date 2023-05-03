const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const topChef = require('./data/top-chef.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Lovely Food Network Running')
});

app.get('/topChef', (req, res) => {
    res.send({ data: topChef });
});

app.listen(port, () => {
    console.log(`Food Network API running on port: ${port}`)
});
