import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Auth/Home/Home';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import User from './components/Dashboard/User/User';
import Admin from './components/Dashboard/Admin/Admin';
import Crud from './components/Dashboard/Crud';
import DashboardChart from './components/Dashboard/Charts'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Auth/Login/Login" element={<Login />} />
        <Route path="/Dashboard/Dashboard" element={<Dashboard />} />
        <Route path="/Auth/Home/Home" element={<Home />} />
        <Route path="/Dashboard/User/User" element={<User />} />
        <Route path="/Dashboard/Admin/Admin" element={<Admin />} />
        <Route path="/Auth/Signup/Signup" element={<Signup />} />
        <Route path="/Dashboard/Crud" element={<Crud />} />
        <Route path="/Dashboard/Charts" element={<DashboardChart />} />
      </Routes>
    </Router>
  );
}

export default App;
