import React from "react";
import { withRouter, useParams } from "react-router-dom";

import expenseTypeService from "../services/expenseTypeService";
import expenseService from "../services/expenseService";

const newExepense = {
  id: "",
  title: "",
  description: "",
  expenseType: { id: "" },
  cost: "",
  dueDate: "",
  invoiceDate: "",
  servicePeriodStart: "",
  servicePeriodEnd: "",
  paid: false
};

export default withRouter(function Form({ history }) {
  const { id } = useParams("id");
  const [expenseTypes, setExpenseTypes] = React.useState([]);
  const [expense, setExpense] = React.useState(newExepense);

  React.useEffect(() => {
    if (id) {
      expenseTypeService.listAll().then(response => setExpenseTypes(response));
      expenseService.findById(id).then(
        response => setExpense(response.data),
        () => history.push("/notFound")
      );
    } else {
      setExpense(newExepense);
    }
  }, [id, history]);

  const submitForm = e => {
    e.preventDefault();
    expenseService
      .create(expense)
      .then(() => {
        window.alert("Saved!");
        history.push("/");
      })
      .catch(err => console.error("Error on save", err));
  };

  const cancel = _ => {
    history.goBack();
  };

  const disableExpense = _ => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (confirmed) {
      expenseService.delete(id).then(response => {
        if (response.status === 204) {
          window.alert("Expense deleted!");
          history.push("/");
        }
      });
    }
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
            value={expense.expenseType ? expense.expenseType.id : 1}
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
          <label htmlFor="servicePeriodStart">Service Start:</label>
          <input
            type="date"
            id="servicePeriodStart"
            name="servicePeriodStart"
            placeholder="2019-01-01"
            value={expense.servicePeriodStart}
            onChange={evt =>
              setExpense({ ...expense, servicePeriodStart: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="servicePeriodEnd">Service End:</label>
          <input
            type="date"
            id="servicePeriodEnd"
            name="servicePeriodEnd"
            placeholder="2019-01-30"
            value={expense.servicePeriodEnd}
            onChange={evt =>
              setExpense({ ...expense, servicePeriodEnd: evt.target.value })
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

        {expense.paid && (
          <div>
            <label htmlFor="paid">Status: </label>
            <select
              name="paid"
              id="paid"
              value={expense.paid}
              onChange={evt =>
                setExpense({ ...expense, paid: evt.target.value })
              }
            >
              <option value={false}>Not Paid</option>
              <option value={true}>Paid</option>
            </select>
          </div>
        )}

        <div>
          <button type="button" onClick={() => cancel()}>
            Cancel
          </button>

          {id && (
            <button type="button" onClick={() => disableExpense()}>
              Delete
            </button>
          )}

          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
});
