import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  cookingTimeFilter: null,
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setCookingTimeFilter: (time) => set({ cookingTimeFilter: time }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const matchesTitle = recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesIngredient =
          !state.ingredientFilter || recipe.ingredients.includes(state.ingredientFilter);
        const matchesCookingTime =
          !state.cookingTimeFilter || recipe.cookingTime <= state.cookingTimeFilter;
        return matchesTitle && matchesIngredient && matchesCookingTime;
      }),
    })),
}));


export default useRecipeStore;
