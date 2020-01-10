import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./util/Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <header style={{ color: "#bebebe", backgroundColor: "#4f4f4f" }}>
          <Container>
            <h1>Home.inc</h1>
          </Container>
          <Menu />
        </header>

        <Container>
          <Routes />
        </Container>
      </div>
    </Router>
  );
}

export default App;
