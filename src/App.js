import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Influenza from "./pages/Influenza";
import PinkEye from "./pages/PinkEye";
import Diabetes from "./pages/Diabetes";
import EarInfection from "./pages/EarInfection";
import Game from "./pages/Game";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/flu">
              <Influenza />
            </Route>
            <Route path="/earinfection">
              <EarInfection />
            </Route>
            <Route path="/diabetes">
              <Diabetes />
            </Route>
            <Route path="/pinkeye">
              <PinkEye />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
