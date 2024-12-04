import { useEffect } from "react"; 
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const RecipeItem = (props) => {
    useEffect(() => {
        console.log("Recipe Item:", props.myRecipe);
    }, [props.myRecipe]); // Only run this effect when the myRecipe prop changes

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/api/recipe/${props.myRecipe._id}`)
            .then((res) => {
                console.log('Recipe deleted:', res.data);
                props.Reload(); // Refresh the recipe list
            })
            .catch((error) => {
                console.error('Error deleting recipe:', error);
            });
    };

    return (
        <div>
            <Card style={{ width: '18rem', margin: '1rem auto' }}>
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{props.myRecipe.title}</Card.Title>
                    <Card.Img 
                        src={props.myRecipe.picture} 
                        alt={props.myRecipe.title} 
                        style={{ height: '150px', objectFit: 'cover', marginBottom: '10px' }}
                    />
                    <footer style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                        {props.myRecipe.category.join(', ')}
                    </footer>
                    <hr />
                    <div>
                        <h6>Ingredients:</h6>
                        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
                            {props.myRecipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6>Instructions:</h6>
                        <ol style={{ textAlign: 'left', paddingLeft: '20px' }}>
                            {props.myRecipe.method.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </Card.Body>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                    <Link to={`/edit/${props.myRecipe._id}`} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </div>
            </Card>
        </div>
    );    
};

export default RecipeItem;