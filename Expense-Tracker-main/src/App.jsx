import React, { useState } from "react"; // Importing React and the useState Hook
import "./App.css"; // Importing CSS for styling

const ExpenseTracker = () => { // Declaring a functional component called ExpenseTracker
  const [expenses, setExpenses] = useState([]); // Initializing state for expenses as an empty array
  const [totalExpense, setTotalExpense] = useState(0); // Initializing state for total expense as 0

  // Function to handle adding a new expense
  const handleAddExpense = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Creating a new expense object with an id, description, and amount
    const expense = {
      id: expenses.length + 1,
      description: event.target.elements.description.value,
      amount: event.target.elements.amount.value,
    };

    const updatedExpenses = [...expenses, expense]; // Adding the new expense to the existing expenses array
    setExpenses(updatedExpenses); // Updating the expenses state with the new array

    const updatedTotalExpense = totalExpense + parseFloat(expense.amount); // Calculating the new total expense
    setTotalExpense(updatedTotalExpense); // Updating the total expense state

    // Resetting the form fields
    event.target.elements.description.value = "";
    event.target.elements.amount.value = "";
  };

  // Function to handle removing an expense
  const handleRemoveExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id); // Filtering out the expense to be removed
    setExpenses(updatedExpenses); // Updating the expenses state

    // Calculating the new total expense after removing the specified expense
    const updatedTotalExpense =
      totalExpense - expenses.find((expense) => expense.id === id).amount;
    setTotalExpense(updatedTotalExpense); // Updating the total expense state
  };

  return (
    <div>
      <h1>Expense Tracker</h1> {/* Displaying the title */}

      <form onSubmit={handleAddExpense}> {/* Form for adding a new expense */}
        <label>Description:</label>
        <input type="text" name="description" required /> {/* Input for expense description */}

        <label>Amount:</label>
        <input type="number" name="amount" required /> {/* Input for expense amount */}

        <button type="submit">Add Expense</button> {/* Button to submit the form */}
      </form>

      <table> {/* Table to display the list of expenses */}
        <thead>
          <tr>
            <th>Description</th> {/* Table header for description */}
            <th>Amount</th> {/* Table header for amount */}
            <th>Actions</th> {/* Table header for actions */}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => ( // Mapping over the expenses array to create table rows
            <tr key={expense.id}> {/* Each row with a unique key */}
              <td>{expense.description}</td> {/* Displaying the expense description */}
              <td>₹{expense.amount}</td> {/* Displaying the expense amount */}
              <td>
                <button onClick={() => handleRemoveExpense(expense.id)}>
                  Remove {/* Button to remove the expense */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-expense">
        <p>Total Expense: ₹{totalExpense}</p> {/* Displaying the total expense */}
      </div>
    </div>
  );
};

export default ExpenseTracker; // Exporting the ExpenseTracker component
