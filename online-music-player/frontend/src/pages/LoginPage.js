import React, { useState } from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Login</h1>
      <Login setUser={setUser} />
    </div>
  );
};

export default LoginPage;
