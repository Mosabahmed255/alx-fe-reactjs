import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Assuming useAuth is a custom hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Custom hook to determine auth status

    if (!isAuthenticated) {
    return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
