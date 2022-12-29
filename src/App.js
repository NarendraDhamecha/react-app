import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
      locationOfExpenditure: "Pune",
    },

    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(),
      locationOfExpenditure: "Mumbai",
    },

    {
      id: "e3",
      title: "New Desk",
      amount: 399.5,
      date: new Date(),
      locationOfExpenditure: "Dhule",
    },

    {
      id: "e4",
      title: "Travel",
      amount: 139.7,
      date: new Date(),
      locationOfExpenditure: "Banglore",
    },
  ];

  return ( 
  <div>
    <ExpenseItem
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
      location={expense[0].locationOfExpenditure}
    ></ExpenseItem>
    <ExpenseItem
      title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
      location={expense[1].locationOfExpenditure}
    ></ExpenseItem>
    <ExpenseItem
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
      location={expense[2].locationOfExpenditure}
    ></ExpenseItem>
    <ExpenseItem
      title={expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}
      location={expense[3].locationOfExpenditure}
    ></ExpenseItem>
  </div>);
}

export default App;