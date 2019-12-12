import React from "react";
import { withRouter } from "react-router-dom";

import expenseTypeService from "../services/expenseTypeService";
import expenseService from "../services/expenseService";

export default withRouter(function Form({ history }) {
  const [expenseTypes, setExpenseTypes] = React.useState([]);
  const [expense, setExpense] = React.useState({
    title: "",
    description: "",
    expenseType: { id: "" },
    cost: "",
    dueDate: "",
    invoiceDate: "",
    serviceStart: "",
    serviceEnd: ""
  });

  React.useEffect(() => {
    expenseTypeService.listAll().then(response => setExpenseTypes(response));
  }, []);

  const submitForm = e => {
    e.preventDefault();
    console.log("submitting form...");
    console.log("expense", expense);
    expenseService
      .save(expense)
      .then(response => {
        window.alert("Saved!");
        history.push("/");
      })
      .catch(err => console.error("Error on save", err));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="title">Description:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Conta de Luz"
            value={expense.title}
            onChange={evt =>
              setExpense({ ...expense, title: evt.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={expense.expenseType.id}
            onChange={evt =>
              setExpense({ ...expense, expenseType: { id: evt.target.value } })
            }
          >
            <option disabled>Select Type</option>
            {expenseTypes.map(exp => (
              <option key={exp.id} value={exp.id}>
                {exp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            id="cost"
            name="cost"
            placeholder="R$ 150,00"
            value={expense.cost}
            onChange={evt => setExpense({ ...expense, cost: evt.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            placeholder="2019-01-20"
            value={expense.dueDate}
            onChange={evt =>
              setExpense({ ...expense, dueDate: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="invoiceDate">Invoice Date:</label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            placeholder="2019-01-15"
            value={expense.invoiceDate}
            onChange={evt =>
              setExpense({ ...expense, invoiceDate: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="serviceStart">Service Start:</label>
          <input
            type="date"
            id="serviceStart"
            name="serviceStart"
            placeholder="2019-01-01"
            value={expense.serviceStart}
            onChange={evt =>
              setExpense({ ...expense, serviceStart: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="serviceEnd">Service End:</label>
          <input
            type="date"
            id="serviceEnd"
            name="serviceEnd"
            placeholder="2019-01-30"
            value={expense.serviceEnd}
            onChange={evt =>
              setExpense({ ...expense, serviceEnd: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Comments:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={expense.description}
            onChange={evt =>
              setExpense({ ...expense, description: evt.target.value })
            }
          ></textarea>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
});
