import React from "react";
import Table from "../components/Table";

import expenseService from "../services/expenseService";

export default function Pay() {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    expenseService.listAll().then(expenses => setExpenses(expenses));
  }, []);

  return (
    <div>
      <h2>To Pay</h2>
      <Table expenses={expenses} />
    </div>
  );
}
