import React from 'react';

const UserDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <p>Welcome, User! You can view your personal resources here.</p>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default UserDashboard;
