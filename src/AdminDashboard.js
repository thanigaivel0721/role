import React from 'react';

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin! You have access to all admin resources and settings.</p>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default AdminDashboard;
