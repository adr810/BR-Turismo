import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Viagens from "./components/pages/Viagens";
import Hoteis from "./components/pages/Hoteis";
import Cadastro from "./components/pages/Cadastro";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viagens" component={Viagens} />
          <Route path="/hoteis" component={Hoteis} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
