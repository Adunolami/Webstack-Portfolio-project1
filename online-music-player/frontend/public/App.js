// App.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import HomePage from './pages/Homepage';

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
