import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userRole, requiredRole, children }) => {
  if (!userRole || userRole !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
