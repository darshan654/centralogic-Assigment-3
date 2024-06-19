import React, { useState } from "react";
import "./App.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddExpense = (event) => {
    event.preventDefault();

    const expense = {
      id: expenses.length + 1,
      description: event.target.elements.description.value,
      amount: parseFloat(event.target.elements.amount.value),
    };

    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);

    const updatedTotalExpense = totalExpense + expense.amount;
    setTotalExpense(updatedTotalExpense);

    event.target.elements.description.value = "";
    event.target.elements.amount.value = "";
  };

  const handleRemoveExpense = (id) => {
    const expenseToRemove = expenses.find((expense) => expense.id === id);
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    const updatedTotalExpense = totalExpense - expenseToRemove.amount;
    setTotalExpense(updatedTotalExpense);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleAddExpense}>
        <label>Description:</label>
        <input type="text" name="description" required />

        <label>Amount:</label>
        <input type="number" name="amount" required />

        <button type="submit">Add Expense</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>₹{expense.amount}</td>
              <td>
                <button onClick={() => handleRemoveExpense(expense.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-expense">
        <p>Total Expense: ₹{totalExpense}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;


// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(`Heello, ${name}`);
//   };

//   return (
//     <div>
      
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={name}
//         onChange={handleChange}
//       />
//       <button onClick={handleButtonClick}>Say Hello</button>
//     </div>
//   );
// };

// export default App;

