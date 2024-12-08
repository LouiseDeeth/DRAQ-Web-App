const express = require('express');
const app = express();
const port = 4000; // port 4000 as required
const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public')); //middleware

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.uyx73.mongodb.net/recipes');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    ingredients: { type: [String], required: true }, // Array for ingredients
    method: { type: [String], required: true }, // Array for step-by-step instructions
    category: { type: [String], required: true }
});

const recipeModel = mongoose.model('myRecipes', recipeSchema);

// Fetch all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await recipeModel.find({});
        console.log("Fetched Recipes:", recipes);
        res.status(200).json({ recipes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get recipe by id
app.get('/api/recipe/:id', async (req, res) => {
    try {
        const recipe = await recipeModel.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a recipe
app.put('/api/recipe/:id', async (req, res) => {
    try {
        const recipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Method to create a new recipe
app.post('/api/recipes', async (req, res) => {
    try {
        console.log('Received Data:', req.body);
        const { title, picture, ingredients, method, category } = req.body;
        const newRecipe = new recipeModel({ title, picture, ingredients, method, category });
        await newRecipe.save();
        res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
    } catch (error) {
        console.error('Error saving recipe:', error);
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Delete a recipe
app.delete('/api/recipe/:id', async (req, res) => {
    try {
        console.log('Deleting recipe with ID:', req.params.id);
        const recipe = await recipeModel.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).send({ message: 'Recipe deleted successfully', recipe });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//error handling to catch any server errors
app.use((err, req, res, next) => {
    //console.error(err.stack);
    res.status(500).send('Something went wrong!');
});