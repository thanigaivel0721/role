import './styles.css'; // Import CSS styles
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const [userRole, setUserRole] = useState(null); // Store the logged-in user's role

  const handleLogin = (role) => {
    setUserRole(role); // Set role based on login
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* User Dashboard */}
          <Route
            path="/user"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect unauthorized users */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
