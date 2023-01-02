

const ExpenseForm = () => {

    const showValue = () => {
      console.log(document.getElementById('title').value);
      console.log(document.getElementById('amount').value);
      console.log(document.getElementById('date').value);
    }

    return (
        <form onChange={showValue}>
           <label>Expense Title</label>
           <input id="title" type='text'></input>
           <label>Expense Amount</label>
           <input id="amount" type="number"></input> 
           <label>Expense Date</label>
           <input id="date" type="date"></input>
           <button>Submit</button>  
        </form>
    )
}

export default ExpenseForm;