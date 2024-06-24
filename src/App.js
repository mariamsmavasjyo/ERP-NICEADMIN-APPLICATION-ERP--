// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Sidebar from './components/ Sidebar';
import Register from './components/Register';
import Profile from './components/Profile'; 
import Forms from './components/Forms';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/forms" element={<Forms />} /> 
        <Route path="*" element={
        
          <div className="App">
            <NavBar />
            <div className="main">
         <Sidebar />
         <Dashboard />
              <div className="content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* Add other routes here */}
                  <Route path="/" element={<Dashboard />} exact />
                </Routes>
              </div>
            </div>
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
