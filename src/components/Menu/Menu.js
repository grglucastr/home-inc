import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./styles.css";

export default function Menu() {
  const history = useHistory();

  return (
    <div>
      <Navbar bg="light" variant="light">
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
      </Navbar>
    </div>
  );
}
