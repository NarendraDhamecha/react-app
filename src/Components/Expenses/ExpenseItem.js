import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
      {/* <div>{props.location}</div> */}
    </div>
  );
}

export default ExpenseItem;
