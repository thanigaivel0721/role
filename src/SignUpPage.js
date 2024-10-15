import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ onSignUp }) => {
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is "user"
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (newUserId && newPassword) {
      // Call the sign-up function and pass the role along with user ID and password
      onSignUp(newUserId, newPassword, role);
      navigate('/'); // Redirect to login page after successful sign-up
    } else {
      setError('Please fill out all fields!');
    }
  };

  return (
    <div className="login-page">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Dropdown should appear first */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="dropdown"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input
        type="text"
        placeholder="Enter new User ID"
        value={newUserId}
        onChange={(e) => setNewUserId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter new Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
