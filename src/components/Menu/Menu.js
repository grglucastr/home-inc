import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Menu() {
  return (
    <div>
      <ul className="menu-container">
        <li>
          <Link to="/pay">Expenses to Pay</Link>{" "}
        </li>
        <li>
          <Link to="/paid">Paid Expenses</Link>{" "}
        </li>
        <li>
          <Link to="/report">Expenses Report</Link>{" "}
        </li>
        <li>
          <Link to="/expense">Add New Expense</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
