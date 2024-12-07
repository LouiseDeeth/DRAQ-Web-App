import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import axios from "axios";  
import '../App.css';

function Read() {
    const [recipes, setRecipes] = useState([]);

    //method to handle data reloading
    const Reload = () => {
      console.log("Reloading recipe data...");
      axios.get('http://localhost:4000/api/recipes') //this line runs async
          .then((response) => {
            console.log(response.data);
            setRecipes(response.data.recipes);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
    };
  
    useEffect(() => {
      Reload(); //reload after delete
    }, []);
  
    return (
      <div>
        <h3>All Recipes</h3>
        <Recipes myRecipes={recipes} ReloadData={Reload}/>
      </div>
    );
  }

export default Read;