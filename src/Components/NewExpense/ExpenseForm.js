import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
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
   
   const submitEvent = (e) => {
      e.preventDefault();

      const expenseData = {
        title: enteredtitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData);
      updateTitle('');
      updateAmount('');
      updateDate('');
   }

    return (
      <form onSubmit={submitEvent}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredtitle} onChange={titleEvent}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountEvent} min='1.00'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateEvent} min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    )
}

export default ExpenseForm;
