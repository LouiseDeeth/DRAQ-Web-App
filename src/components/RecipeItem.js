import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

//Added a RecipeItem.js file
const RecipeItem = (props) => {
    useEffect(
        () => {
            console.log("Recipe Item:", props.myRecipe);
        }, [props.myRecipe]);// Only run this effect when the myRecipe prop changes

    //Delete button for each Receipe
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/Recipe/' + props.myRecipe._id)
            .then((res) => {
                props.Reload(); // Refresh the recipe list after deletion
            })
            .catch((error) => {
                console.log("Error deleting recipe:", error);
            });
    };

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{textAlign: 'center'}}> {/*Centred the text within the card*/}
                    <Card.Title >{props.myRecipe.title}</Card.Title>
                    <Card.Img src={props.myRecipe.picture}></Card.Img>
                    <footer>{props.myRecipe.category}</footer>
                </Card.Body>
                <Link to={"/edit/" + props.myRecipe._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default RecipeItem;