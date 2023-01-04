import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredValue, changeFilter] = useState("2020");

  const changeYear = (year) => {
    changeFilter(year);
  };

  return (
  <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredValue} onChangeFilter={changeYear} />
      {props.items.map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  </div> 
  );
};

export default Expense;
