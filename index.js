const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const topChef = require('./data/top-chef.json');
const recipes = require('./data/recipe.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Lovely Food Network Running')
});

app.get('/topChef', (req, res) => {
    res.send({ data: topChef });
});

app.get('/topChef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = topChef.find(c => c.id === id);
    res.send(selectedChef)
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.find(r => r.id === id);
    res.send(selectedRecipes)
})

app.listen(port, () => {
    console.log(`Food Network API running on port: ${port}`)
});
