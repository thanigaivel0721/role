import './styles.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [users, setUsers] = useState({
    admin: { id: 'admin', password: 'admin123', role: 'admin' },
    user: { id: 'user', password: 'user123', role: 'user' }
  });

  const handleLogin = (role) => {
    setUserRole(role); // Set role based on login
  };

  const handleLogout = () => {
    setUserRole(null); // Reset role on logout
  };

  const handleSignUp = (newUserId, newPassword, role) => {
    setUsers({
      ...users,
      [newUserId]: { id: newUserId, password: newPassword, role: role }
    });
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage users={users} onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpPage onSignUp={handleSignUp} />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="admin">
                <AdminDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="user">
                <UserDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
