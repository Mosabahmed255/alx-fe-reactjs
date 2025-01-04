import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
            <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                View Recipe
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default HomePage;
