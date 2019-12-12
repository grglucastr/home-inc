import React from "react";

export default function Table({ expenses }) {
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
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(expense => (
            <tr>
              <td>{expense.title}</td>
              <td>{expense.cost}</td>
              <td>{expense.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
