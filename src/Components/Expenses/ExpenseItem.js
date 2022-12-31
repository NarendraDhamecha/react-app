import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  
  const deleteEle = (id) => {
      document.getElementById(id).remove()
  } 

  return (
    <div id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
      <button onClick={(e) => {deleteEle(props.id, e)}}>Delete</button>
      {/* <div>{props.location}</div> */}
    </div>
  );
}

export default ExpenseItem;
