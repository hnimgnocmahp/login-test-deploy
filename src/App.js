import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null); // <-- tạo state user

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
