import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
    <div>
        <h2>Recipe List</h2>
        {filteredRecipes.length > 0 ? (
        <ul>
            {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              {/* Use Link to navigate to the recipe details page */}
                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
            </li>
            ))}
        </ul>
        ) : (
        <p>No recipes match your search.</p>
        )}
    </div>
    );
};

export default RecipeList;
