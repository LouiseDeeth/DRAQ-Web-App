import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import axios from "axios";  

function Read() {
    const [recipes, setRecipes] = useState([]);

    //method to handle data reloading
    const Reload = () => {
      console.log("Reloading recipe data...");
      axios.get('http://localhost:4000/api/recipes') //this line runs async
          .then((response) => {
            console.log(response.data);
            setRecipes(response.data.recipe);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
    };
  
    useEffect(() => {
      //reload after delete
      Reload();
    }, []);
  
    return (
      <div>
        <h3>Recipe List</h3>
        <Recipes myRecipes={recipes} ReloadData={Reload}/>
      </div>
    );
  }

export default Read;