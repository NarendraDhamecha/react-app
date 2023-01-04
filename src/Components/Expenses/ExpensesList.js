import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

let msg = <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>;

 if(props.items.length==0){
    return <h2 className="expenses-list__fallback">No expenses found</h2>
 }  

 else if(props.items.length==1){
     return props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        msg={msg}
      />
    ))
  }

  return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )

}

export default ExpensesList;