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
      amount: event.target.elements.amount.value,
    };

    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);

    const updatedTotalExpense = totalExpense + parseFloat(expense.amount);
    setTotalExpense(updatedTotalExpense);

    event.target.elements.description.value = "";
    event.target.elements.amount.value = "";
  };

  const handleRemoveExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    const updatedTotalExpense =
      totalExpense - expenses.find((expense) => expense.id === id).amount;
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
