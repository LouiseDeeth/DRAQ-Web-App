import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [ingredientInput, setIngredientInput] = useState('');
    const [method, setMethod] = useState([]);
    const [methodInput, setMethodInput] = useState("");
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();
  
  useEffect(() => {
      axios.get('http://localhost:4000/api/recipe/' + id)
          .then((response) => {
              setTitle(response.data.title);
              setPicture(response.data.picture);
              setIngredients(response.data.ingredients);
              setMethod(response.data.method);
              setCategory(response.data.category);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [id]);
  
  const handleSubmit = (event) => {
      event.preventDefault();
      const newRecipe = { id, title, picture, ingredients, method, category };
      axios.put('http://localhost:4000/api/recipe/' + id, newRecipe)
          .then((res) => {
              console.log(res.data);
              navigate('/read');
          });
  }
  
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label>Recipe Name: </label>
                  <input type="text" 
                  className="form-control" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Picture: </label>
                  <input type="text" 
                  className="form-control" 
                  value={picture} 
                  onChange={(e) => setPicture(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Ingredients: </label>
                  <input type="text" 
                  className="form-control" 
                  value={ingredients} 
                  onChange={(e) => setIngredients(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Method: </label>
                  <input type="text" 
                  className="form-control" 
                  value={method} 
                  onChange={(e) => setMethod(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Category: </label>
                  <input type="text" 
                  className="form-control" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} />
              </div>

              <div className="form-group">
                  <input type="submit" value="Edit Recipe" className="btn btn-primary" />
              </div>
          </form>
      </div>
  );
  }