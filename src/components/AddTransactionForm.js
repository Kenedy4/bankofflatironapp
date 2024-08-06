import React, { useState } from "react";

// AddTransactionForm component
function AddTransactionForm({ onAddTransaction }) {
  // State variables for the form inputs
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddTransaction function with the new transaction data
    onAddTransaction({
      id: Date.now(),
      description,
      amount,
      date,
      category,
    });
    alert("Transaction Added Successfully"); //  Show a success alert
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("");
  };
  // Render the form with input fields and a submit button
  return (
    <div className="cardform">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
