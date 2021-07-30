import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="page">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <p>
        A home, or domicile, is a space used as a permanent or semi-permanent
        residence for an individual, group or family. It is a fully or semi
        sheltered space and can have both interior and exterior aspects to it.{" "}
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        We use about as an adverb when we talk about time, number and quantity.
        About makes the time, number or quantity less specific and more
        approximate ..
      </p>
    </div>
  );
}

function Users() {
  return (
    <div className="users">
      <h2>Users</h2>
      <p>
        A user is a person who utilizes a computer or network service. A user
        often has a user account and is identified to the system by a username
        (or user name).
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
        <li>user4</li>
      </p>
    </div>
  );
}
