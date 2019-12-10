import React from "react";

export default function Form() {
  const submitForm = e => {
    e.preventDefault();
    console.log("submitting form...");
  };

  return (
    <div>
      <h3>Expense</h3>

      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Conta de Luz"
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" name="type">
            <option disabled>Select Type</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input type="text" id="cost" name="cost" placeholder="R$ 150,00" />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            placeholder="2019-01-20"
          />
        </div>
        <div>
          <label htmlFor="invoiceDate">Invoice Date:</label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            placeholder="2019-01-15"
          />
        </div>
        <div>
          <label htmlFor="serviceStart">Service Start:</label>
          <input
            type="date"
            id="serviceStart"
            name="serviceStart"
            placeholder="2019-01-01"
          />
        </div>
        <div>
          <label htmlFor="serviceEnd">Service End:</label>
          <input
            type="date"
            id="serviceEnd"
            name="serviceEnd"
            placeholder="2019-01-30"
          />
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
