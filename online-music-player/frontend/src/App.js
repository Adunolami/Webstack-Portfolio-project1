// src/App.js
import NavBar from './components/NavBar';

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