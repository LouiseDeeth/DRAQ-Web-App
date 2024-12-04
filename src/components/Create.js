import axios from "axios";
import { useState } from "react";
import '../App.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [method, setMethod] = useState('');
  const [category, setCategory] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCategory([...category, value]);// Add category if checked
    } else {
      setCategory(category.filter((category) => category !== value)); // Remove category if unchecked
    }
  };

  const handleAddIngredient = (e) => {
    if (ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput(''); //clear input box
    }
  };

  const handleRemoveIngredient = (index) => {
    if (ingredientInput.trim()) {
      setIngredients(ingredients.filter((_, i) => i !== index)); //remove by index
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Title: ${title}, Picture: ${picture}, Ingredients: ${ingredients}, Method: ${method}, Category: ${category}`);
    const receipe = { title: title, picture: picture, ingredients: ingredients, method: method, category: category };

    axios.post('http://localhost:4000/api/Recipes')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };
  return (
    <div className="create-container">
      <br />
      <h3>Please enter the following details :</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="bold-label">Enter Recipe name: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <br />
        <div className="form-group">
          <label className="bold-label">Enter Picture URL: </label>
          <input type="text"
            className="form-control"
            value={picture}
            onChange={(e) => { setPicture(e.target.value) }}
          />
        </div>
        <br />
        <div className="form-group">
          <label className="bold-label">Enter Ingredients: </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text"
            className="form-control"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value) }
            placeholder="Add an ingredient"
          />
        </div>
        <button type='button' className="btn" onClick={handleAddIngredient}>Add</button>
        </div>
        <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} >
                {ingredient}
                <button type="button" onClick={() => handleRemoveIngredient(index)} style={{ marginLeft: '10px' }}>Remove</button>
              </li>
            ))}
          </ul>
        
        <div className="form-group">
          <label className="bold-label">Enter Instructions: </label>
          <input type="text"
            className="form-control"
            value={method}
            onChange={(e) => { setMethod(e.target.value) }}
          />
        </div>
        <br />
        
        <div className="form-group">
          <label className="bold-label">Select Categories: </label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Breakfast"
                  onChange={handleCategoryChange}
                /> Breakfast
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Lunch"
                  onChange={handleCategoryChange}
                /> Lunch
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Dinner"
                  onChange={handleCategoryChange}
                /> Dinner
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Dessert"
                  onChange={handleCategoryChange}
                /> Dessert
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Vegetarian"
                  onChange={handleCategoryChange}
                /> Vegetarian
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Vegan"
                  onChange={handleCategoryChange}
                /> Vegan
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Cocktail"
                  onChange={handleCategoryChange}
                /> Cocktail
              </label>
            </div>
            <div className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value="Favourites"
                  onChange={handleCategoryChange}
                /> Favourites
              </label>
            </div>
          </div>
        </div>
        <div>
          <input type="submit" value="Add Recipe" className="btn" />
        </div>
      </form >
    </div >
  );
}

export default Create;