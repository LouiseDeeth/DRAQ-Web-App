import axios from "axios";
import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); 
    const [picture, setPicture] = useState(''); 
    const [ingredients, setIngredients] = useState(''); 
    const [method, setMethod] = useState(''); 
    const [category, setCategory] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Title: ${title}, Picture: ${picture}, Ingredients: ${ingredients}, Method: ${method}, Category: ${category}`); 
        const receipe = {title: title, picture: picture, ingredients: ingredients, method: method, category: category};
    
          axios.post('http://localhost:4000/api/Recipes')
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.data));
        };
        return (
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Add Recipe name: </label>
                  <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
                </div>
                <div className="form-group">
                  <label>Add Picture URL: </label>
                  <input type="text"
                    className="form-control"
                    value={picture}
                    onChange={(e) => { setPicture(e.target.value) }}
                  />
                </div>
                <div className="form-group">
                  <label>Add Ingredients: </label>
                  <input type="text"
                    className="form-control"
                    value={ingredients}
                    onChange={(e) => { setIngredients(e.target.value) }}
                  />
                </div>
                <div className="form-group">
                  <label>Add Method: </label>
                  <input type="text"
                    className="form-control"
                    value={method}
                    onChange={(e) => { setMethod(e.target.value) }}
                  />
                </div>
                <div className="form-group">
                  <label>Add Category: </label>
                  <input type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }}
                  />
                </div>
                <div>
                  <input type="submit" value="Add Recipe" />
                </div>
              </form>
            </div>
          );      
    }
export default Create;