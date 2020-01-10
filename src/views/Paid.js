import React from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import expenseService from "../services/expenseService";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const lastDay = new Date(currentYear, currentMonth, 0).getDate();

const emptyFilterParams = {
  period: {
    start: `${currentYear}-${currentMonth}-01`,
    end: `${currentYear}-${currentMonth}-${lastDay}`
  },
  active: true,
  paid: true
};

export default function Paid() {
  const [expenses, setExpenses] = React.useState([]);
  const [filterParams] = React.useState(emptyFilterParams);

  React.useEffect(() => {
    expenseService.listAll(filterParams).then(list => setExpenses(list));
  }, [filterParams]);

  function doFilter(params) {
    params["paid"] = true;
    expenseService.listAll(params).then(list => setExpenses(list));
  }

  return (
    <div>
      <h4>Paid</h4>
      <Filter onFilter={params => doFilter(params)} />
      <Table expenses={expenses} />
    </div>
  );
}
