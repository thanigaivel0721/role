import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = {
  admin: { id: 'admin', password: 'admin123' }, // Admin credentials
  user: { id: 'user', password: 'user123' } // User credentials
};

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check for admin credentials
    if (userId === users.admin.id && password === users.admin.password) {
      onLogin('admin'); // Set the role in the parent component
      navigate('/admin'); // Redirect to admin dashboard
    } 
    // Check for user credentials
    else if (userId === users.user.id && password === users.user.password) {
      onLogin('user'); // Set the role in the parent component
      navigate('/user'); // Redirect to user dashboard
    } else {
      setError('Invalid user ID or password!'); // Show error if credentials are incorrect
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}

      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
