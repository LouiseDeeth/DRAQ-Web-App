import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

export default function Edit(props) {
    let { id } = useParams();
    //console.log("Editing Recipe ID:", id);

    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [ingredientInput, setIngredientInput] = useState('');
    const [method, setMethod] = useState([]);
    const [methodInput, setMethodInput] = useState('');
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/recipe/' + id)
            .then((response) => {
                //console.log("API Response:", response.data);
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

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCategory([...category, value]); // Add category if checked
        } else {
            setCategory(category.filter((category) => category !== value)); // Remove category if unchecked
        }
    };

    const handleAddIngredient = () => {
        if (ingredientInput.trim()) {
            setIngredients([...ingredients, ingredientInput]);
            setIngredientInput(''); // Clear input box
        }
    };

    const handleRemoveIngredient = (index) => {
        setIngredients(ingredients.filter((_, i) => i !== index)); // Remove by index
    };

    const handleAddMethod = () => {
        if (methodInput.trim()) {
            setMethod([...method, methodInput]);
            setMethodInput(''); // Clear input box
        }
    };

    const handleRemoveMethod = (index) => {
        setMethod(method.filter((_, i) => i !== index)); // Remove by index
    };

    // Handle submit of new recipe
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
        <div className="edit-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="bold-label">Enter Recipe name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label className="bold-label">Enter Recipe Picture URL: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label className="bold-label">Enter Ingredients: </label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={ingredientInput}
                            onChange={(e) => setIngredientInput(e.target.value)}
                            placeholder="Add an ingredient" />
                        <button type="button" className="btn" onClick={handleAddIngredient}>Add</button>
                    </div>
                </div>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient}
                            <button type="button" onClick={() => handleRemoveIngredient(index)} style={{ marginLeft: '10px' }} > Remove </button>
                        </li>
                    ))}
                </ul>
                <div className="form-group">
                    <label className="bold-label">Enter Step by Step Instructions:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={methodInput}
                            onChange={(e) => setMethodInput(e.target.value)}
                            placeholder="Add a step"
                        />
                        <button type="button" className="btn" onClick={handleAddMethod}>Add</button>
                    </div>
                    <ol>
                        {method.map((step, index) => (
                            <li key={index}>
                                {step}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMethod(index)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="form-group">
                    <label className="bold-label">Select Categories: </label>
                    <div className="checkbox-group">
                        {['Breakfast', 'Vegetarian', 'Lunch', 'Vegan', 'Dinner', 'Cocktails', 'Dessert', 'Favourites'].map((cat) => (
                            <div className="checkbox-item" key={cat}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={cat}
                                        checked={category.includes(cat)}
                                        onChange={handleCategoryChange} // Updates the categories
                                    /> {cat}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div>
                    <input type="submit" value="Save Recipe" className="btn" />
                </div>
            </form>
        </div>
    );
};
