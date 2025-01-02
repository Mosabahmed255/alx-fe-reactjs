import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Blog from './components/Blog';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = false; // Simulate authentication status

  return (
    <Router>
      <Routes>
        {/* Public Route: Home */}
        <Route path="/" element={<Home />} />

        {/* Protected Route: Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route: Blog */}
        <Route path="/blog/:postId" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
