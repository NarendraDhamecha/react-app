import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  const [isEditing, setIsEditing ] = useState(false);

  const SaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
      props.onExpenseData(expenseData);
      setIsEditing(false);
  }

  const showForm = () => {
    setIsEditing(true);
  }

  const cancelForm = () => {
      setIsEditing(false);
  }

    return (
        <div className="new-expense">
          {isEditing==false && <button onClick={showForm}>Add new expenses</button>}
          {isEditing==true && <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancel={cancelForm}/>}
        </div>
    )
}

export default NewExpense;