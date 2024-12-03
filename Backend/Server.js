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

//error handling to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use(express.static('public')); //middleware

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.uyx73.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    recipe: { type: String, required: true }
});

const recipeModel = new mongoose.model('myRecipes', recipeSchema);

app.get('/api/recipes', async (req, res) => {
    const recipes = await recipeModel.find({}); 
    res.status(200).json({ recipes });
});

app.get('/api/recipe/:id', async (req, res) => {
    const recipe = await recipeModel.findById(req.params.id);
    res.json(recipe);
});

app.put('/api/recipe/:id', async (req, res) => {
    let recipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(recipe);
});

app.post('/api/recipes', async (req, res) =>{
    console.log("Recipes: "+req.body.title);
    const { title, picture, ingredients, method, category } = req.body;
    const newRecipe = new recipeModel({ title, picture, ingredients, method, category });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.delete('/api/recipe/:id', async (req, res) => {
  
    console.log('Deleting recipe with ID:', req.params.id);
    const recipe = await recipeModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Recipe deleted successfully", recipe }); 
});