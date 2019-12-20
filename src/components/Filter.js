import React from "react";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const lastDay = new Date(currentYear, currentMonth, 0).getDate();

const emptyFilterParams = {
  period: {
    start: `${currentYear}-${currentMonth}-01`,
    end: `${currentYear}-${currentMonth}-${lastDay}`
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
          name="start"
          id="start"
          value={filterParams.period.start}
          onChange={evt =>
            setFilterParams({
              ...filterParams,
              period: {
                ...filterParams.period,
                start: evt.target.value
              }
            })
          }
        />
        <span> ~ </span>
        <input
          type="date"
          name="end"
          id="end"
          value={filterParams.period.end}
          onChange={evt =>
            setFilterParams({
              ...filterParams,
              period: {
                ...filterParams.period,
                end: evt.target.value
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
