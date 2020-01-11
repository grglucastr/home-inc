import React from "react";
import { Link } from "react-router-dom";
import { Table as TableUI } from "react-bootstrap";

export default function Table({ expenses, onPay }) {
  return (
    <div>
      <TableUI striped size="sm">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Cost</th>
            <th>Due Date</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>

        {(expenses || expenses.length > 0) && (
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
        )}

        {(!expenses || expenses.length === 0) && (
          <tbody>
            <tr>
              <td colSpan="5" align="center">
                Empty Values
              </td>
            </tr>
          </tbody>
        )}
      </TableUI>
    </div>
  );
}
