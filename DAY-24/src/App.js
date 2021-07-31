import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>If not logged in can't access, Profile & Dashboard</h2>
      <button>Logout</button>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About: Public Route</h2>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <h2>If not logged in cant access, Profile & Dashboard</h2>
      <button>Logout</button>
    </div>
  );
}
function Dashboard() {
  return <h2>Dashboard : Private Route</h2>;
}
