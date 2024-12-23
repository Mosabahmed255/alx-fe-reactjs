import { useRecipeStore } from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
    );

    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;