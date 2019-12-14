import React from "react";

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
            <th>Edit</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
