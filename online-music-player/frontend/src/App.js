// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" exact>
            <h1>Welcome to the Online Music Player</h1>
            <p><Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link></p>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
