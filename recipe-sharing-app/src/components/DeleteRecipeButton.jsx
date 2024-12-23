import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
    deleteRecipe(recipeId); // Deletes the recipe from the Zustand store
    navigate("/"); // Navigate back to the home or recipe list page after deletion
    };

    return (
    <button onClick={handleDelete} style={{ color: "red", fontWeight: "bold" }}>
        Delete Recipe
    </button>
    );
};

export default DeleteRecipeButton;
