import React from "react";
import { Link } from "react-router-dom";
import { Table as TableUI } from "react-bootstrap";
import currency from "currency.js";

export default function Table({ expenses, onPay }) {
  const BRL = value =>
    currency(value, {
      symbol: "R$ ",
      separator: ".",
      decimal: ",",
      precision: 2
    });

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
                <td>{BRL(expense.cost).format(true)}</td>
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
