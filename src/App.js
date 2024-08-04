import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TransactionTable from "./components/TransactionTable";
import AddTransactionForm from "./components/AddTransactionForm";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addTransaction = (transaction) => {
    axios
      .post("http://localhost:3000/transactions", transaction)
      .then((response) => {
        setTransactions([...transactions, response.data]);
        alert("Transaction successfully added");
      })
      .catch((error) => console.error(error));
  };

  const deleteTransaction = (id) => {
    axios
      .delete(`http://localhost:3000/transactions/${id}`)
      .then(() => {
        setTransactions(
          transactions.filter((transaction) => transaction.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionTable
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <Footer />
    </div>
  );
}

export default App;
