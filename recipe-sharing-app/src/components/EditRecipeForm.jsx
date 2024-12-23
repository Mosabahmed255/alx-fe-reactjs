import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    updateRecipe({ ...recipe, title, description }); // Update the recipe in the Zustand store
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title:</label>
        <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe title"
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter recipe description"
        />
        </div>
        <button type="submit">Update Recipe</button>
    </form>
    );
};

export default EditRecipeForm;
