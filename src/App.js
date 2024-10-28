import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Auth/Home/Home';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Auth/Login/Login" element={<Login />} />
        <Route path="/Auth/Home/Home" element={<Home />} />
        <Route path="/Auth/Signup/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
