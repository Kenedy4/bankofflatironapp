import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount || !form.date || !form.category) {
      alert("All fields are required");
      return;
    }
    const newTransaction = { ...form, id: Date.now() };
    addTransaction(newTransaction);
    setForm({ description: "", amount: "", date: "", category: "" });
    alert("Transaction successfully added");
  };

  return (
    <div>
      <h1>Customer Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
