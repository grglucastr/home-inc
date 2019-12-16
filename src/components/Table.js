import React from "react";
import { Link } from "react-router-dom";

export default function Table({ expenses, onPay }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div>
        <p>Empty values</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Cost</th>
            <th>Due Date</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.cost}</td>
              <td>{expense.dueDate}</td>
              <td>
                {expense.paid && <span>Paid.</span>}
                {!expense.paid && (
                  <button onClick={() => onPay(expense)}>Pay</button>
                )}
              </td>
              <td>
                <Link to={`/expense/${expense.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
