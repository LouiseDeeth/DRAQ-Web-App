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
        <div style={{ width: '80%', margin: '1rem auto' }}>
            <Card>
                <Card.Body>
                    {/* Recipe Title */}
                    <Card.Title style={{ textAlign: 'center'}} >{props.myRecipe.title}</Card.Title>
                    <hr />
                    {/* Layout for picture and ingredients */}                    
                    <div style={{ display:'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start'}}>
                    
                        {/* Left column */}
                        <div style={{ flex: '1', textAlign: 'center', maxWidth: '50%' }}>
                        <Card.Img src={props.myRecipe.picture} alt={props.myRecipe.title} style={{ maxWidth: "100%", height: "auto", borderRadius: '10px' }}/>
                        </div>

                        {/* Right column */}
                        <div style={{ flex: '2'}}>
                            <h6 style={{ paddingLeft: '40px' }}>Ingredients:</h6>
                            <ul style={{ paddingLeft: '20px' }}>
                                {props.myRecipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>    
                    <hr />

                    {/* Instructions */} 
                    <div>
                        <h6>Instructions:</h6>
                        <ol style={{ paddingLeft: '20px' }}>
                            {props.myRecipe.method.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>     

                    {/* Footer with categories */}
                    <footer style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '10px' }}>
                    <p>Categories: {props.myRecipe.category.join(', ')}</p>
                    </footer>
                </Card.Body>

                {/*Buttons*/}
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', gap: '30px' }}>
                    <Link to={`/edit/${props.myRecipe._id}`} className='btn'>Edit</Link>
                    <Button className='btn' onClick={(e)=>handleDelete(e, props.myRecipe._id)}>Delete</Button>
                </div>
            </Card>
        </div>
    );    
};

export default RecipeItem;