import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";

function AddTransactionForm() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error(error));
  }, []);

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

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions([...transactions, data]);
        setForm({ description: "", amount: "", date: "", category: "" });
        alert("Transaction successfully added");
      })
      .catch((error) => console.error(error));
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTransactions(
          transactions.filter((transaction) => transaction.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Transaction Tracker</h1>
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
      <TransactionTable
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default AddTransactionForm;
