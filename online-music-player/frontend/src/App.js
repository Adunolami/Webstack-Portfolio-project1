import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';  // Adjust the import if your file name is different
import LoginPage from './pages/LoginPage'; // Adjust the import if your file name is different
import SignupPage from './pages/SignupPage'; // Example additional page

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> {/* Example additional route */}
    </Routes>
  );
}

export default App;
