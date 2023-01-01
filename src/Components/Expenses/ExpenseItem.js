import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import { useState } from "react";

const ExpenseItem = (props) => {
  
  const [value, updateValue] = useState(props.amount)

  const changeExpense = () => {
      updateValue('100')
  }

  const deleteEle = (id) => {
      document.getElementById(id).remove()
  } 

  return (
    <div id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={value} />
      <button onClick={changeExpense}>update</button>
      <button onClick={(e) => {deleteEle(props.id, e)}}>Delete</button>
      {/* <div>{props.location}</div> */}
    </div>
  );
}

export default ExpenseItem;
