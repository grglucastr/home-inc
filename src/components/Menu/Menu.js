import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./styles.css";

export default function Menu() {
  const history = useHistory();

  return (
    <div style={{ marginBottom: "15px" }}>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push("/pay")}>
              Expenses to Pay
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/paid")}>
              Paid Expenses
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/report")}>
              Expenses Report
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/expense")}>
              Add New Expense
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
