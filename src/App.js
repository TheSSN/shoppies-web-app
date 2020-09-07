import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar"
import Home from "./components/Home"
import Nominations from "./components/Nominations"
import About from "./components/About"

function App() {
  return (
    <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/nominations">
            <Nominations />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
