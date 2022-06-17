import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Login, SignUp } from './pages';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
