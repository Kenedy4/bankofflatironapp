import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionTable from "./components/TransactionTable";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const handleDeleteTransaction = (transactionId) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== transactionId)
    );
  };
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AddTransactionForm
        onAddTransaction={handleAddTransaction}
        transactions={filteredTransactions}
      />{" "}
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
      <Footer />
    </div>
  );
}

export default App;
