import React, { useState } from "react";

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(); // Explicit use of "validate"
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    console.log("Form Submitted:", formData);
    setFormData({ title: "", ingredients: "", steps: "" });
    setErrors({});
    };

    return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
            </label>
            <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded ${
                errors.title ? "border-red-500" : "border-gray-300"
            }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (each on a new line)
            </label>
            <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className={`w-full mt-1 p-2 border rounded ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
            <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
            </label>
            <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="4"
            className={`w-full mt-1 p-2 border rounded ${
                errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            ></textarea>
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
            Submit Recipe
        </button>
        </form>
    </div>
    );
};

export default AddRecipeForm;
