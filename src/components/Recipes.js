import RecipeItem from "./RecipeItem";

function Recipes(props) {
    return (
        <>
            {props.myRecipes.map((Recipe) => (
                <RecipeItem
                    myRecipes={Recipe}
                    key={Recipe._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Recipes;