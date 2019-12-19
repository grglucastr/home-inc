import React from "react";
import Table from "../components/Table";
import expenseService from "../services/expenseService";

export default function Paid() {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    expenseService.listAllPaid().then(list => setExpenses(list));
  }, []);

  return (
    <div>
      <h2>Paid</h2>
      <Table expenses={expenses} />
    </div>
  );
}
