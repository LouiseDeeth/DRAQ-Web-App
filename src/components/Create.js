import axios from "axios";
import { useState } from "react";
import '../App.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [category, setCategory] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add category if checked
      setCategory([...category, value]);
    } else {
      // Remove category if unchecked
      setCategory(category.filter((category) => category !== value));
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
    <div>
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
          <input type="text"
            className="form-control"
            value={ingredients}
            onChange={(e) => { setIngredients(e.target.value) }}
          />
        </div>
        <br />
        <div className="form-group">
          <label className="bold-label">Enter Method: </label>
          <input type="text"
            className="form-control"
            value={method}
            onChange={(e) => { setMethod(e.target.value) }}
          />
        </div>
        <br />
        
        <div className="form-group">
          <label className="bold-label">Select Category/s: </label>
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
        <br />

        <div>
          <input type="submit" value="Add Recipe" />
        </div>
      </form>
    </div>
  );
}

export default Create;