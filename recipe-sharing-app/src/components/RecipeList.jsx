import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
    const { filteredRecipes, filterRecipes, recipes, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    }));

    useEffect(() => {
    filterRecipes();
    }, [filterRecipes, searchTerm, recipes]);

    return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1 style={styles.title}>Recipe Sharing App</h1>
            <SearchBar />
        </header>
        <section style={styles.resultsSection}>
        {filteredRecipes.length > 0 ? (
            <ul style={styles.recipeList}>
            {filteredRecipes.map((recipe, index) => (
                <li key={index} style={styles.recipeCard}>
                    <h3 style={styles.recipeTitle}>{recipe.title}</h3>
                    <p style={styles.recipeDescription}>{recipe.description}</p>
                </li>
            ))}
            </ul>
        ) : (
            <p style={styles.noResults}>No recipes found.</p>
        )}
        </section>
    </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
    },
    resultsSection: {
        marginTop: '20px',
    },
    recipeList: {
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    recipeCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        backgroundColor: '#f9f9f9',
    },
    recipeTitle: {
        fontSize: '1.2rem',
        marginBottom: '10px',
        color: '#007BFF',
    },
    recipeDescription: {
        fontSize: '1rem',
        color: '#555',
    },
    noResults: {
        fontSize: '1.2rem',
        color: '#999',
    },
};

export default RecipeList;
