import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
   
  const [enteredtitle, updateTitle] = useState('');
  const [enteredAmount, updateAmount] = useState('');
  const [enteredDate, updateDate] = useState('');

   const titleEvent = (e) => {
    updateTitle(e.target.value);
   };

   const amountEvent = (e) => {
    updateAmount(e.target.value);
   };

   const dateEvent = (e) => {
    updateDate(e.target.value);
   };
   

    return (
      <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleEvent}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' onChange={amountEvent} min='1.00'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' onChange={dateEvent} min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    )
}

export default ExpenseForm;
