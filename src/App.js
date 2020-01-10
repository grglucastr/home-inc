import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./util/Routes";

function App() {
  return (
    <Router>
      <div>
        <header style={{ color: "#bebebe", backgroundColor: "#4f4f4f" }}>
          <h1>Home.inc</h1>
          <Menu />
        </header>

        <Routes />
      </div>
    </Router>
  );
}

export default App;
