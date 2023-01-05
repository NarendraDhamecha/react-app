import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredValue, changeFilter] = useState("2020");

  const changeYear = (year) => {
    changeFilter(year);
  };

  const filteredYear = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredValue)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredValue} onChangeFilter={changeYear} />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expense;
