import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    setRecipes(recipeData);
    }, []);

    return (
    <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
            <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            >
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-700 mb-4">{recipe.summary}</p>
                <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline"
                >
                View Recipe
                </Link>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default HomePage;
