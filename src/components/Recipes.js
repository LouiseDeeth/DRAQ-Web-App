import RecipeItem from "./RecipeItem";

function Recipes({myRecipes, ReloadData}) {
    return (
        <>
            {myRecipes.map((recipe) => (
                <RecipeItem
                    myRecipe={recipe}
                    key={recipe._id}
                    Reload={ReloadData}
                />
            ))}
        </>
    );
}

export default Recipes;