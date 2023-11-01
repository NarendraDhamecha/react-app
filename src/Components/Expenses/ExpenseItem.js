import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import { useState } from "react";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  // const [value, updateValue] = useState(props.amount)

  // const changeExpense = () => {
  //     updateValue('100')
  // }

  // const deleteEle = (id) => {
  //     document.getElementById(id).remove()
  // } 

  return (
   <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
      {/* <button onClick={changeExpense}>update</button>
      <button onClick={(e) => {deleteEle(props.id, e)}}>Delete</button>
      <div>{props.location}</div> */}
    </Card>
    {props.msg}
   </li>
  );
}

export default ExpenseItem;
