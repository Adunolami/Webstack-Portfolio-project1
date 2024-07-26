// src/pages/SignupPage.js
import React from 'react';
import Signup from '../Components/Signup'; // Ensure the path is correct
import Navbar from '../Components/Navbar'; // Ensure the path is correct

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Signup</h1>
      <Signup />
    </div>
  );
};

export default SignupPage;


/*import React from 'react';
import Signup from '../Components/Signup';
import Navbar from '../Components/Navbar' ;

const SignupPage = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Signup />
    </div>
  );
};

export default SignupPage;*/
