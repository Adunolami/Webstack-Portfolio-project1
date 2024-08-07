import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/Home';
import LoginPage from './src/pages/LoginPage';
import SignupPage from './src/pages/SignupPage';
//import HomePage from './src/pages/LoginPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;

/*// App.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <>
          <Signup setUser={setUser} />
          <Login setUser={setUser} />
        </>
      ) : (
        <div>Welcome, {user.email}</div>
      )}
    </div>
  );
}

export default App;
*/