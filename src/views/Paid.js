import React from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import expenseService from "../services/expenseService";

export default function Paid() {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    expenseService.listAllPaid().then(list => setExpenses(list));
  }, []);

  function doFilter(params) {
    console.log("params", params);
  }

  return (
    <div>
      <h2>Paid</h2>
      <Filter onFilter={params => doFilter(params)} />
      <Table expenses={expenses} />
    </div>
  );
}
