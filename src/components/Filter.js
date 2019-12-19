import React from "react";

const emptyFilterParams = {
  dueDatePeriod: {
    dueDateStart: "",
    dueDateEnd: ""
  },
  active: true
};

export default function Filter({ onFilter }) {
  const [filterParams, setFilterParams] = React.useState(emptyFilterParams);

  return (
    <div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDateStart"
          id="dueDateStart"
          value={filterParams.dueDatePeriod.dueDateStart}
          onChange={evt =>
            setFilterParams({
              ...filterParams,
              dueDatePeriod: {
                ...filterParams.dueDatePeriod,
                dueDateStart: evt.target.value
              }
            })
          }
        />
        <span> ~ </span>
        <input
          type="date"
          name="dueDateEnd"
          id="dueDateEnd"
          value={filterParams.dueDatePeriod.dueDateEnd}
          onChange={evt =>
            setFilterParams({
              ...filterParams,
              dueDatePeriod: {
                ...filterParams.dueDatePeriod,
                dueDateEnd: evt.target.value
              }
            })
          }
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="active"
            id="active"
            value="1"
            checked={filterParams.active}
            onChange={evt => {
              setFilterParams({
                ...filterParams,
                active: !filterParams.active
              });
            }}
          />
          Active expenses
        </label>
      </div>

      <div>
        <button type="button" onClick={() => onFilter(filterParams)}>
          Search
        </button>
      </div>
    </div>
  );
}
