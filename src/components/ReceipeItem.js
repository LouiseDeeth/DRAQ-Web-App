import { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Button from 'react-bootstrap/Button';

//Added a ReceipeItem.js file
const ReceipeItem = (props) => {
    useEffect(
        () => {
            console.log("Receipe Item:", props.myReceipe);
        }, [props.myReceipe]);// Only run this effect when the myReceipe prop changes

    //Delete button for each Receipe
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/Receipe/' + props.myReceipe._id)
            .then((res) => {
                props.Reload(); // Refresh the movie list after deletion
            })
            .catch((error) => {
                console.log("Error deleting receipe:", error);
            });
    };

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{textAlign: 'center'}}> {/*Centred the text within the card*/}
                    <Card.Title >{props.myReceipe.title}</Card.Title>
                    <Card.Img src={props.myReceipe.poster}></Card.Img>
                    <footer>{props.myReceipe.year}</footer>
                </Card.Body>
                <Link to={"/edit/" + props.myReceipe._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );//to={"/edit/" + props.myReceipe._id}: This to attribute defines the path the Link component should navigate to when clicked.
}

export default ReceipeItem;