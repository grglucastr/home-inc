import React from "react";
import Table from "../components/Table";

import expenseService from "../services/expenseService";

export default function Pay() {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    expenseService
      .listAll({ active: true })
      .then(expenses => setExpenses(expenses));
  }, []);

  const onPay = expense => {
    const confirmed = window.confirm(
      `Confirm expense payment?\n\nExpense:${expense.title}\nCost:${expense.cost}\nDue date:${expense.dueDate}`
    );

    const paidExpense = {
      ...expense,
      paid: true
    };

    if (confirmed) {
      expenseService.update(paidExpense);
      setExpenses(
        expenses.map(exp => {
          if (exp.id === paidExpense.id) {
            return paidExpense;
          }
          return exp;
        })
      );
    }
  };

  return (
    <div>
      <h4>To Pay</h4>
      <Table expenses={expenses} onPay={expense => onPay(expense)} />
    </div>
  );
}
