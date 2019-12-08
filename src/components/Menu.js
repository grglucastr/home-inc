import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){
  return(
    <div>
      <ul>
        <li><Link to="/pay">Expenses to Pay</Link> </li>
        <li><Link to="/paid">Paid Expenses</Link> </li>
        <li><Link to="/report">Expenses Report</Link> </li>
        <li><Link to="/expense">Add New Expense</Link> </li>
      </ul>
    </div>
  )
}