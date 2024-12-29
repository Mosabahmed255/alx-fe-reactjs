import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

// Component to display personalized recipe recommendations
const RecommendationsList = () => {
  // Access recommendations and the action to generate them
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations when the component loads
    useEffect(() => {
    generateRecommendations();
    }, [generateRecommendations]);

    return (
    <div>
        <h2>Recommendations</h2>
      {/* Loop through the recommendations array and display each recipe */}
        {recommendations.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
        ))}
    </div>
    );
};

export default RecommendationsList;
