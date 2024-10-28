// src/components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import OverviewPanel from './OverviewPanel';
import UserManagement from './UserManagement';
import DashboardChart from './Charts'
// import Charts from './Charts';

const Dashboard = ({ userRole }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <OverviewPanel />
      {userRole === 'Admin' && <UserManagement />}
      <DashboardChart />
    </div>
  );
};

export default Dashboard;
