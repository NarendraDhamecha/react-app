import { useState } from "react";
import "./App.css";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020,3,15),
    locationOfExpenditure: "Pune",
  },

  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021,5,20),
    locationOfExpenditure: "Mumbai",
  },

  {
    id: "e3",
    title: "New Desk",
    amount: 399.5,
    date: new Date(2022,4,12),
    locationOfExpenditure: "Dhule",
  },

  {
    id: "e4",
    title: "Travel",
    amount: 139.7,
    date: new Date(2022,11,31),
    locationOfExpenditure: "Banglore",
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseEvent = (expenseData) => {
     setExpenses((prevExpenses) => {
         return [expenseData, ...prevExpenses];
     })
  }

  return ( 
  <div>
    <NewExpense onExpenseData={addExpenseEvent} />
    <Expense items={expenses}/>
  </div>
  );
}

export default App;