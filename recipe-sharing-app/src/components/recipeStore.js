import create from 'zustand';

// Zustand store for managing recipes, favorites, and recommendations
const useRecipeStore = create(set => ({
  recipes: [], // Array to hold all recipe objects
  favorites: [], // Array to track the IDs of favorite recipes

  // Adds a recipe ID to the favorites array, ensuring no duplicates
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  // Removes a recipe ID from the favorites array
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  recommendations: [], // Array to store recommended recipes

  // Generates recommendations based on favorite recipes
  generateRecommendations: () =>
    set(state => {
      // Filters recipes that are marked as favorite and applies a random factor
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
