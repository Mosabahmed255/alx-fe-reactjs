import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
