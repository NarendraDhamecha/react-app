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

  const filteredYear = props.items.filter(
    expense => expense.date.getFullYear() === parseInt(filteredValue)
  );

  let expensesContent = <p>No expenses found</p>;

  let msg = <p>Only single Expense here. Please add more...</p>;

 if(filteredYear.length==1){
    expensesContent = filteredYear.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        msg={msg}
      />
    ))
  }

  else if(filteredYear.length > 0){
      expensesContent = filteredYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredValue} onChangeFilter={changeYear} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expense;
