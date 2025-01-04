import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const selectedRecipe = recipeData.find((item) => item.id === parseInt(id));
    if (selectedRecipe) {
        setRecipe(selectedRecipe);
    } else {
      navigate('/'); // Redirect to Home Page if recipe not found
    }
    }, [id, navigate]);

    if (!recipe) return <p>Loading...</p>;

    return (
    <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
        <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-gray-700 mb-6">{recipe.summary}</p>
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-2">{instruction}</li>
            ))}
            </ol>
        </div>
        </div>
    </div>
    );
};

export default RecipeDetail;
