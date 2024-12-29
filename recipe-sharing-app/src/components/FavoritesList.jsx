import React from 'react';
import { useRecipeStore } from './recipeStore';

// Component to display a list of favorite recipes
const FavoritesList = () => {
  // Get favorite recipes by mapping their IDs to full recipe objects
    const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
    );

    return (
    <div>
        <h2>My Favorites</h2>
      {/* Loop through the favorites array and display each recipe */}
        {favorites.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
        ))}
    </div>
    );
};

export default FavoritesList;
