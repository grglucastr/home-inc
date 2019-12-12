import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./util/Routes";

function App() {
  return (
    <Router>
      <div>
        <h1>Home.inc</h1>
        <Menu />
        <hr />

        <Routes />
      </div>
    </Router>
  );
}

export default App;
